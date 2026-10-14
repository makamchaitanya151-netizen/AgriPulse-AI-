/**
 * Speech Synthesis Service for Multilingual Actionable Advisory
 * Uses standard browser SpeechSynthesis API with graceful fallbacks
 */

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.currentUtterance = null;
    this.isPlaying = false;
    this.onStateChangeCallbacks = new Set();
  }

  subscribe(callback) {
    this.onStateChangeCallbacks.add(callback);
    return () => this.onStateChangeCallbacks.delete(callback);
  }

  notify(state) {
    this.isPlaying = state.isPlaying;
    this.onStateChangeCallbacks.forEach((cb) => cb(state));
  }

  speak(text, langCode = 'en-US', rate = 0.95, pitch = 1.0) {
    if (!this.synth) {
      console.warn('SpeechSynthesis is not supported in this environment');
      this.notify({ isPlaying: false, text, error: 'Web Speech API not supported' });
      return;
    }

    // Cancel any active audio
    this.stop();

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = langCode;
      utterance.rate = rate;
      utterance.pitch = pitch;

      // Find best matching voice if available
      const voices = this.synth.getVoices();
      if (voices && voices.length > 0) {
        const matchingVoice = voices.find((v) => 
          v.lang.toLowerCase().startsWith(langCode.toLowerCase().slice(0, 2))
        );
        if (matchingVoice) {
          utterance.voice = matchingVoice;
        }
      }

      utterance.onstart = () => {
        this.notify({ isPlaying: true, text, langCode });
      };

      utterance.onend = () => {
        this.notify({ isPlaying: false, text: null, langCode });
        this.currentUtterance = null;
      };

      utterance.onerror = (e) => {
        console.warn('Speech synthesis error or interrupted:', e);
        this.notify({ isPlaying: false, text: null, error: e.error });
        this.currentUtterance = null;
      };

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
    } catch (err) {
      console.error('Failed to trigger speech synthesis:', err);
      this.notify({ isPlaying: false, text: null, error: err.message });
    }
  }

  pause() {
    if (this.synth && this.synth.speaking && !this.synth.paused) {
      this.synth.pause();
      this.notify({ isPlaying: false, isPaused: true });
    }
  }

  resume() {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
      this.notify({ isPlaying: true, isPaused: false });
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.notify({ isPlaying: false, isPaused: false, text: null });
      this.currentUtterance = null;
    }
  }

  getIsPlaying() {
    return this.isPlaying;
  }
}

export const speechService = new SpeechService();

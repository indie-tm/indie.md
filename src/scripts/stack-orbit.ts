const HOLD_MS = 4_000;
const EXIT_MS = 320;
const ENTER_MS = 640;
const STAGGER_MS = 70;

// Adapted from Hyperframes' Soft Blur In and Blur Out Up catalog primitives.
// Native animations let the profile pause the effect without a video runtime.
const EXIT_FRAMES: Keyframe[] = [
  { opacity: 1, filter: "blur(0px)", transform: "translate3d(0, 0, 0) scale(1)" },
  { opacity: 0, filter: "blur(5px)", transform: "translate3d(0, -14px, 0) scale(0.96)" },
];
const ENTER_FRAMES: Keyframe[] = [
  { opacity: 0, filter: "blur(8px)", transform: "translate3d(0, 14px, 0) scale(0.96)" },
  { opacity: 1, filter: "blur(0px)", transform: "translate3d(0, 0, 0) scale(1)" },
];

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

class StackOrbit extends HTMLElement {
  #abort?: AbortController;
  #observer?: IntersectionObserver;
  #timer?: number;
  #visible = false;
  #toggle: HTMLInputElement | null = null;
  #reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  #slots: HTMLElement[] = [];
  #pool: HTMLAnchorElement[] = [];
  #animations = new Set<Animation>();

  connectedCallback() {
    const root = this.closest(".person-stack");
    if (!root || this.#abort) return;
    this.#slots = [...this.querySelectorAll<HTMLElement>(".floating-tool-face")];
    const sources = [...root.querySelectorAll<HTMLAnchorElement>(".tool-badge")];
    this.#pool = [...new Map(sources.map((source) => [source.dataset.toolId, source])).values()];
    if (this.#pool.length <= this.#slots.length) return;

    this.#abort = new AbortController();
    const { signal } = this.#abort;
    this.#toggle = root.querySelector<HTMLInputElement>(".motion-toggle");
    this.#toggle?.addEventListener("change", this.#syncPlayback, { signal });
    this.#reduced.addEventListener("change", this.#syncPlayback, { signal });
    document.addEventListener("visibilitychange", this.#syncPlayback, { signal });
    this.#observer = new IntersectionObserver(([entry]) => {
      this.#visible = entry.isIntersecting;
      this.#syncPlayback();
    });
    this.#observer.observe(this);
    this.#syncPlayback();
  }

  disconnectedCallback() {
    this.#abort?.abort();
    this.#abort = undefined;
    this.#observer?.disconnect();
    this.#visible = false;
    this.#clearTimer();
    this.#cancelAnimations();
  }

  #shouldRun() {
    return (
      this.isConnected &&
      this.#visible &&
      !document.hidden &&
      !this.#reduced.matches &&
      !this.#toggle?.checked
    );
  }

  #syncPlayback = () => {
    const running = this.#shouldRun();
    this.toggleAttribute("data-motion-paused", !running);
    if (!running) this.#clearTimer();
    if (this.#reduced.matches) this.#cancelAnimations();
    for (const animation of this.#animations) {
      if (running) animation.play();
      else animation.pause();
    }
    if (running) this.#schedule();
  };

  #clearTimer() {
    window.clearTimeout(this.#timer);
    this.#timer = undefined;
  }

  #cancelAnimations() {
    for (const animation of this.#animations) animation.cancel();
    this.#animations.clear();
  }

  #schedule() {
    if (this.#timer !== undefined || this.#animations.size > 0 || !this.#shouldRun()) return;
    this.#timer = window.setTimeout(this.#replaceBatch, HOLD_MS);
  }

  #replaceBatch = () => {
    this.#timer = undefined;
    if (!this.#shouldRun()) return;
    const current = new Set(this.#slots.map((slot) => slot.dataset.toolId));
    const fresh = shuffle(this.#pool.filter((source) => !current.has(source.dataset.toolId)));
    const returning = shuffle(this.#pool.filter((source) => current.has(source.dataset.toolId)));
    const next = [...fresh, ...returning].slice(0, this.#slots.length);
    this.#slots.forEach((slot, index) => {
      this.#fadeOut(slot, next[index], index);
    });
  };

  #fadeOut(slot: HTMLElement, source: HTMLAnchorElement, index: number) {
    const animation = slot.animate(EXIT_FRAMES, {
      duration: EXIT_MS,
      delay: index * STAGGER_MS,
      easing: "cubic-bezier(0.4, 0, 1, 1)",
      fill: "forwards",
    });
    this.#track(animation, () => {
      const content = [...source.querySelectorAll(".stack-mark, .tool-name")];
      slot.replaceChildren(...content.map((node) => node.cloneNode(true)));
      slot.dataset.toolId = source.dataset.toolId;
      slot.parentElement?.style.setProperty(
        "--tile-color",
        source.dataset.toolColor ?? "transparent",
      );
      this.#fadeIn(slot);
    });
  }

  #fadeIn(slot: HTMLElement) {
    const animation = slot.animate(ENTER_FRAMES, {
      duration: ENTER_MS,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fill: "both",
    });
    this.#track(animation, () => this.#schedule());
  }

  #track(animation: Animation, complete: () => void) {
    this.#animations.add(animation);
    animation.onfinish = () => {
      this.#animations.delete(animation);
      animation.cancel();
      if (this.isConnected && !this.#reduced.matches) complete();
    };
    if (!this.#shouldRun()) animation.pause();
  }
}

if (!customElements.get("stack-orbit")) customElements.define("stack-orbit", StackOrbit);

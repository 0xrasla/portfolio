// Simple intersection observer powered reveal utility for Svelte 5
// Usage: <div use:reveal={{ once: true, animation: 'fade-up' }} />

interface RevealOptions {
  root?: Element | null;
  margin?: string;
  threshold?: number;
  once?: boolean;
  animation?: "fade" | "fade-up" | "fade-left" | "fade-right" | "scale";
}

export function reveal(node: HTMLElement, opts: RevealOptions = {}) {
  const {
    root = null,
    margin = "0px 0px -10% 0px",
    threshold = 0.1,
    once = true,
    animation = "fade",
  } = opts;

  const base =
    "opacity-0 will-change-transform transition duration-700 ease-out";
  const animMap: Record<string, string> = {
    fade: "translate-y-0",
    "fade-up": "translate-y-4",
    "fade-left": "translate-x-4",
    "fade-right": "-translate-x-4",
    scale: "scale-[0.96]",
  };

  node.classList.add(...base.split(" "), ...animMap[animation].split(" "));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          node.classList.remove("opacity-0");
          node.classList.remove(
            "translate-y-4",
            "translate-x-4",
            "-translate-x-4",
            "scale-[0.96]"
          );
          observer.unobserve(node);
        } else if (!once) {
          // reset
          node.classList.add("opacity-0");
        }
      });
    },
    { root, rootMargin: margin, threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}

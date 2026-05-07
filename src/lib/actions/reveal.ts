export function reveal(node: HTMLElement, { delay = 0, duration = 600, threshold = 0.1 } = {}) {
    // We only want to animate if the user prefers reduced motion is false, but for simplicity let's just do it
    // Wait, let's respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        return;
    }

    // Initial hidden state
    node.style.opacity = '0';
    node.style.transform = 'translateY(30px)';
    node.style.transition = `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                node.style.opacity = '1';
                node.style.transform = 'translateY(0)';
                observer.unobserve(node); // Reveal only once
            }
        });
    }, {
        threshold
    });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}

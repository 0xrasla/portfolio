<script lang="ts">
  import { onMount } from "svelte";

  let scrolled = $state(false);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

<header
  class="fixed top-0 w-full z-50 transition-all duration-300"
  class:scrolled
>
  <nav class="max-w-6xl mx-auto px-4 py-4">
    <div class="flex items-center justify-between">
      <a
        href="/"
        class="text-lg font-bold text-foreground hover:text-accent transition-colors"
      >
        0xRasla
      </a>

      <div class="hidden md:flex items-center space-x-8">
        <button
          onclick={() => scrollToSection("work")}
          class="text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          Experience
        </button>
        <button
          onclick={() => scrollToSection("projects")}
          class="text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          Projects
        </button>
        <button
          onclick={() => scrollToSection("videos")}
          class="text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          Videos
        </button>
        <button
          onclick={() => scrollToSection("blog")}
          class="text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          Blog
        </button>
        <a
          href="/blog"
          class="text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          All Posts
        </a>
        <button
          onclick={() => scrollToSection("contact")}
          class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent text-white rounded-lg hover:opacity-90 transition-all"
        >
          Contact
        </button>
      </div>

      <button
        class="md:hidden p-2 text-muted hover:text-foreground transition-colors"
        aria-label="Toggle menu"
      >
        <span class="i-lucide-menu h-5 w-5"></span>
      </button>
    </div>
  </nav>
</header>

<style>
  header {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  header:not(.scrolled) {
    background-color: transparent;
  }

  header.scrolled {
    background-color: hsl(var(--bg) / 0.8);
    border-bottom: 1px solid hsl(var(--border) / 0.5);
  }
</style>

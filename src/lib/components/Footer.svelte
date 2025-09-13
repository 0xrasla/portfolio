<script lang="ts">
  import { siteMeta } from "$lib/data";
  import Icon from "@iconify/svelte";
  const year = new Date().getFullYear();
</script>

<footer class="mt-24 border-t border-border/50 py-10">
  <div
    class="mx-auto max-w-5xl px-4 md:px-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between text-xs text-muted/70"
  >
    <div>
      <p>&copy; {year} {siteMeta.author}. All rights reserved.</p>
      <p class="mt-1">Built with Svelte 5 & Tailwind.</p>
    </div>
    <nav class="flex gap-4">
      <a
        href="#work"
        class="inline-flex items-center gap-1 hover:text-foreground transition-colors"
      >
        <Icon icon="lucide:briefcase" class="h-3.5 w-3.5 opacity-60" /> Experience
      </a>
      <a
        href="#projects"
        class="inline-flex items-center gap-1 hover:text-foreground transition-colors"
      >
        <Icon icon="lucide:boxes" class="h-3.5 w-3.5 opacity-60" /> Projects
      </a>
      <a
        href="#videos"
        class="inline-flex items-center gap-1 hover:text-foreground transition-colors"
      >
        <Icon icon="lucide:play-circle" class="h-3.5 w-3.5 opacity-60" /> Videos
      </a>
      <a
        href="#contact"
        class="inline-flex items-center gap-1 hover:text-foreground transition-colors"
      >
        <Icon icon="lucide:send" class="h-3.5 w-3.5 opacity-60" /> Contact
      </a>
    </nav>
  </div>
</footer>

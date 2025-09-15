<script lang="ts">
  import { siteMeta } from "$lib/data";
  import Icon from "@iconify/svelte";
  import SocialLinks from "./SocialLinks.svelte";
  const year = new Date().getFullYear();
</script>

<footer class="mt-24 border-t border-border/50 py-12 bg-bg/20">
  <div class="mx-auto max-w-6xl px-4 md:px-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div class="text-center md:text-left">
        <p class="text-sm text-muted/80">&copy; {year} {siteMeta.author}</p>
        <p class="text-xs text-muted/60 mt-1">All rights reserved</p>
      </div>

      <div class="flex justify-center">
        <SocialLinks />
      </div>

      <nav class="flex flex-wrap justify-center md:justify-end gap-3">
        <a
          href="#work"
          class="inline-flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-bg/60 transition-colors text-xs font-medium text-muted hover:text-foreground"
        >
          <Icon icon="lucide:briefcase" class="h-3.5 w-3.5 opacity-70" />
          Experience
        </a>
        <a
          href="#projects"
          class="inline-flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-bg/60 transition-colors text-xs font-medium text-muted hover:text-foreground"
        >
          <Icon icon="lucide:boxes" class="h-3.5 w-3.5 opacity-70" />
          Projects
        </a>
        <a
          href="#videos"
          class="inline-flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-bg/60 transition-colors text-xs font-medium text-muted hover:text-foreground"
        >
          <Icon icon="lucide:play-circle" class="h-3.5 w-3.5 opacity-70" />
          Videos
        </a>
        <a
          href="#contact"
          class="inline-flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-bg/60 transition-colors text-xs font-medium text-muted hover:text-foreground"
        >
          <Icon icon="lucide:send" class="h-3.5 w-3.5 opacity-70" />
          Contact
        </a>
      </nav>
    </div>

    <!-- Bottom divider and tagline -->
    <div class="mt-8 pt-6 border-t border-border/30">
      <p class="text-center text-xs text-muted/50">
        Crafting digital experiences with passion and precision
      </p>
    </div>
  </div>
</footer>

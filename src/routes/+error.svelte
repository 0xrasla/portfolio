<script lang="ts">
  import { reveal } from "$lib/anim";
</script>

<svelte:head>
  <title>404 - Page Not Found - Thinesh Rasla</title>
  <meta
    name="description"
    content="The page you're looking for doesn't exist."
  />
</svelte:head>

<div class="max-w-2xl mx-auto text-center py-16" use:reveal>
  <div class="mb-8">
    <h1 class="text-6xl font-bold text-foreground mb-4">404</h1>
    <h2 class="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
    <p class="text-muted leading-relaxed">
      The page you're looking for doesn't exist or has been moved.
    </p>
  </div>

  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="/blog"
      class="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-accent text-white rounded-lg hover:opacity-90 transition-all"
    >
      <span class="i-lucide-arrow-left h-4 w-4"></span>
      Back to Blog
    </a>
    <a
      href="/"
      class="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground bg-border/20 rounded-lg hover:bg-border/30 transition-all"
    >
      <span class="i-lucide-home h-4 w-4"></span>
      Go Home
    </a>
  </div>
</div>

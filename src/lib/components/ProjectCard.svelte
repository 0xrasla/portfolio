<script lang="ts">
  import type { Project } from "$lib/data";
  import Icon from "@iconify/svelte";
  let { project } = $props<{ project: Project }>();
</script>

<a
  href={project.demo || project.github}
  target="_blank"
  rel="noopener"
  class="group rounded-xl border border-border/60 bg-bg/40 backdrop-blur hover:bg-bg/70 transition-colors overflow-hidden ring-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 h-full flex flex-col"
>
  <div class="relative aspect-video w-full overflow-hidden">
    {#if project.image}
      <img
        loading="lazy"
        src={project.image}
        alt={project.title}
        class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
      />
    {:else}
      <div class="h-full w-full bg-muted/20 flex items-center justify-center">
        <Icon icon="lucide:code" class="h-16 w-16 text-muted/40" />
      </div>
    {/if}
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
    ></div>
  </div>
  <div class="p-4 flex flex-col gap-2 flex-grow">
    <h3 class="font-semibold text-sm md:text-base tracking-tight leading-snug">
      {project.title}
    </h3>
    <p class="text-xs md:text-sm text-muted/70 line-clamp-3">
      {project.description}
    </p>
    <div class="flex flex-wrap gap-1 pt-1">
      {#each project.tags as tag}
        <span
          class="text-[10px] uppercase tracking-wide bg-muted/10 text-muted/60 border border-border/40 rounded px-2 py-1"
          >{tag}</span
        >
      {/each}
    </div>
    <div class="mt-2 flex items-center gap-4 text-[11px] text-muted/60">
      <span class="inline-flex items-center gap-1">
        <Icon icon="lucide:star" class="h-3 w-3 text-amber-400" />
        {project.stats.stars}
      </span>
      <span class="inline-flex items-center gap-1">
        <Icon icon="lucide:git-fork" class="h-3 w-3" />
        {project.stats.forks}
      </span>
      {#if project.github}
        <span
          class="ml-auto inline-flex items-center gap-1 opacity-0 group-hover:opacity-80 transition-opacity"
        >
          <Icon icon="lucide:github" class="h-3 w-3" /> Code
        </span>
      {/if}
    </div>
  </div>
</a>

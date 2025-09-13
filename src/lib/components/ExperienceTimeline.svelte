<script lang="ts">
  import type { WorkExperience } from "$lib/data";
  import Icon from "@iconify/svelte";
  let { items } = $props<{ items: WorkExperience[] }>();
</script>

<div class="relative pl-4 md:pl-6 border-l border-border/50">
  {#each items as item, i}
    <article
      class="group mb-10 last:mb-0 animate-in fade-in slide-in-from-left-4 duration-500 relative pl-6"
      style={`animation-delay:${i * 60}ms`}
    >
      <span
        class="absolute left-[-11px] top-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-border/60 bg-bg/80 backdrop-blur text-[11px] text-muted"
      >
        <Icon icon="lucide:briefcase" class="h-3.5 w-3.5" />
      </span>
      <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
        <time
          class="text-[11px] font-mono uppercase tracking-wide text-muted/70"
          >{item.period}</time
        >
        <h3 class="text-base md:text-lg font-semibold leading-tight">
          {item.role}
          <span class="text-muted font-normal">@ {item.company}</span>
        </h3>
      </div>
      <p class="mt-2 text-sm text-muted/80 max-w-3xl leading-relaxed">
        {item.description}
      </p>
      <ul class="mt-3 flex flex-wrap gap-1.5">
        {#each item.skills as s}
          <li
            class="text-[10px] uppercase tracking-wide font-medium bg-muted/10 text-muted/70 border border-border/40 rounded px-2 py-1"
          >
            {s}
          </li>
        {/each}
      </ul>
      {#if item.achievements}
        <ul class="mt-3 space-y-1.5 text-xs text-muted/70 max-w-3xl ml-1">
          {#each item.achievements as a}
            <li class="flex items-start gap-2">
              <Icon
                icon="lucide:check-circle"
                class="mt-[2px] h-3.5 w-3.5 text-emerald-500 shrink-0"
              />
              <span>{a}</span>
            </li>
          {/each}
        </ul>
      {/if}
    </article>
  {/each}
</div>

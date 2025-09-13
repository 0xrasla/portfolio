<script lang="ts">
  import type { Video } from "$lib/data";
  import Icon from "@iconify/svelte";
  let { video } = $props<{ video: Video }>();
</script>

<a
  href={video.url}
  target="_blank"
  rel="noopener"
  class="group flex gap-4 rounded-lg border border-border/60 p-3 hover:bg-bg/60 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500"
>
  <div class="relative w-40 shrink-0 overflow-hidden rounded-md aspect-video">
    <img
      src={video.thumbnail}
      alt={video.title}
      class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
    <span
      class="absolute bottom-1 right-1 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-medium text-white/90"
      >{video.duration}</span
    >
  </div>
  <div class="flex flex-col">
    <h3 class="text-sm font-semibold leading-snug line-clamp-2">
      {video.title}
    </h3>
    <p class="mt-1 text-xs text-muted/70 line-clamp-3">{video.description}</p>
    <span
      class="mt-auto text-[11px] inline-flex items-center gap-1 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <Icon icon="lucide:play-circle" class="h-3 w-3" /> Watch
    </span>
  </div>
</a>

<script lang="ts">
  import { videos } from "$lib/data";
  import VideoCard from "./VideoCard.svelte";
</script>

<div class="space-y-4">
  {#each videos as video, i}
    <div
      class="animate-in fade-in slide-in-from-left-4 duration-500"
      style={`animation-delay:${i * 70}ms`}
    >
      <VideoCard {video} />
    </div>
  {/each}
</div>

<script lang="ts">
  import { projects } from "$lib/data";
  import ProjectCard from "./ProjectCard.svelte";
</script>

<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {#each projects as project, i}
    <div
      class="animate-in fade-in slide-in-from-bottom-6 duration-500"
      style={`animation-delay:${i * 60}ms`}
    >
      <ProjectCard {project} />
    </div>
  {/each}
</div>

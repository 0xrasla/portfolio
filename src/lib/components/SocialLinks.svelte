<script lang="ts">
  import { socialLinks } from "$lib/data";
  import Icon from "@iconify/svelte";
</script>

<ul class="flex flex-wrap gap-3">
  {#each socialLinks as link}
    <li>
      <a
        href={link.url}
        target="_blank"
        rel="noopener"
        class="group inline-flex items-center gap-1 rounded-md border border-border/60 bg-bg/40 px-3 py-1.5 text-xs font-medium text-muted hover:text-foreground hover:bg-bg/70 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        {#if link.icon}
          <Icon
            icon={link.icon}
            class="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity"
          />
        {/if}
        <span>{link.label}</span>
        <Icon
          icon="lucide:external-link"
          class="h-3 w-3 opacity-40 group-hover:opacity-80 transition-opacity"
        />
      </a>
    </li>
  {/each}
</ul>

<script lang="ts">
  let {
    id,
    title,
    intro = "",
    children,
  } = $props<{ id?: string; title?: string; intro?: string; children?: any }>();
</script>

<section {id} class="mx-auto max-w-5xl px-4 md:px-6 py-6 relative">
  {#if title}
    <div class="mb-10 text-start" data-section-header>
      <h1
        class="text-2xl md:text-3xl font-semibold tracking-tight flex items-center gap-2"
        style="font-family: 'Schoolbell', cursive;"
      >
        <span class="text-[13px] font-mono tracking-tight text-gray-700"
          >{"<h1>"}</span
        >{title}<span class="text-[13px] font-mono tracking-tight text-gray-700"
          >{"</h1>"}</span
        >
        <span
          class="i-lucide-edit h-5 w-5 text-accent/70 animate-spin"
          style="animation-duration: 3s;"
        ></span>
      </h1>
      {#if intro}
        <p
          class="mt-3 text-sm md:text-base text-muted/80 max-w-2xl text-pretty"
        >
          <span class="text-[13px] font-mono tracking-tight text-gray-700"
            >{"<p>"}</span
          >
          {intro}
          <span class="text-[13px] font-mono tracking-tight text-gray-700"
            >{"</p>"}</span
          >
        </p>
      {/if}
    </div>
  {/if}
  {@render children?.()}
  <div
    class="mt-16 h-px w-full bg-gradient-to-r from-transparent via-border/60 to-transparent"
  ></div>
</section>

<style>
  :global([data-section-header]) h1 span {
    font-weight: 400;
  }
</style>

<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import { siteMeta } from "$lib/data";
  import "../app.css";
  let { children } = $props();
  const { title, description, keywords, url, ogImage, author, twitter } =
    siteMeta;

  let flareEl: HTMLDivElement;
  let mouseX = 0;
  let mouseY = 0;

  function updateMouse(e: MouseEvent) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (flareEl) {
      flareEl.style.left = mouseX + "px";
      flareEl.style.top = mouseY + "px";
    }
  }

  $effect(() => {
    if (flareEl) {
      document.addEventListener("mousemove", updateMouse);
    }
  });
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" href="/favicon-32x32.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords.join(", ")} />
  <meta name="author" content={author} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:image" content={ogImage} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
  {#if twitter?.handle}
    <meta name="twitter:creator" content={twitter.handle} />
  {/if}
  <meta name="viewport" content="width=device-width,initial-scale=1" />
</svelte:head>

<div class="mouse-flare" bind:this={flareEl}></div>

<Header />

{@render children?.()}

<style>
  .mouse-flare {
    position: fixed;
    width: 20px;
    height: 20px;
    background: radial-gradient(
      circle,
      rgba(160, 132, 57, 0.3) 0%,
      transparent 70%
    );
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
  }
</style>

<script lang="ts">
  import { socialLinks } from "$lib/data";
  import Icon from "@iconify/svelte";
  const headline = "Full‑Stack Engineer & Open Source Builder";
  const sub =
    "I craft fast, minimal, accessible products with TypeScript, Svelte, React & modern backend stacks. Currently shipping scalable systems at Wenoxo and sharing what I learn.";
  const avatar = "https://avatars.githubusercontent.com/u/76244740?v=4";
  function scrollContact() {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
</script>

<section class="relative overflow-hidden">
  <div class="mx-auto max-w-5xl px-4 md:px-6 pt-16 md:pt-28 pb-20">
    <div class="space-y-8">
      <div
        class="flex items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-700"
      >
        <img
          src={avatar}
          alt="Thinesh Rasla avatar"
          width={72}
          height={72}
          class="h-16 w-16 rounded-full border border-border/60 shadow-sm object-cover"
        />
        <div class="flex flex-col">
          <span class="text-sm font-mono text-muted/70"
            >Hey there <span class="inline-block animate-wave origin-[70%_70%]"
              >👋</span
            ></span
          >
          <h1
            class="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05] text-balance"
          >
            Thinesh Rasla<span class="text-muted"> / 0xRasla</span>
          </h1>
        </div>
      </div>
      <div
        class="inline-flex items-center gap-2 rounded-full border border-border/50 bg-bg/40 backdrop-blur px-4 py-1.5 text-xs md:text-sm text-muted animate-in fade-in slide-in-from-top-4 duration-700"
      >
        <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span> Available
        for interesting OSS collaborations
      </div>
      <p
        class="max-w-2xl text-base md:text-lg text-muted/90 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100"
      >
        {headline}
      </p>
      <p
        class="max-w-2xl text-sm md:text-base text-muted/70 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150"
      >
        {sub}
      </p>
      <div
        class="flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150"
      >
        <a
          href="/Thinesh Rasla Resume.pdf"
          download="Thinesh_Rasla_Resume.pdf"
          class="inline-flex items-center gap-2 rounded-md border border-border/60 bg-bg/60 px-4 py-2 text-xs md:text-sm font-medium hover:bg-bg/80 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500/50"
        >
          <Icon icon="lucide:download" class="h-4 w-4" /> Resume
        </a>
        <button
          type="button"
          on:click={scrollContact}
          class="inline-flex items-center gap-2 rounded-md bg-emerald-500/90 text-white px-4 py-2 text-xs md:text-sm font-medium shadow-sm hover:bg-emerald-500 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500/60"
        >
          <Icon icon="lucide:sparkles" class="h-4 w-4" /> Contact Me
        </button>
      </div>
      <div
        class="flex flex-wrap gap-3 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
      >
        {#each socialLinks as link}
          <a
            href={link.url}
            target="_blank"
            rel="noopener"
            class="group inline-flex items-center gap-1.5 rounded-full border border-border/60 px-4 py-2 text-xs md:text-sm font-medium text-muted hover:text-foreground transition-colors hover:bg-bg/60 hover:border-border focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500/50"
          >
            {#if link.icon}<Icon
                icon={link.icon}
                class="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity"
              />{/if}
            <span
              class="relative after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-emerald-500/70 group-hover:after:w-full after:transition-all"
              >{link.label}</span
            >
            <Icon
              icon="lucide:arrow-up-right"
              class="h-3 w-3 opacity-40 group-hover:opacity-80 transition-opacity"
            />
          </a>
        {/each}
      </div>
    </div>
  </div>
  <div
    class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_40%_20%,hsl(var(--accent)/0.15),transparent_60%)]"
  ></div>
</section>

<style>
  @keyframes wave {
    0%,
    60%,
    100% {
      transform: rotate(0deg);
    }
    10%,
    30% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
  }
  .animate-wave {
    animation: wave 2.4s ease-in-out infinite;
  }
</style>

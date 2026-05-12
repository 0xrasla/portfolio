<script>
  import { reveal } from "$lib/actions/reveal";
</script>

<svelte:head>
  <title>About | Thinesh Rasla</title>
  <meta
    name="description"
    content="Learn more about Thinesh Rasla, a Full-Stack Engineer crafting fast, minimal products."
  />
  <meta property="og:title" content="About | Thinesh Rasla" />
  <meta
    property="og:description"
    content="Learn more about Thinesh Rasla, a Full-Stack Engineer crafting fast, minimal products."
  />
  <meta property="og:image" content="/og.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="/og.jpg" />
</svelte:head>

<main class="max-w-container-max mx-auto px-margin py-10 md:py-24">
  <!-- Hero Section -->
  <section
    class="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24 items-start border-b border-primary pb-12"
    use:reveal
  >
    <div class="md:col-span-8 flex flex-col gap-4">
      <div
        class="flex items-center gap-2 mb-2 opacity-80 font-label-mono text-caption uppercase tracking-widest text-secondary"
      >
        <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
        <span>Module // About.exe</span>
      </div>
      <h1
        class="font-headline-lg text-headline-lg uppercase leading-tight text-primary"
      >
        My Approach & <br class="hidden md:block" /> Background.
      </h1>
      <p class="font-body-lg text-body-lg text-secondary max-w-3xl mt-4">
        I'm Thinesh Rasla (aka 0xRasla), a passionate full-stack developer from
        Kanniyakumari, Tamil Nadu, India. I build clean web and mobile apps with
        TypeScript, Svelte, React, and modern backend stacks. I treat every line
        of code like a structural beam, ensuring that the finished product is
        stable, scalable, and built to last.
      </p>
    </div>
    <div class="md:col-span-4 flex justify-end">
      <div
        class="w-full aspect-square border border-outline p-2 bg-surface-container"
      >
        <img
          class="w-full h-full object-cover grayscale brightness-90 contrast-125"
          alt="A professional portrait of a tech architect in a high-contrast black and white style. The lighting is sharp and cinematic, highlighting facial features against a clean, minimalist studio background. The overall aesthetic is modern, technical, and sophisticated, aligning with a high-end editorial portfolio look."
          src="/rasla.png"
        />
      </div>
    </div>
  </section>
  <!-- Expertise Grid -->
  <section class="mb-24 border-t border-outline-variant pt-12" use:reveal>
    <div class="flex items-center gap-4 mb-12">
      <span class="material-symbols-outlined text-primary-fixed-dim"
        >terminal</span
      >
      <h2 class="font-headline-lg text-headline-lg uppercase tracking-tight">
        Technical Stack
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <!-- Frontend -->
      <div>
        <h3
          class="font-label-mono text-label-mono text-secondary mb-6 border-b border-surface-container-high pb-2"
        >
          01 FRONTEND
        </h3>
        <div class="space-y-6">
          <div class="group">
            <div class="flex justify-between items-end mb-2">
              <span class="font-body-md text-body-md font-bold"
                >TypeScript / React</span
              >
              <span class="font-label-mono text-caption text-secondary"
                >[######---]</span
              >
            </div>
            <div class="w-full h-px bg-surface-container-highest">
              <div
                class="h-px bg-neon-green w-[75%] group-hover:h-1 transition-all"
              ></div>
            </div>
          </div>
          <div class="group">
            <div class="flex justify-between items-end mb-2">
              <span class="font-body-md text-body-md font-bold"
                >Tailwind CSS</span
              >
              <span class="font-label-mono text-caption text-secondary"
                >[########--]</span
              >
            </div>
            <div class="w-full h-px bg-surface-container-highest">
              <div
                class="h-px bg-neon-green w-[85%] group-hover:h-1 transition-all"
              ></div>
            </div>
          </div>
          <div class="group">
            <div class="flex justify-between items-end mb-2">
              <span class="font-body-md text-body-md font-bold"
                >Next.js / SSR</span
              >
              <span class="font-label-mono text-caption text-secondary"
                >[#######---]</span
              >
            </div>
            <div class="w-full h-px bg-surface-container-highest">
              <div
                class="h-px bg-neon-green w-[70%] group-hover:h-1 transition-all"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Backend -->
      <div>
        <h3
          class="font-label-mono text-label-mono text-secondary mb-6 border-b border-surface-container-high pb-2"
        >
          02 BACKEND
        </h3>
        <div class="space-y-6">
          <div class="group">
            <div class="flex justify-between items-end mb-2">
              <span class="font-body-md text-body-md font-bold"
                >Node.js / Go</span
              >
              <span class="font-label-mono text-caption text-secondary"
                >[#####-----]</span
              >
            </div>
            <div class="w-full h-px bg-surface-container-highest">
              <div
                class="h-px bg-neon-green w-[50%] group-hover:h-1 transition-all"
              ></div>
            </div>
          </div>
          <div class="group">
            <div class="flex justify-between items-end mb-2">
              <span class="font-body-md text-body-md font-bold">PostgreSQL</span
              >
              <span class="font-label-mono text-caption text-secondary"
                >[#######---]</span
              >
            </div>
            <div class="w-full h-px bg-surface-container-highest">
              <div
                class="h-px bg-neon-green w-[70%] group-hover:h-1 transition-all"
              ></div>
            </div>
          </div>
          <div class="group">
            <div class="flex justify-between items-end mb-2">
              <span class="font-body-md text-body-md font-bold">GraphQL</span>
              <span class="font-label-mono text-caption text-secondary"
                >[######---]</span
              >
            </div>
            <div class="w-full h-px bg-surface-container-highest">
              <div
                class="h-px bg-neon-green w-[60%] group-hover:h-1 transition-all"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Tools -->
      <div>
        <h3
          class="font-label-mono text-label-mono text-secondary mb-6 border-b border-surface-container-high pb-2"
        >
          03 INFRA
        </h3>
        <div class="space-y-6">
          <div class="group">
            <div class="flex justify-between items-end mb-2">
              <span class="font-body-md text-body-md font-bold"
                >Docker / Kubernetes</span
              >
              <span class="font-label-mono text-caption text-secondary"
                >[####------]</span
              >
            </div>
            <div class="w-full h-px bg-surface-container-highest">
              <div
                class="h-px bg-neon-green w-[40%] group-hover:h-1 transition-all"
              ></div>
            </div>
          </div>
          <div class="group">
            <div class="flex justify-between items-end mb-2">
              <span class="font-body-md text-body-md font-bold">AWS / GCP</span>
              <span class="font-label-mono text-caption text-secondary"
                >[######---]</span
              >
            </div>
            <div class="w-full h-px bg-surface-container-highest">
              <div
                class="h-px bg-neon-green w-[65%] group-hover:h-1 transition-all"
              ></div>
            </div>
          </div>
          <div class="group">
            <div class="flex justify-between items-end mb-2">
              <span class="font-body-md text-body-md font-bold"
                >CI/CD Pipelines</span
              >
              <span class="font-label-mono text-caption text-secondary"
                >[#######---]</span
              >
            </div>
            <div class="w-full h-px bg-surface-container-highest">
              <div
                class="h-px bg-neon-green w-[75%] group-hover:h-1 transition-all"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Experience Timeline -->
  <section class="mb-24" use:reveal>
    <div class="flex items-center gap-4 mb-12">
      <span class="material-symbols-outlined text-primary-fixed-dim"
        >history</span
      >
      <h2 class="font-headline-lg text-headline-lg uppercase tracking-tight">
        Work History
      </h2>
    </div>
    <div class="relative border-l border-outline ml-4 pl-12 space-y-24 py-4">
      <!-- Entry 1 -->
      <div class="relative">
        <div
          class="absolute -left-13.25 top-2 w-2.5 h-2.5 bg-primary-fixed-dim"
        ></div>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div class="md:col-span-3">
            <p class="font-label-mono text-label-mono text-secondary">
              2023 — PRESENT
            </p>
            <h4 class="font-headline-sm text-headline-sm uppercase">
              Senior Software Engineer
            </h4>
            <p
              class="font-caption text-caption text-on-secondary-container mt-2"
            >
              RADIANTZE, USA (REMOTE)
            </p>
          </div>
          <div class="md:col-span-9">
            <p class="font-body-md text-body-md text-on-surface-variant mb-4">
              Architecting an AI-driven product suite, designing advanced
              backend infrastructure, and leading/mentoring junior engineers on
              code quality, testing, and system design.
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                class="font-label-mono text-caption px-2 py-0.5 border border-outline-variant"
                >BUN</span
              >
              <span
                class="font-label-mono text-caption px-2 py-0.5 border border-outline-variant"
                >SVELTE</span
              >
              <span
                class="font-label-mono text-caption px-2 py-0.5 border border-outline-variant"
                >PYTHON</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="absolute -left-13.25 top-2 w-2.5 h-2.5 bg-outline-variant"
        ></div>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div class="md:col-span-3">
            <p class="font-label-mono text-label-mono text-secondary">
              2022 — 2023
            </p>
            <h4 class="font-headline-sm text-headline-sm uppercase">
              Senior Software Engineer
            </h4>
            <p
              class="font-caption text-caption text-on-secondary-container mt-2"
            >
              WENOXO TECHNOLOGIES
            </p>
          </div>
          <div class="md:col-span-9">
            <p class="font-body-md text-body-md text-on-surface-variant mb-4">
              Leading backend and frontend development in Svelte, Next.js, Bun
              and NestJS stack for scalable enterprise applications. Led the
              redesign of a legacy module to increase performance by 65%.
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                class="font-label-mono text-caption px-2 py-0.5 border border-outline-variant"
                >NEXT.JS</span
              >
              <span
                class="font-label-mono text-caption px-2 py-0.5 border border-outline-variant"
                >TYPESCRIPT</span
              >
              <span
                class="font-label-mono text-caption px-2 py-0.5 border border-outline-variant"
                >AWS</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="absolute -left-13.25 top-2 w-2.5 h-2.5 bg-outline-variant"
        ></div>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div class="md:col-span-3">
            <p class="font-label-mono text-label-mono text-secondary">
              2021 — 2022
            </p>
            <h4 class="font-headline-sm text-headline-sm uppercase">
              Full Stack Developer
            </h4>
            <p
              class="font-caption text-caption text-on-secondary-container mt-2"
            >
              J TECH WORLD, DUBAI
            </p>
          </div>
          <div class="md:col-span-9">
            <p class="font-body-md text-body-md text-on-surface-variant mb-4">
              Built and maintained web applications using modern front-end and
              back-end technologies. Developed a custom CMS dashboard that
              reduced content publishing time by 70%.
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                class="font-label-mono text-caption px-2 py-0.5 border border-outline-variant"
                >REACT</span
              >
              <span
                class="font-label-mono text-caption px-2 py-0.5 border border-outline-variant"
                >NODE.JS</span
              >
              <span
                class="font-label-mono text-caption px-2 py-0.5 border border-outline-variant"
                >MONGODB</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-3 gap-6" use:reveal>
    <div
      class="md:col-span-2 bg-primary p-12 flex flex-col justify-between min-h-60"
    >
      <h2
        class="font-headline-xl text-headline-xl text-on-primary uppercase leading-tight"
      >
        Ready to deploy <br />your next vision?
      </h2>
      <div class="flex items-center gap-4">
        <a
          href="/contact"
          class="bg-on-primary text-primary font-label-mono text-label-mono px-8 py-3 hover:bg-neon-green transition-colors active:scale-95 cursor-pointer inline-block"
          >Initiate Project</a
        >
        <span class="font-label-mono text-caption text-on-primary opacity-60"
          >RESPONSE_TIME: &lt;24H</span
        >
      </div>
    </div>
    <div
      class="border border-outline p-12 flex flex-col justify-center items-center text-center bg-surface-container-low"
    >
      <span class="material-symbols-outlined text-[48px] mb-6 text-neon-green"
        >public</span
      >
      <p class="font-label-mono text-label-mono uppercase">
        Remote / Worldwide
      </p>
      <p class="font-caption text-secondary mt-2">Based in: GMT+5:30</p>
    </div>
  </section>
</main>

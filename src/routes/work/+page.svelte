<script>
  import { reveal } from "$lib/actions/reveal";
  const filters = ["All Projects", "TypeScript", "UI Design"];
  let activeFilter = $state("All Projects");

  const allProjects = [
    {
      id: "0xLOG1",
      title: "logify",
      icon: "terminal",
      description:
        "A beautiful, fast, and type-safe logging middleware for Node.js (Elysia.js & Express.js). Features colorized output, structured file logging, request duration tracking, and a global logger instance.",
      version: "v5.2.2",
      tech: "TypeScript",
      url: "https://github.com/0xrasla/logify",
      image: "/projects/1.png",
    },
    {
      id: "0xIMG2",
      title: "shadcn-image-uploader",
      icon: "image",
      description:
        "A reusable React component for uploading, previewing, and cropping images built with Shadcn UI. Features drag & drop, file validation, interactive crop with zoom/pan, and customizable aspect ratio.",
      version: "v1.0.0",
      tech: "UI Design",
      url: "https://github.com/0xrasla/shadcn-image-uploader",
      image: "/projects/2.png",
    },
    {
      id: "0xDRP3",
      title: "dropit-react",
      icon: "upload_file",
      description:
        "A simple, beautiful React drag-and-drop file picker built with shadcn/ui. Supports click-to-select, file type filtering, multi-file upload, file preview with names and sizes, and easy integration.",
      version: "v1.0.0",
      tech: "UI Design",
      url: "https://github.com/0xrasla/dropit-react",
      image: "/projects/3.png",
    },
    {
      id: "0xDND4",
      title: "shadcn-dnd-kit",
      icon: "extension",
      description:
        "A custom drag-and-drop component library built on react-dnd with shadcn/ui styling. Ships Draggable, Droppable, and DragAndDropProvider components with Kanban board and sortable list demos.",
      version: "v1.0.0",
      tech: "UI Design",
      url: "https://github.com/0xrasla/shadcn-dnd-kit",
      image: "/projects/4.png",
    },
  ];

  let filteredProjects = $derived(
    activeFilter === "All Projects"
      ? allProjects
      : allProjects.filter((p) => p.tech.includes(activeFilter)),
  );
</script>

<svelte:head>
  <title>Projects | Thinesh Rasla</title>
  <meta
    name="description"
    content="A curated selection of high-performance digital solutions developed by Thinesh Rasla."
  />
</svelte:head>

<main class="grow w-full max-w-container-max mx-auto px-margin py-8 md:py-16">
  <!-- Header -->
  <header
    class="flex flex-col gap-4 border-b border-primary pb-12 mb-12"
    use:reveal
  >
    <div
      class="flex items-center gap-2 mb-2 opacity-80 font-label-mono text-caption uppercase tracking-widest text-secondary"
    >
      <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
      <span>Module // Projects.exe</span>
    </div>
    <h1
      class="font-headline-lg text-headline-lg uppercase leading-tight text-primary"
    >
      Project Gallery & <br class="hidden md:block" /> Selected Works.
    </h1>
    <p class="font-body-lg text-body-lg text-secondary max-w-3xl mt-4">
      A curated selection of high-performance digital solutions and
      architectures developed with a focus on efficiency and scalability.
    </p>
  </header>
  <!-- Filter Bar -->
  <div
    class="mb-12 flex flex-wrap items-center gap-4 border-y border-outline-variant py-4"
    use:reveal={{ delay: 100 }}
  >
    <span class="font-label-mono text-label-mono text-secondary mr-4"
      >Filter by:</span
    >
    {#each filters as filter}
      <button
        onclick={() => (activeFilter = filter)}
        class="px-4 py-1 border font-label-mono text-label-mono cursor-pointer active:scale-95 transition-all {activeFilter ===
        filter
          ? 'border-secondary bg-secondary text-on-secondary'
          : 'border-outline hover:border-secondary hover:text-secondary bg-transparent'}"
      >
        {filter}
      </button>
    {/each}
  </div>
  <!-- Project Grid -->
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter"
    use:reveal={{ delay: 200 }}
  >
    {#each filteredProjects as project (project.id)}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        class="border border-primary group flex-col hover:border-secondary hover:bg-surface-container transition-colors duration-200 cursor-pointer block"
      >
        <div
          class="aspect-video overflow-hidden border-b border-primary group-hover:border-secondary relative bg-surface-container-high"
        >
          <img
            class="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
            alt={project.title}
            src={project.image}
          />
          <div
            class="absolute top-2 right-2 font-label-mono text-[10px] bg-primary group-hover:bg-secondary group-hover:text-on-secondary px-2 py-0.5 transition-colors"
          >
            ID: {project.id}
          </div>
        </div>
        <div class="p-6 grow flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <h3
              class="font-headline-sm text-headline-sm font-bold group-hover:text-secondary transition-colors"
            >
              {project.title}
            </h3>
            <span
              class="material-symbols-outlined text-primary group-hover:text-secondary transition-colors"
              >{project.icon}</span
            >
          </div>
          <p
            class="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3"
          >
            {project.description}
          </p>
          <div class="mt-auto flex flex-wrap gap-2">
            <span
              class="font-label-mono text-[11px] border border-outline px-2 py-0.5 text-secondary"
              >{project.version}</span
            >
            <span
              class="font-label-mono text-[11px] border border-secondary px-2 py-0.5 text-on-secondary bg-secondary"
              >Stable</span
            >
            <span
              class="font-label-mono text-[11px] border border-outline px-2 py-0.5 text-secondary uppercase"
              >{project.tech}</span
            >
          </div>
        </div>
      </a>
    {/each}

    {#if filteredProjects.length === 0}
      <div
        class="col-span-full py-32 flex flex-col items-center justify-center border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-lowest"
      >
        <span
          class="material-symbols-outlined text-6xl text-outline-variant mb-6"
          >search_off</span
        >
        <h2 class="font-headline-md text-headline-md mb-2">
          No projects found
        </h2>
        <p class="font-label-mono text-label-mono text-secondary">
          Try adjusting your filters and search again.
        </p>
        <button
          onclick={() => (activeFilter = "All Projects")}
          class="mt-8 px-6 py-2 border border-primary font-label-mono text-label-mono hover:bg-secondary hover:text-on-secondary transition-all cursor-pointer"
          >Clear Filters</button
        >
      </div>
    {/if}
  </div>

  <section
    class="mt-24 p-12 border border-primary bg-primary text-on-primary flex flex-col md:flex-row justify-between items-center gap-8"
    use:reveal
  >
    <div class="space-y-4">
      <h2 class="font-headline-md text-headline-md text-on-primary">
        Ready to start?
      </h2>
      <p class="font-body-lg text-on-primary-container max-w-xl">
        Technical documentation and architectural guides for these projects are
        available upon request.
      </p>
    </div>
    <button
      class="px-8 py-4 bg-secondary text-on-secondary font-label-mono text-label-mono font-bold hover:text-on-primary hover:border-on-primary transition-colors flex items-center gap-4 cursor-pointer"
    >
      <a href="/contact" class="flex justify-center items-center gap-2">
        Request Access <span class="material-symbols-outlined"
          >arrow_forward</span
        >
      </a>
    </button>
  </section>
</main>

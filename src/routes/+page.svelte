<script lang="ts">
  import { reveal } from "$lib/anim";
  import ContactForm from "$lib/components/ContactForm.svelte";
  import ExperienceTimeline from "$lib/components/ExperienceTimeline.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import ProjectsGrid from "$lib/components/ProjectsGrid.svelte";
  import Section from "$lib/components/Section.svelte";
  import VideosSection from "$lib/components/VideosSection.svelte";
  import { workExperience } from "$lib/data";
</script>

<Hero />

<Section
  id="work"
  title="Experience"
  intro="A quick timeline of roles where I solved problems,<br> shipped features and improved performance."
>
  <ExperienceTimeline items={workExperience} />
</Section>

<Section
  id="projects"
  title="Projects"
  intro="A selection of things I've built / maintained.<br> More on GitHub."
>
  <ProjectsGrid />
  <div class="mt-8 text-center">
    <a
      href="https://github.com/0xrasla"
      target="_blank"
      rel="noopener"
      class="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-muted hover:text-foreground transition-colors"
    >
      Browse more on GitHub <span class="i-lucide-arrow-right h-3 w-3"></span>
    </a>
  </div>
</Section>

<Section
  id="videos"
  title="Videos"
  intro="I teach & share what I learn on YouTube –<br> here are a few recent uploads."
>
  <VideosSection />
</Section>

<Section
  id="contact"
  title="Get in touch"
  intro="Whether you have a problem to solve,<br> a product idea to explore or just want to say hi —<br> my inbox is open."
>
  <div class="space-y-6 text-center" use:reveal={{ animation: "fade-up" }}>
    <div class="pt-8">
      <ContactForm />
    </div>
  </div>
</Section>

<Footer />

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>

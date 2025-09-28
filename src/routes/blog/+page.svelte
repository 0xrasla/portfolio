<script lang="ts">
  import { reveal } from "$lib/anim";
  import { blogPosts } from "$lib/data";

  const sortedPosts = blogPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const featuredPosts = sortedPosts.filter((post) => post.featured);
  const regularPosts = sortedPosts.filter((post) => !post.featured);

  const displayPosts = [...featuredPosts, ...regularPosts];
</script>

<svelte:head>
  <title>Blog - Thinesh Rasla</title>
  <meta
    name="description"
    content="Thoughts on web development, technology, and programming from Thinesh Rasla."
  />
</svelte:head>

<div class="max-w-6xl mx-auto">
  <header class="text-center mb-16" use:reveal>
    <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
    <p class="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
      Thoughts on web development, technology, and programming.<br />
      Sharing what I learn along the way.
    </p>
  </header>

  <div
    class="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
    use:reveal={{ animation: "fade-up" }}
  >
    {#each displayPosts as post}
      <article
        class="group relative overflow-hidden rounded-lg border border-border bg-bg p-6 transition-all hover:shadow-lg hover:-translate-y-1"
      >
        <div class="flex flex-col h-full">
          <div class="flex flex-wrap gap-2 mb-3">
            {#each post.tags as tag}
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            {/each}
          </div>

          <div class="flex-1">
            <h3
              class="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2"
            >
              {post.title}
            </h3>
            <p class="text-muted text-sm leading-relaxed line-clamp-3 mb-4">
              {post.description}
            </p>
          </div>

          <div
            class="flex items-center justify-between text-xs text-muted pt-4 border-t border-border"
          >
            <time datetime={post.publishedAt} class="font-medium">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>{post.readTime}</span>
          </div>
        </div>

        <a
          href="/blog/{post.slug}"
          class="absolute inset-0"
          aria-label="Read {post.title}"
        >
          <span class="sr-only">Read more about {post.title}</span>
        </a>
      </article>
    {/each}
  </div>

  <div class="mt-16 text-center" use:reveal={{ animation: "fade" }}>
    <a
      href="/"
      class="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-muted hover:text-foreground transition-colors"
    >
      <span class="i-lucide-arrow-left h-3 w-3"></span>
      Back to Home
    </a>
  </div>
</div>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>

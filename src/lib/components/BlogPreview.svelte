<script lang="ts">
  import { reveal } from "$lib/anim";
  import { blogPosts } from "$lib/data";

  const latestPosts = blogPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 2);
</script>

<section class="grid gap-6 md:grid-cols-2">
  {#each latestPosts as post}
    <article
      class="group relative overflow-hidden rounded-lg border border-border bg-bg p-6 transition-all hover:shadow-lg hover:-translate-y-1"
      use:reveal
    >
      <div class="flex flex-col h-full">
        <div class="flex flex-wrap gap-2 mb-3">
          {#each post.tags.slice(0, 2) as tag}
            <span
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
            >
              {tag}
            </span>
          {/each}
        </div>

        <div class="flex-1">
          <h3
            class="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors"
          >
            {post.title}
          </h3>
          <p class="text-muted text-sm leading-relaxed mb-4">
            {post.description.length > 80
              ? `${post.description.substring(0, 80)}...`
              : post.description}
          </p>
        </div>

        <div
          class="flex items-center justify-between text-xs text-muted pt-4 border-t border-border"
        >
          <time datetime={post.publishedAt} class="font-medium">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
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
        <span class="sr-only">Read more</span>
      </a>
    </article>
  {/each}
</section>

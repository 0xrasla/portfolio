<script lang="ts">
  import Icon from "@iconify/svelte";
  let name = "";
  let email = "";
  let message = "";
  let sent = false;
  function submit(e: Event) {
    e.preventDefault();
    sent = true;
    setTimeout(() => {
      sent = false;
    }, 4000);
  }
</script>

<form on:submit={submit} class="space-y-4 max-w-2xl" aria-label="Contact form">
  <div class="grid gap-4 md:grid-cols-2">
    <label class="flex flex-col gap-1 text-xs font-medium tracking-wide">
      <span class="text-muted/70 self-start uppercase">Name</span>
      <input
        bind:value={name}
        required
        name="name"
        placeholder="Your name"
        class="rounded-md border border-border/60 bg-bg/60 px-3 py-2 text-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500/50"
      />
    </label>
    <label class="flex flex-col gap-1 text-xs font-medium tracking-wide">
      <span class="text-muted/70 self-start uppercase">Email</span>
      <input
        bind:value={email}
        required
        type="email"
        name="email"
        placeholder="you@example.com"
        class="rounded-md border border-border/60 bg-bg/60 px-3 py-2 text-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500/50"
      />
    </label>
  </div>
  <label class="flex flex-col gap-1 text-xs font-medium tracking-wide">
    <span class="text-muted/70 uppercase self-start">Message</span>
    <textarea
      bind:value={message}
      required
      rows={5}
      name="message"
      placeholder="How can I help?"
      class="rounded-md border border-border/60 bg-bg/60 px-3 py-2 text-sm resize-y focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500/50"
    ></textarea>
  </label>
  <div class="flex items-center justify-between pt-2">
    <p class="text-[11px] text-muted/60">No spam. Emails go straight to me.</p>
    <button
      type="submit"
      class="inline-flex items-center gap-2 rounded-md bg-emerald-500/90 text-white px-4 py-2 text-xs md:text-sm font-medium shadow-sm hover:bg-emerald-500 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500/60"
    >
      <Icon icon={sent ? "lucide:check" : "lucide:send"} class="h-4 w-4" />
      {sent ? "Sent!" : "Send Message"}
    </button>
  </div>
</form>

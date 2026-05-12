<script lang="ts">
    import { enhance } from "$app/forms";
    import { reveal } from "$lib/actions/reveal";

    let { form } = $props();

    let name = $state("");
    let email = $state("");
    let message = $state("");
    let isSubmitting = $state(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = $derived(
        name.trim().length > 0 &&
            emailRegex.test(email) &&
            message.trim().length > 0,
    );
</script>

<svelte:head>
    <title>Contact | Thinesh Rasla</title>
    <meta
        name="description"
        content="Get in touch with Thinesh Rasla for your next project."
    />
</svelte:head>

<main
    class="grow max-w-container-max mx-auto px-margin w-full pt-8 md:pt-16 pb-12 md:pb-24"
>
    <!-- Header -->
    <header
        class="flex flex-col md:flex-row justify-between items-end gap-gutter border-b border-primary pb-12 mb-12"
        use:reveal
    >
        <div class="flex flex-col gap-4">
            <div
                class="flex items-center gap-2 mb-2 opacity-80 font-label-mono text-caption uppercase tracking-widest text-secondary"
            >
                <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"
                ></span>
                <span>Module // Contact.exe</span>
            </div>
            <h1
                class="font-headline-lg text-headline-lg uppercase leading-tight text-primary"
            >
                System Access & <br class="hidden md:block" /> Let's Work Together.
            </h1>
        </div>
    </header>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
        <aside
            class="md:col-span-4 order-2 md:order-1"
            use:reveal={{ delay: 100 }}
        >
            <div class="space-y-12">
                <section>
                    <h3
                        class="font-label-mono text-label-mono text-on-secondary-container uppercase mb-6 tracking-tighter"
                    >
                        DIRECT_TERMINALS
                    </h3>
                    <ul class="space-y-4 border-l border-primary pl-6">
                        <li class="group">
                            <a
                                class="flex justify-between items-center group-hover:text-primary transition-colors"
                                href="https://github.com/0xrasla"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span
                                    class="font-label-mono text-label-mono uppercase"
                                    >GITHUB</span
                                >
                                <span class="material-symbols-outlined text-sm"
                                    >north_east</span
                                >
                            </a>
                        </li>
                        <li class="group">
                            <a
                                class="flex justify-between items-center group-hover:text-primary transition-colors"
                                href="https://www.linkedin.com/in/thinesh-rasla-779ba2189"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span
                                    class="font-label-mono text-label-mono uppercase"
                                    >LINKEDIN</span
                                >
                                <span class="material-symbols-outlined text-sm"
                                    >north_east</span
                                >
                            </a>
                        </li>
                        <li class="group">
                            <a
                                class="flex justify-between items-center group-hover:text-primary transition-colors"
                                href="mailto:thineshrasla@gmail.com"
                            >
                                <span
                                    class="font-label-mono text-label-mono uppercase"
                                    >EMAIL</span
                                >
                                <span class="material-symbols-outlined text-sm"
                                    >alternate_email</span
                                >
                            </a>
                        </li>
                    </ul>
                </section>
                <section
                    class="p-6 bg-surface-container-low border border-outline-variant"
                >
                    <h3
                        class="font-label-mono text-label-mono uppercase mb-4 text-primary"
                    >
                        GEOGRAPHY
                    </h3>
                    <div
                        class="w-full h-48 bg-surface-dim mb-4 grayscale opacity-80 border border-primary overflow-hidden"
                    >
                        <img
                            class="w-full h-full object-cover"
                            alt="A high-contrast black and white satellite-style map of a metropolitan grid layout with sharp geometric lines and technical overlays. The pic evokes a sense of architectural precision and urban engineering with a minimalist, modern light-mode aesthetic. Significant white space and thin black line-work define the aesthetic."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5fS3rOGwDRposI3IA3qmiIVboZuqQMaLK_5Ogp2n0Yn2FJkOg7-URjQ_QAl84mJhExntOO_7SA70eA29BVcBayqRNTnKI8O04AIijR-7D_ud4Mva7CjPQh-nD4LNxGDIfx7RjYyP7nGaP3I9VBTO6rLVv3Nrg9ed0qGAyedWD5ZRQa8kjcUbVz_u6coU8q9hREOfmZfB42D7N6l0f8D8uuhV0cs1hMuMgTxPAGJUK3xQ45kVLwOass42LeBzVDGQj8N-R_hO26LA"
                        />
                    </div>
                    <p
                        class="font-label-mono text-caption uppercase text-secondary"
                    >
                        LAT: 8.07818° N<br />LON: 77.55131° E
                    </p>
                </section>
            </div>
        </aside>
        <!-- Inquiry Form -->
        <section
            class="md:col-span-8 order-1 md:order-2"
            use:reveal={{ delay: 200 }}
        >
            {#if form?.success}
                <div
                    class="p-6 bg-secondary/10 border border-secondary text-secondary font-label-mono mb-8 uppercase"
                    use:reveal
                >
                    <p class="flex items-center gap-2">
                        <span class="material-symbols-outlined"
                            >check_circle</span
                        >
                        INQUIRY_RECEIVED_SUCCESSFULLY
                    </p>
                    <p class="text-caption mt-2 opacity-80">
                        System will dispatch a response shortly.
                    </p>
                </div>
            {/if}
            {#if form?.error}
                <div
                    class="p-6 bg-[#ff4444]/10 border border-[#ff4444] text-[#ff4444] font-label-mono mb-8 uppercase"
                    use:reveal
                >
                    <p class="flex items-center gap-2">
                        <span class="material-symbols-outlined">error</span>
                        TRANSMISSION_FAILED
                    </p>
                    <p class="text-caption mt-2 opacity-80">{form.error}</p>
                </div>
            {/if}

            <form
                method="POST"
                use:enhance={() => {
                    isSubmitting = true;
                    return async ({ update }) => {
                        isSubmitting = false;
                        await update();
                    };
                }}
                class="space-y-8"
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Name Field -->
                    <div class="flex flex-col gap-2">
                        <label
                            class="font-label-mono text-label-mono uppercase text-on-secondary-container"
                            for="name">01 Name</label
                        >
                        <input
                            class="bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md placeholder:text-surface-dim focus:ring-0 focus:border-b-2 focus:border-secondary transition-all outline-none"
                            id="name"
                            name="name"
                            placeholder="Enter your name..."
                            type="text"
                            bind:value={name}
                        />
                    </div>
                    <!-- Email Field -->
                    <div class="flex flex-col gap-2">
                        <label
                            class="font-label-mono text-label-mono uppercase text-on-secondary-container"
                            for="email">02 Email</label
                        >
                        <input
                            class="bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md placeholder:text-surface-dim focus:ring-0 focus:border-b-2 focus:border-secondary transition-all outline-none"
                            id="email"
                            name="email"
                            placeholder="email@example.com"
                            type="email"
                            bind:value={email}
                        />
                    </div>
                </div>
                <!-- Message Field -->
                <div class="flex flex-col gap-2">
                    <label
                        class="font-label-mono text-label-mono uppercase text-on-secondary-container"
                        for="message">03 Message</label
                    >
                    <textarea
                        class="bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md placeholder:text-surface-dim focus:ring-0 focus:border-b-2 focus:border-secondary outline-none resize-none transition-all"
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows="6"
                        bind:value={message}
                    ></textarea>
                </div>
                <!-- Submit Button -->
                <div class="pt-8">
                    <button
                        class="w-full md:w-auto bg-secondary text-on-secondary font-label-mono text-headline-sm uppercase px-12 py-6 border border-secondary hover:bg-background hover:text-secondary transition-all active:scale-95 flex items-center justify-center gap-4 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-secondary disabled:hover:text-on-secondary"
                        type="submit"
                        disabled={!isValid || isSubmitting}
                    >
                        {#if isSubmitting}
                            TRANSMITTING...
                            <span class="material-symbols-outlined animate-spin"
                                >sync</span
                            >
                        {:else}
                            SEND_INQUIRY
                            <span
                                class="material-symbols-outlined group-hover:translate-x-2 transition-transform"
                                >arrow_forward_ios</span
                            >
                        {/if}
                    </button>
                    <p
                        class="font-label-mono text-caption text-secondary mt-4 uppercase tracking-tighter"
                    >
                        ESTIMATED_RESPONSE_TIME: <span class="text-secondary"
                            >&lt; 24_HOURS</span
                        >
                    </p>
                </div>
            </form>
        </section>
    </div>
</main>

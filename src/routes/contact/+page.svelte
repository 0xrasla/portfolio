<svelte:head>
    <title>Contact | Thinesh Rasla</title>
    <meta name="description" content="Get in touch with Thinesh Rasla for your next project." />
</svelte:head>

<main class="grow max-w-container-max mx-auto px-margin w-full pt-16 pb-24">
    <!-- Module Header -->
    <header class="mb-16 border-b border-surface-variant pb-8">
        <div
            class="flex flex-col md:flex-row justify-between items-end gap-gutter"
        >
            <div>
                <span
                    class="font-label-mono text-label-mono text-on-secondary-container mb-4 block uppercase tracking-widest"
                    >// SYSTEM_ACCESS</span
                >
                <h1 class="font-headline-lg text-headline-lg">
                    Let's Work Together
                </h1>
            </div>
            <div
                class="bg-surface-container px-4 py-2 border border-outline-variant flex items-center"
            >
                <span
                    class="status-dot w-2 h-2 bg-secondary rounded-full inline-block mr-2 shadow-[0_0_8px_#505f76]"
                ></span>
                <span class="font-label-mono text-label-mono uppercase"
                    >CURRENT_STATUS: <span class="text-secondary"
                        >ACCEPTING_CLIENTS</span
                    ></span
                >
            </div>
        </div>
    </header>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
        <!-- Sidebar / Technical Details -->
        <aside class="md:col-span-4 order-2 md:order-1">
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
                                href="https://github.com/0xrasla" target="_blank" rel="noopener noreferrer"
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
                                href="https://www.linkedin.com/in/thinesh-rasla-779ba2189" target="_blank" rel="noopener noreferrer"
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
                        OFFICE_GEOGRAPHY
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
                        LAT: 8.1833° N<br />LON: 77.4119° E
                    </p>
                </section>
            </div>
        </aside>
        <!-- Inquiry Form -->
        <section class="md:col-span-8 order-1 md:order-2">
            <form class="space-y-8">
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
                        />
                    </div>
                </div>
                <!-- Project Type -->
                <div class="flex flex-col gap-2">
                    <label
                        class="font-label-mono text-label-mono uppercase text-on-secondary-container"
                        for="project-type">03 Project Type</label
                    >
                    <select
                        class="bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md focus:ring-0 focus:border-b-2 focus:border-secondary outline-none appearance-none cursor-pointer"
                        id="project-type"
                        name="project-type"
                    >
                        <option value="ui-design">UI Systems Design</option>
                        <option value="frontend">Frontend Architecture</option>
                        <option value="consulting">Technical Consultancy</option
                        >
                        <option value="full-stack"
                            >Full Stack Development</option
                        >
                    </select>
                </div>
                <!-- Message Field -->
                <div class="flex flex-col gap-2">
                    <label
                        class="font-label-mono text-label-mono uppercase text-on-secondary-container"
                        for="message">04 Message</label
                    >
                    <textarea
                        class="bg-transparent border-0 border-b border-outline-variant py-3 px-0 font-body-md placeholder:text-surface-dim focus:ring-0 focus:border-b-2 focus:border-secondary outline-none resize-none transition-all"
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows="6"
                    ></textarea>
                </div>
                <!-- Submit Button -->
                <div class="pt-8">
                    <button
                        class="w-full md:w-auto bg-secondary text-on-secondary font-label-mono text-headline-sm uppercase px-12 py-6 border border-secondary hover:bg-background hover:text-secondary transition-all active:scale-95 flex items-center justify-center gap-4 group cursor-pointer"
                        type="submit"
                    >
                        SEND_INQUIRY
                        <span
                            class="material-symbols-outlined group-hover:translate-x-2 transition-transform"
                            >arrow_forward_ios</span
                        >
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

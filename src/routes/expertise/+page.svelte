<script>
    import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head>
    <title>Expertise | Thinesh Rasla</title>
    <meta name="description" content="Technical expertise and skills of Thinesh Rasla." />
</svelte:head>

<main class="max-w-container-max mx-auto px-margin pt-10 md:pt-24 pb-16 md:pb-32 flex flex-col gap-16">
    <!-- Header -->
    <header class="flex flex-col gap-4 border-b border-primary pb-12" use:reveal>
        <div class="flex items-center gap-2 mb-2 opacity-80 font-label-mono text-caption uppercase tracking-widest text-secondary">
            <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span>Module // Expertise.exe</span>
        </div>
        <h1 class="font-headline-lg text-headline-lg uppercase leading-tight text-primary">
            Technical Capabilities & <br class="hidden md:block"/> Core Competencies.
        </h1>
        <p class="font-body-lg text-body-lg text-secondary max-w-3xl mt-4">
            A comprehensive breakdown of my technical arsenal. I specialize in building robust, scalable applications with a focus on performance, user experience, and clean architecture.
        </p>
    </header>

    <!-- Skill Matrix Grid -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" use:reveal={{ delay: 100 }}>
        <!-- Frontend -->
        <div class="group border border-primary p-8 hover:bg-surface-container transition-all duration-300 relative overflow-hidden bg-white">
            <div class="absolute top-0 right-0 w-16 h-16 bg-secondary/10 translate-x-8 -translate-y-8 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all"></div>
            <h2 class="font-headline-sm text-headline-sm uppercase mb-6 flex items-center gap-3 text-primary">
                <span class="material-symbols-outlined text-secondary">web</span>
                Frontend
            </h2>
            <ul class="space-y-4 font-body-md text-on-surface">
                <li class="flex justify-between items-center border-b border-outline-variant pb-2">
                    <span>Svelte / SvelteKit</span>
                    <span class="font-label-mono text-caption text-secondary">Advanced</span>
                </li>
                <li class="flex justify-between items-center border-b border-outline-variant pb-2">
                    <span>React / Next.js</span>
                    <span class="font-label-mono text-caption text-secondary">Advanced</span>
                </li>
                <li class="flex justify-between items-center border-b border-outline-variant pb-2">
                    <span>TypeScript</span>
                    <span class="font-label-mono text-caption text-secondary">Advanced</span>
                </li>
                <li class="flex justify-between items-center border-b border-outline-variant pb-2">
                    <span>Tailwind CSS</span>
                    <span class="font-label-mono text-caption text-secondary">Expert</span>
                </li>
                <li class="flex justify-between items-center">
                    <span>Framer Motion / GSAP</span>
                    <span class="font-label-mono text-caption text-secondary">Intermediate</span>
                </li>
            </ul>
        </div>

        <!-- Backend -->
        <div class="group border border-primary p-8 hover:bg-surface-container transition-all duration-300 relative overflow-hidden bg-white">
             <div class="absolute top-0 right-0 w-16 h-16 bg-secondary/10 translate-x-8 -translate-y-8 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all"></div>
            <h2 class="font-headline-sm text-headline-sm uppercase mb-6 flex items-center gap-3 text-primary">
                <span class="material-symbols-outlined text-secondary">dns</span>
                Backend
            </h2>
            <ul class="space-y-4 font-body-md text-on-surface">
                <li class="flex justify-between items-center border-b border-outline-variant pb-2">
                    <span>Node.js / Express</span>
                    <span class="font-label-mono text-caption text-secondary">Advanced</span>
                </li>
                <li class="flex justify-between items-center border-b border-outline-variant pb-2">
                    <span>Go (Golang)</span>
                    <span class="font-label-mono text-caption text-secondary">Intermediate</span>
                </li>
                <li class="flex justify-between items-center border-b border-outline-variant pb-2">
                    <span>PostgreSQL / MySQL</span>
                    <span class="font-label-mono text-caption text-secondary">Advanced</span>
                </li>
                <li class="flex justify-between items-center border-b border-outline-variant pb-2">
                    <span>MongoDB / Redis</span>
                    <span class="font-label-mono text-caption text-secondary">Advanced</span>
                </li>
                <li class="flex justify-between items-center">
                    <span>REST / GraphQL</span>
                    <span class="font-label-mono text-caption text-secondary">Advanced</span>
                </li>
            </ul>
        </div>

        <!-- DevOps & Tools -->
        <div class="group border border-primary p-8 hover:bg-surface-container transition-all duration-300 relative overflow-hidden bg-white">
             <div class="absolute top-0 right-0 w-16 h-16 bg-secondary/10 translate-x-8 -translate-y-8 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all"></div>
            <h2 class="font-headline-sm text-headline-sm uppercase mb-6 flex items-center gap-3 text-primary">
                <span class="material-symbols-outlined text-secondary">build</span>
                DevOps & Tools
            </h2>
            <ul class="space-y-4 font-body-md text-on-surface">
                <li class="flex justify-between items-center border-b border-outline-variant pb-2">
                    <span>Git / GitHub Actions</span>
                    <span class="font-label-mono text-caption text-secondary">Advanced</span>
                </li>
                <li class="flex justify-between items-center border-b border-outline-variant pb-2">
                    <span>Docker / Containers</span>
                    <span class="font-label-mono text-caption text-secondary">Intermediate</span>
                </li>
                <li class="flex justify-between items-center border-b border-outline-variant pb-2">
                    <span>AWS / Vercel / Cloudflare</span>
                    <span class="font-label-mono text-caption text-secondary">Advanced</span>
                </li>
                <li class="flex justify-between items-center border-b border-outline-variant pb-2">
                    <span>Linux / Bash</span>
                    <span class="font-label-mono text-caption text-secondary">Advanced</span>
                </li>
                <li class="flex justify-between items-center">
                    <span>Bun / npm / pnpm</span>
                    <span class="font-label-mono text-caption text-secondary">Advanced</span>
                </li>
            </ul>
        </div>
    </section>

    <!-- Deep Dives / Focus Areas -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8" use:reveal={{ delay: 200 }}>
        <div class="flex flex-col gap-8">
            <h2 class="font-headline-md text-headline-md uppercase text-primary">Core Principles</h2>
            
            <div class="flex gap-6 items-start">
                <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                    <span class="material-symbols-outlined text-secondary">speed</span>
                </div>
                <div>
                    <h3 class="font-headline-sm text-headline-sm uppercase mb-2 text-primary">Performance First</h3>
                    <p class="font-body-md text-secondary">I believe fast is a feature. I optimize for Core Web Vitals, minimize bundle sizes, and ensure critical rendering paths are lean. Every millisecond counts.</p>
                </div>
            </div>

            <div class="flex gap-6 items-start">
                <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                    <span class="material-symbols-outlined text-secondary">design_services</span>
                </div>
                <div>
                    <h3 class="font-headline-sm text-headline-sm uppercase mb-2 text-primary">Pixel-Perfect UI</h3>
                    <p class="font-body-md text-secondary">Translating design to code with zero compromises. I use CSS grid, flexbox, and logical properties to build layouts that are resilient and responsive across all viewports.</p>
                </div>
            </div>

            <div class="flex gap-6 items-start">
                <div class="w-12 h-12 bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                    <span class="material-symbols-outlined text-secondary">architecture</span>
                </div>
                <div>
                    <h3 class="font-headline-sm text-headline-sm uppercase mb-2 text-primary">Scalable Architecture</h3>
                    <p class="font-body-md text-secondary">Code should be easy to delete and rewrite. I favor modularity, strict typing with TypeScript, and robust testing to ensure long-term maintainability.</p>
                </div>
            </div>
        </div>

        <!-- Terminal Status Window -->
        <div class="p-8 border border-primary bg-[#050505] flex flex-col gap-4 relative overflow-hidden text-green-400 font-label-mono text-sm shadow-2xl">
            <div class="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-green-400 to-transparent opacity-50"></div>
            <div class="flex items-center justify-between border-b border-green-900/50 pb-4 mb-4">
                <div class="flex gap-2">
                    <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span class="text-green-600">admin@0xrasla:~/system</span>
            </div>
            
            <div class="space-y-3 flex flex-col font-mono">
                <div><span class="text-green-600">$</span> ./run_diagnostics.sh</div>
                <div class="text-green-300 opacity-80">&gt; Analyzing core competencies...</div>
                <div class="text-green-300 opacity-80">&gt; CPU: Neural pathways optimized.</div>
                <div class="text-green-300 opacity-80">&gt; MEMORY: Recalling 5+ years of dev experience.</div>
                <br/>
                <div><span class="text-green-600">$</span> cat /etc/current_focus</div>
                <div class="text-yellow-300">&gt; "Mastering WebGL and 3D interactions in the browser."</div>
                <br/>
                <div><span class="text-green-600">$</span> ping new_opportunities.local</div>
                <div class="text-green-300 opacity-80">64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=0.031 ms</div>
                <div class="text-green-300 opacity-80">64 bytes from 192.168.1.1: icmp_seq=2 ttl=64 time=0.028 ms</div>
                <br/>
                <div class="flex items-center gap-2">
                    <span class="text-green-600">$</span> 
                    <span class="w-2 h-4 bg-green-400 animate-pulse"></span>
                </div>
            </div>
        </div>
    </section>
</main>

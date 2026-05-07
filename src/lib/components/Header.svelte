<script>
    import { page } from '$app/stores';
</script>

<header class="w-full top-0 sticky z-50 bg-background border-b border-primary">
<nav class="flex justify-between items-center w-full px-margin py-6 max-w-container-max mx-auto">
<a href="/" class="font-headline-sm text-headline-sm font-bold tracking-tighter text-primary">
    0xRASLA
</a>
<div class="hidden md:flex gap-gutter items-center">
    {#each [
        { path: '/work', label: 'Work' },
        { path: '/expertise', label: 'Expertise' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' }
    ] as { path, label }}
        <a 
            class="relative font-label-mono text-label-mono pb-1 transition-all duration-300 {$page.url.pathname.startsWith(path) ? 'text-primary' : 'text-secondary hover:text-primary'} after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary after:origin-left after:transition-transform after:duration-300 {$page.url.pathname.startsWith(path) ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}" 
            href={path}
        >
            {label}
        </a>
    {/each}
<a href="https://www.rasla.me/Thinesh%20Rasla%20Resume.pdf" target="_blank" rel="noopener noreferrer" class="ml-4 px-6 py-2 border border-primary font-label-mono text-label-mono hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all duration-150 cursor-pointer active:scale-95">
    Resume
</a>
</div>
<div class="md:hidden">
<span class="material-symbols-outlined text-primary">menu</span>
</div>
</nav>
</header>

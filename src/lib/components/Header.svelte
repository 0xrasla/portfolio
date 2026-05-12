<script>
    import { page } from "$app/stores";
    import * as Sheet from "$lib/components/ui/sheet/index.js";

    let isSheetOpen = $state(false);
</script>

<header class="w-full top-0 sticky z-50 bg-background border-b border-primary">
    <nav
        class="flex justify-between items-center w-full px-margin py-6 max-w-container-max mx-auto"
    >
        <a
            href="/"
            class="font-headline-sm text-headline-sm font-bold tracking-tighter text-primary"
        >
            0xRASLA
        </a>
        <div class="hidden md:flex gap-gutter items-center">
            {#each [{ path: "/work", label: "Work" }, { path: "/expertise", label: "Expertise" }, { path: "/about", label: "About" }, { path: "/contact", label: "Contact" }] as { path, label }}
                <a
                    class="relative font-label-mono text-label-mono pb-1 transition-all duration-300 {$page.url.pathname.startsWith(
                        path,
                    )
                        ? 'text-primary'
                        : 'text-secondary hover:text-primary'} after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary after:origin-left after:transition-transform after:duration-300 {$page.url.pathname.startsWith(
                        path,
                    )
                        ? 'after:scale-x-100'
                        : 'after:scale-x-0 hover:after:scale-x-100'}"
                    href={path}
                >
                    {label}
                </a>
            {/each}
            <a
                href="https://www.rasla.me/Thinesh%20Rasla%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="ml-4 px-6 py-2 border border-primary font-label-mono text-label-mono hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all duration-150 cursor-pointer active:scale-95"
            >
                Resume
            </a>
        </div>
        <div class="md:hidden">
            <Sheet.Root bind:open={isSheetOpen}>
                <Sheet.Trigger>
                    {#snippet child({ props })}
                        <button
                            {...props}
                            class="material-symbols-outlined text-primary cursor-pointer border-none bg-transparent flex items-center justify-center p-2 focus:outline-none hover:opacity-80 transition-opacity"
                        >
                            menu
                        </button>
                    {/snippet}
                </Sheet.Trigger>
                <Sheet.Content
                    side="right"
                    class="w-[300px] sm:w-[400px] bg-background border-l border-primary p-8 mt-0 pt-16 flex flex-col justify-start"
                >
                    <Sheet.Header class="sr-only">
                        <Sheet.Title>Navigation Menu</Sheet.Title>
                        <Sheet.Description
                            >Access portfolio sections.</Sheet.Description
                        >
                    </Sheet.Header>
                    <nav class="flex flex-col gap-6 mt-8">
                        {#each [{ path: "/", label: "Home" }, { path: "/work", label: "Work" }, { path: "/expertise", label: "Expertise" }, { path: "/about", label: "About" }, { path: "/contact", label: "Contact" }] as { path, label }}
                            <a
                                class="font-headline-sm text-2xl font-bold tracking-tighter transition-all duration-300 {($page
                                    .url.pathname === path &&
                                    path === '/') ||
                                ($page.url.pathname.startsWith(path) &&
                                    path !== '/')
                                    ? 'text-primary'
                                    : 'text-secondary hover:text-primary hover:translate-x-2'}"
                                href={path}
                                onclick={() => (isSheetOpen = false)}
                            >
                                {label}
                            </a>
                        {/each}
                        <a
                            href="https://www.rasla.me/Thinesh%20Rasla%20Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="mt-8 px-6 py-3 border border-primary font-label-mono text-label-mono text-center hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all duration-150 cursor-pointer w-full"
                            onclick={() => (isSheetOpen = false)}
                        >
                            Resume
                        </a>
                    </nav>
                </Sheet.Content>
            </Sheet.Root>
        </div>
    </nav>
</header>

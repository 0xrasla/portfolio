<script lang="ts">
	import { onMount } from "svelte";
	import { Spring } from "svelte/motion";

	let clientX = $state(-100);
	let clientY = $state(-100);
	let isVisible = $state(false);
	let isHovering = $state(false);
	let isPointerFine = $state(false);

	const cursor = new Spring(
		{
			x: -100,
			y: -100,
		},
		{
			stiffness: 0.15,
			damping: 0.5,
		},
	);

	onMount(() => {
		isPointerFine = window.matchMedia("(pointer: fine)").matches;
		if (!isPointerFine) return;

		const handleMouseMove = (e: MouseEvent) => {
			clientX = e.clientX;
			clientY = e.clientY;
			cursor.set({ x: e.clientX, y: e.clientY });
			if (!isVisible) isVisible = true;

			const target = e.target as HTMLElement;
			isHovering = !!target.closest(
				'a, button, input, textarea, select, [role="button"], [class*="cursor-pointer"]',
			);
		};

		const handleMouseLeave = () => {
			isVisible = false;
		};

		const handleMouseEnter = () => {
			isVisible = true;
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseleave", handleMouseLeave);
		window.addEventListener("mouseenter", handleMouseEnter);

		document.body.classList.add("hide-cursor");

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseleave", handleMouseLeave);
			window.removeEventListener("mouseenter", handleMouseEnter);
			document.body.classList.remove("hide-cursor");
		};
	});
</script>

{#if isPointerFine}
	<div
		class="fixed inset-0 pointer-events-none z-9999 transition-opacity duration-300"
		style="opacity: {isVisible ? 1 : 0};"
	>
		<!-- Outer circle -->
		<div
			class="absolute border border-secondary rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
			class:w-8={!isHovering}
			class:h-8={!isHovering}
			class:w-16={isHovering}
			class:h-16={isHovering}
			class:bg-secondary={isHovering}
			class:opacity-20={isHovering}
			style="left: {cursor.current.x}px; top: {cursor.current.y}px;"
		></div>

		<!-- Inner dot -->
		<div
			class="absolute w-2 h-2 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
			class:scale-0={isHovering}
			style="left: {clientX}px; top: {clientY}px;"
		></div>
	</div>
{/if}

<style>
	:global(body.hide-cursor),
	:global(body.hide-cursor *) {
		cursor: none !important;
	}
</style>

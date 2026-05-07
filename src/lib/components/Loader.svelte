<script lang="ts">
	import { onMount } from "svelte";

	let { onComplete } = $props<{ onComplete: () => void }>();

	let progress = $state(0);
	let textIndex = $state(0);
	let hexCodes = $state(["0x00", "0x00", "0x00", "0x00"]);

	const loadingTexts = [
		"Waking up the system...",
		"Compiling architecture...",
		"Optimizing layouts...",
		"Bypassing mainframe...",
		"System Ready.",
	];

	onMount(() => {
		let startTime: number;
		const duration = 2400; // 2.4 seconds

		// Hex code effect
		const hexInterval = setInterval(() => {
			hexCodes = Array(4)
				.fill(0)
				.map(
					() =>
						"0x" +
						Math.floor(Math.random() * 255)
							.toString(16)
							.padStart(2, "0")
							.toUpperCase(),
				);
		}, 80);

		function updateProgress(timestamp: number) {
			if (!startTime) startTime = timestamp;
			const elapsed = timestamp - startTime;

			// easeInOutQuart for a smoother, punchier feel
			const t = Math.min(elapsed / duration, 1);
			const easeOut =
				t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

			progress = Math.min(Math.floor(easeOut * 100), 100);
			textIndex = Math.min(
				Math.floor(t * loadingTexts.length),
				loadingTexts.length - 1,
			);

			if (elapsed < duration) {
				requestAnimationFrame(updateProgress);
			} else {
				setTimeout(() => {
					onComplete();
				}, 400);
			}
		}

		requestAnimationFrame(updateProgress);

		return () => clearInterval(hexInterval);
	});
</script>

<div
	class="w-full h-full flex flex-col items-center justify-between technical-grid relative bg-background p-6 md:p-12 overflow-hidden"
>
	<!-- Top Bar -->
	<div
		class="w-full flex justify-between items-center font-label-mono text-caption uppercase tracking-widest text-secondary z-10 border-b border-outline-variant pb-4"
	>
		<div class="flex items-center gap-3">
			<span class="w-2 h-2 rounded-full bg-secondary animate-pulse"
			></span>
			<span
				>Initialize // <span class="hidden md:inline">0xRASLA_ENV</span
				></span
			>
		</div>
		<div class="flex gap-4">
			{#each hexCodes as hex, i}
				<span class="hidden md:block opacity-{100 - i * 20}">{hex}</span
				>
			{/each}
			<span class="md:hidden">{hexCodes[0]}</span>
		</div>
	</div>

	<!-- Center Content: The Fill Effect -->
	<div
		class="flex flex-col items-center justify-center z-10 w-full grow relative"
	>
		<!-- Huge Typography with mask effect -->
		<div
			class="relative w-full overflow-hidden text-center h-[150px] md:h-[250px] flex items-center justify-center"
		>
			<!-- Background Layer (Light Gray) -->
			<div
				class="font-headline-lg text-[120px] md:text-[250px] leading-none text-surface-container-high font-bold tracking-tighter tabular-nums absolute inset-0 flex items-center justify-center z-0 select-none"
			>
				{progress}<span class="text-6xl md:text-9xl">%</span>
			</div>

			<!-- Foreground Layer (Black, filling up from bottom) -->
			<div
				class="font-headline-lg text-[120px] md:text-[250px] leading-none text-primary font-bold tracking-tighter tabular-nums absolute inset-0 flex items-center justify-center z-10 select-none"
				style="clip-path: polygon(0 {100 - progress}%, 100% {100 -
					progress}%, 100% 100%, 0 100%);"
			>
				{progress}<span class="text-6xl md:text-9xl">%</span>
			</div>
		</div>

		<!-- Decorative brackets -->
		<div
			class="absolute left-4 md:left-24 top-1/2 -translate-y-1/2 w-4 md:w-8 h-32 md:h-64 border-l-2 border-y-2 border-outline-variant opacity-50"
		></div>
		<div
			class="absolute right-4 md:right-24 top-1/2 -translate-y-1/2 w-4 md:w-8 h-32 md:h-64 border-r-2 border-y-2 border-outline-variant opacity-50"
		></div>
	</div>

	<!-- Bottom Bar -->
	<div
		class="w-full flex justify-between items-end font-label-mono text-caption uppercase text-secondary z-10 border-t border-outline-variant pt-4"
	>
		<div class="flex flex-col gap-1 w-1/2">
			<span class="opacity-60">Current Process:</span>
			<span class="text-primary font-bold truncate"
				>{loadingTexts[textIndex]}</span
			>
		</div>

		<div class="w-1/2 flex flex-col items-end gap-2">
			<!-- Minimal Progress Line -->
			<div
				class="w-full max-w-[200px] h-px bg-surface-container-high relative overflow-hidden"
			>
				<div
					class="absolute top-0 left-0 h-full bg-primary"
					style="width: {progress}%;"
				></div>
			</div>
			<div class="flex gap-2 items-center">
				<span class="opacity-60">Status:</span>
				<span class="text-primary cursor-blink">Loading</span>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import { onMount } from 'svelte';

	let { onComplete } = $props<{ onComplete: () => void }>();

	let progress = $state(0);

	onMount(() => {
		let startTime: number;
		const duration = 1800; // 1.8 seconds for a nice paced loading

		function updateProgress(timestamp: number) {
			if (!startTime) startTime = timestamp;
			const elapsed = timestamp - startTime;

			// Use an easing function for the progress (easeOutQuart)
			const t = Math.min(elapsed / duration, 1);
			const easeOut = 1 - Math.pow(1 - t, 4);
			
			progress = Math.min(Math.floor(easeOut * 100), 100);

			if (elapsed < duration) {
				requestAnimationFrame(updateProgress);
			} else {
				setTimeout(() => {
					onComplete();
				}, 300); // Hold at 100% for a brief moment
			}
		}

		requestAnimationFrame(updateProgress);
	});
</script>

<div class="w-full h-full flex flex-col items-center justify-center technical-grid relative bg-background">
	<div class="flex flex-col items-center gap-4 z-10">
		<div class="font-headline-lg text-[120px] md:text-[180px] leading-none text-primary font-bold tracking-tighter tabular-nums flex items-baseline">
			{progress}<span class="text-secondary text-5xl md:text-7xl">%</span>
		</div>
		
		<div class="w-64 md:w-96 h-1 bg-surface-container-high relative overflow-hidden">
			<div 
				class="absolute top-0 left-0 h-full bg-secondary"
				style="width: {progress}%"
			></div>
		</div>
		
		<div class="font-label-mono text-caption text-secondary uppercase tracking-widest mt-6 cursor-blink">
			System Boot Sequence
		</div>
	</div>
</div>

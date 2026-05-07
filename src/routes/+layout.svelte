<script lang="ts">
	import { page } from "$app/stores";
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import Loader from "$lib/components/Loader.svelte";
	import { cubicInOut, cubicOut } from "svelte/easing";
	import { fly } from "svelte/transition";
	import "./layout.css";

	let { children } = $props();
	let initialLoading = $state(true);
</script>

<svelte:head>
	<!-- Global OG tags inherited by every page -->
	<meta property="og:locale" content="en" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:logo" content="https://v2.rasla.me/favicon-96x96.png" />
	<meta property="og:site_name" content="0xRasla" />
</svelte:head>

{#if initialLoading}
	<div
		out:fly={{ y: -1500, duration: 1000, easing: cubicInOut }}
		class="fixed inset-0 z-100 bg-background border-b-2 border-primary"
	>
		<Loader onComplete={() => (initialLoading = false)} />
	</div>
{/if}

<div class="min-h-screen">
	<Header />
	{#key $page.url.pathname}
		<div in:fly={{ x: -50, duration: 700, delay: 100, easing: cubicOut }}>
			{@render children()}
		</div>
	{/key}
	<Footer />
</div>

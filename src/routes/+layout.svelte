<script lang="ts">
	import { page } from "$app/stores";
	import favicon from "$lib/assets/favicon.svg";
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import { cubicOut } from "svelte/easing";
	import { fly } from "svelte/transition";
	import "./layout.css";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Header />
{#key $page.url.pathname}
	<div in:fly={{ x: -50, duration: 700, delay: 100, easing: cubicOut }}>
		{@render children()}
	</div>
{/key}
<Footer />

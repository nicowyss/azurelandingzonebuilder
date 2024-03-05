<script>
	import '../app.css';
	import '../fonts.css';
	import Logo from '$lib/Logo.svelte';
	import Top from '$lib/Top.svelte';
	import Nav from '$lib/Nav.svelte';
</script>

<div id="logo">
	<Logo />
</div>
<div id="top">
	<Top />
</div>
<div id="sidebar">
	<Nav />
</div>
<div id="main">
	<slot />
</div>

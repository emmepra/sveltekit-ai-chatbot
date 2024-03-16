<script lang="ts">
	import { page } from '$app/stores';
	import ClearHistory from '$lib/components/ClearHistory.svelte';
	import LoginButton from '$lib/components/LoginButton.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import SidebarFooter from '$lib/components/SidebarFooter.svelte';
	import SidebarList from '$lib/components/SidebarList.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import UserMenu from '$lib/components/UserMenu.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import { IconGitHub, IconShare, IconHamburger, IconEnlarge, IconPlus, IconSeparator } from '$lib/components/ui/icons';
	import type { Chat } from '$lib/types';
	import { cn } from '$lib/utils';

	import { Button } from "$lib/components/ui/button/index.js";

</script>

<header class="sticky top-0 z-50 flex h-10 w-full shrink-0 items-center justify-between border-b px-4 bg-white">
	<div class="flex items-center space-x-2">
			<!-- <Sidebar>
				<SidebarList {chats} />
				<SidebarFooter>
					<ThemeToggle />
					<ClearHistory />
				</SidebarFooter>
			</Sidebar> -->

			<a href="/dashboard" class={buttonVariants({ variant: "outline", size: "ixs"})} >
				<IconHamburger />
			</a>

			<a href="/dashboard" class={buttonVariants({ variant: "outline", size: "xs"})} >
				<IconPlus />
				<!-- <span class="ml-2 hidden md:flex">New Workflow</span> -->
				<span class="ml-2 md:flex text-xs">New Workflow</span>
			</a>
	</div>

	<div class="flex items-center justify-center">
		<!-- workflow title -->
		<code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-semibold hidden sm:block">
			the-needl
		</code>
	</div>

	<div class="flex items-center justify-end space-x-2">

		<a href="/dashboard" class={buttonVariants({ variant: "outline", size: "xs"})} >
			<IconEnlarge />
			<!-- <span class="ml-2 hidden md:flex">Reader</span> -->
			<span class="ml-2 md:flex text-xs">Reader</span>
		</a>
		<a href="/dashboard" class={buttonVariants({ variant: "outline", size: "xs"})} >
			<IconShare />
			<!-- <span class="ml-2 hidden md:flex">Share</span> -->
			<span class="ml-2 md:flex text-xs">Share</span>
		</a>

	</div>
</header>


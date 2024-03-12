<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<svg
	aria-label="Enlarge"
	role="img"
	viewBox="0 0 20 20"
	class={cn('h-5 w-5', className)}
	{...$$restProps}
>
<path d="M3.33398 10H16.6673" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M3.33398 5H16.6673" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M3.33398 15H16.6673" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>

</svg>

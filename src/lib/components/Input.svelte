<script lang="ts">
	export let label: string;
	export let name: string;
	export let type: string;
	export let textarea: boolean = false;
	export let cols: number = 30;
	export let rows: number = 10;
	export let message: string = '';
	export let success: boolean = false;
	export let error: boolean = false;

	export function clear() {
		success = false;
		error = false;
		message = '';
	}

	export function validate() {
		success = true;
	}

	export function warn(text) {
		error = true;
		message = text;
	}
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<div class="relative my-6">
	<label class="absolute -top-8 font-medium" for={name}>{label}</label>
	{#if textarea}
		<textarea
			{type}
			class="text-lg block w-full outline-none resize-none border-b-2 bg-neutral-light dark:bg-neutral-dark focus:border-primary"
			class:border-success={success}
			class:border-error={error}
			{name}
			{cols}
			{rows}
			placeholder=" "
		/>
	{:else}
		<input
			{type}
			class="text-lg block w-full outline-none resize-none border-b-2 bg-neutral-light dark:bg-neutral-dark focus:border-primary"
			class:border-success={success}
			class:border-error={error}
			{name}
			placeholder=" "
		/>
	{/if}
	{#if message.length > 0}
		<div class="mt-2 text-primary" class:text-success={success} class:text-error={error}>
			{message}
		</div>
	{/if}
</div>

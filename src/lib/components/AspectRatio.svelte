<script lang="ts">
	export let ratio: number = 16 / 9;
</script>

<div class="relative w-full h-0" style={`padding-bottom: ${(1 / ratio) * 100}%;`}>
	<div class="absolute top-0 left-0 bottom-0 right-0">
		<slot />
	</div>
</div>

<template>
	<TemplateSetup>
		<h2 class="text-center mb-2">
			Disconnected
		</h2> <router-link
			to="/"
			class="text-center block hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3"
		>
			Try to re-connect
		</router-link>
	</TemplateSetup>
</template>
<script>
	import TemplateSetup from '@/components/TemplateSetup.vue';
	export default {
		components: {
			TemplateSetup: TemplateSetup
		},
		created() {
			setInterval(() => {
				this.$router.push('/');
			}, 250);
		}
	};

</script>
<style scoped></style>
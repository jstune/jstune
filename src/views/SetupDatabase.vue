<template>
	<TemplateSetup>
		<h2 class="mb-2">
			Setup Database
		</h2><input
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="E-mail"
		/><input
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Username"
		/><input
			class="font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Password"
		/><button class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3">
			Install
		</button>
	</TemplateSetup>
</template>
<script>
	import TemplateSetup from '@/components/TemplateSetup.vue';
	export default {
		components: {
			TemplateSetup: TemplateSetup
		},
		data: () => ({})
	};

</script>
<style scoped></style>
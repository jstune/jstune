<template>
	<TemplateSetup>
		<h2 class="mb-2">
			JSTune
		</h2><input
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Username"
		/><input
			class="font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Password"
		/><button class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3">
			Login
		</button><router-link
			to="/recover"
			class="hover:text-slate-200 mt-6 inline-block text-center w-full"
		>
			Recover lost password
		</router-link><router-link
			to="/register"
			class="mt-3 hover:text-slate-200 inline-block text-center w-full"
		>
			Request access
		</router-link>
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
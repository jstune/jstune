<template>
	<div class="h-screen bg-gradient-to-tl bg-cyan-800 grow place-items-center flex from-emerald-500 justify-center uppercase p-8 text-white w-full">
		<WrapperPage class="justify-center">
			<div style="max-width:100%;width:240px">
				<h2 class="mb-2">
					JSTune
				</h2><input
					class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
					placeholder="E-mail Username"
				/><button class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3">
					Recover
				</button>
			</div>
		</WrapperPage>
	</div>
</template>
<script>
	import WrapperPage from '@/components/WrapperPage.vue';
	import TemplateDefault from '@/components/TemplateDefault.vue';
	export default {
		components: {
			WrapperPage,
			TemplateDefault
		},
		data: () => ({})
	};

</script>
<style scoped></style>
<template>
	<TemplateDefault>
		<WrapperPage class="flex-col md:flex-row">
			<div class="md:max-w-xs w-full">
				<UtilityNavbar
					:menu="menus.SidebarMenu"
					:sidebar="true"
					:groupColor="'#151a24ff'"
					:groupBackgroundColor="'#ffffffff'"
					:color="''"
					:groupBackgroundColorSubmenu="'#ffffffff'"
					leftBorderWidth="3px"
					backgroundColorSubmenu="#ffffffff"
					backgroundColor="#ffffffff"
					backgroundColorActive="#ffffffff"
					backgroundColorHover="#faf7f7ff"
					indent="20px"
					leftBorderColorActive="#6d2580ff"
					class="mt-11"
				>
				</UtilityNavbar>
			</div>
			<div class="flex-col place-self-center mt-8 mb-24 flex">
				<h1 class="px-4 mb-4 mt-6 font-medium text-3xl w-full">
					Documentation
				</h1> <span class="text-slate-500 pl-5 mt-2">
					Mar 04, 2024
				</span>
				<div class="relative mb-16 flex-col md:flex-row flex w-full px-4">
					<div class="pt-2 md:pt-0 grow">
						<h2 class="text-xl font-medium mt-10">
							Lorem ipsum dolor sit amet
						</h2> <span class="text-slate-800 my-4 w-full block">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ut justo quis nisi placerat faucibus. Integer feugiat eros at nisi commodo, sed dictum eros volutpat.
						</span><span class="text-slate-800 my-4 w-full block">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ut justo quis nisi placerat faucibus. Integer feugiat eros at nisi commodo, sed dictum eros volutpat.
						</span>
					</div>
					<div class="bg-slate-100 -bottom-5 absolute h-0.5 left-4 right-4">
					</div>
				</div>
			</div>
		</WrapperPage>
	</TemplateDefault>
</template>
<script>
	import UtilityNavbar from '@/components/UtilityNavbar.vue';
	import WrapperPage from '@/components/WrapperPage.vue';
	import TemplateDefault from '@/components/TemplateDefault.vue';
	export default {
		inject: ['menus'],
		components: {
			UtilityNavbar: UtilityNavbar,
			WrapperPage,
			TemplateDefault
		},
		data: () => ({})
	};

</script>
<style scoped></style>
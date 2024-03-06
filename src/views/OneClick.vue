<template>
	<TemplateHero title="Dashboard">
		<WrapperPage>
			<div class="w-full flex-col mt-12 py-4 px-6 flex">
				<h1 class="mb-8 font-semibold text-4xl">
					Applications
				</h1>
			</div>
		</WrapperPage>
		<WrapperPage class="px-6 flex-col md:flex-row">
			<div class="md:max-w-xs w-full">
				<UtilityNavbar
					:menu="menus.SidebarMenu"
					:sidebar="true"
					:color="''"
					:groupBackgroundColorSubmenu="'#ffffffff'"
					leftBorderWidth="3px"
					backgroundColorSubmenu="#ffffffff"
					backgroundColor="#ffffffff"
					backgroundColorActive="#faf7f7ff"
					backgroundColorHover="#faf7f7ff"
					indent="20px"
					leftBorderColorActive="#6d2580ff"
					class="mt-11"
					leftBorderColor="#efebf0ff"
					leftBorderColorHover="#efebf0ff"
					groupSize="15px"
					groupColor="#545454ff"
					groupBackgroundColor="#ffffffff"
					groupPaddingBottom="5px"
					groupPaddingTop="0px"
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
		<div class="py-16 bg-slate-100 mt-6">
			<WrapperPage class="flex-col">
				<div class="w-full flex-col my-16 py-4 px-6 flex">
					<h1 class="mb-8 font-semibold text-4xl">
						Main Server Node
					</h1>
					<div class="relative rounded-xl overflow-auto max-w-md">
						<div class="shadow-sm overflow-hidden my-8">
							<table class="border-collapse table-auto w-full text-sm">
								<tbody class="bg-white dark:bg-slate-800">
									<tr>
										<td class="font-bold border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
											IP
										</td>
										<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
											34.88.86.116
										</td>
									</tr>
									<tr>
										<td class="font-bold border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
											Hostname
										</td>
										<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
											internal.host.name
										</td>
									</tr>
									<tr>
										<td class="font-bold border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
											State
										</td>
										<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
											Ready
										</td>
									</tr>
									<tr>
										<td class="font-bold border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
											Status
										</td>
										<td class="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
											Active
										</td>
									</tr>
									<tr>
										<td class="font-bold border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
											RAM
										</td>
										<td class="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
											1.24GB of 3.84GB used
										</td>
									</tr>
									<tr>
										<td class="font-bold border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
											Storage
										</td>
										<td class="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
											12GB of 100GB used
										</td>
									</tr>
									<tr>
										<td class="font-bold border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
											CPU
										</td>
										<td class="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
											2 cores
										</td>
									</tr>
									<tr>
										<td class="font-bold border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
											OS
										</td>
										<td class="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
											Linux
										</td>
									</tr>
									<tr>
										<td class="font-bold border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
											Architecture
										</td>
										<td class="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
											x86_64
										</td>
									</tr>
									<tr>
										<td class="font-bold border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
											Docker Version
										</td>
										<td class="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
											24.0.6
										</td>
									</tr>
									<tr>
										<td class="font-bold border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
											Additional Nodes
										</td>
										<td class="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
											3
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</WrapperPage>
		</div>
	</TemplateHero>
</template>
<script>
	import WrapperPage from '@/components/WrapperPage.vue';
	import TemplateHero from '@/components/TemplateHero.vue';
	import UtilityNavbar from '@/components/UtilityNavbar.vue';
	export default {
		components: {
			WrapperPage,
			TemplateHero,
			UtilityNavbar
		},
		inject: ['menus'],
		data: () => ({})
	};

</script>
<style scoped></style>
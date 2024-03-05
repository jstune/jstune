<template>
	<TemplateHero title="Applications">
		<WrapperPage>
			<div class="w-full flex-col my-16 py-4 px-6 flex">
				<h1 class="mb-8 font-semibold text-4xl">
					Next generation front end tooling
				</h1>
				<p class="tracking-wide max-w-md font-light text-2xl">
					Dummy page to explore the depth of Vue.js visually, uncovering its elegant design patterns, and dynamic capabilities, immersing yourself in a vibrant web development experience.
				</p>
			</div>
		</WrapperPage>
		<div class="py-16 bg-slate-100 mt-6">
			<WrapperPage class="flex-col">
				<div class="w-full flex-col my-16 py-4 px-6 flex">
					<h1 class="mb-8 font-semibold text-4xl">
						Main Server Node
					</h1>
					<div class="relative rounded-xl overflow-auto max-w-sm">
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
											3.84GB
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
	export default {
		components: {
			WrapperPage,
			TemplateHero
		},
		data: () => ({})
	};

</script>
<style scoped></style>
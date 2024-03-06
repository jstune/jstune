<template>
	<TemplateHero title="Users">
		<WrapperPage class="p-6">
			<div class="relative rounded-xl overflow-auto w-full">
				<div class="shadow-sm overflow-hidden my-8">
					<table class="border-collapse table-auto w-full text-sm">
						<thead>
							<tr>
								<th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
									App Name
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Persisten Data
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Instance Count
								</th>
								<th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center">
									Last Deploy
								</th>
								<th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center">
									Open
								</th>
							</tr>
						</thead>
						<tbody class="bg-white dark:bg-slate-800">
							<tr>
								<td class="hover:text-slate-700 cursor-pointer border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="mx-auto w-6 h-6"
									>
										<path
											fill-rule="evenodd"
											d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
											clip-rule="evenodd"
										/>
									</svg>
								</td>
								<td class="text-center border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
									1
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400 text-center">
									06.03.2024 15:02:45
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="hover:text-slate-700 cursor-pointer w-6 h-6 mx-auto"
									>
										<path
											fill-rule="evenodd"
											d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
											clip-rule="evenodd"
										/>
									</svg> </td>
							</tr>
						</tbody>
					</table>
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
	export default {
		components: {
			WrapperPage,
			TemplateHero
		},
		inject: ['menus'],
		data: () => ({})
	};

</script>
<style scoped></style>
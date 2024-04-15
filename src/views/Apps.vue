<template>
	<TemplateHero title="Applications">
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
									Public Ports
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Private Ports
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Running
								</th>
								<th class="text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Image
								</th>
								<th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center">
									Status
								</th>
								<th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center">
									Id
								</th>
								<th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center">
									Created
								</th>
								<th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center">
									Open
								</th>
							</tr>
						</thead>
						<tbody class="bg-white dark:bg-slate-800">
							<tr v-for="item in items">
								<td class="hover:text-slate-700 cursor-pointer border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
									{{ item.Names?.[0].replace('/', '') }}
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
									<button
										v-for="port in item.Ports.filter(p => p.PublicPort)"
										class="rounded bg-slate-200 m-1 p-1"
									>
										{{ port.PublicPort }}
									</button>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
									<button
										v-for="port in item.Ports.filter(p => p.PrivatePort)"
										class="rounded bg-slate-200 m-1 p-1"
									>
										{{ port.PrivatePort }}
									</button>
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="w-6 h-6"
										v-if="item.State !== 'running'"
									>
										<path
											fill-rule="evenodd"
											d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
											clip-rule="evenodd"
										/>
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="mx-auto w-6 h-6"
										v-if="item.State === 'running'"
									>
										<path
											fill-rule="evenodd"
											d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
											clip-rule="evenodd"
										/>
									</svg>
								</td>
								<td
									class="text-center border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"
									:title="item.ImageID"
								>
									{{ item.Image }}
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400 text-center">
									{{ item.Status }}
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400 text-center">
									<input v-model="item.Id" />
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400 text-center">
									{{ item.Created }}

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
		inject: ['menus', 'io'],
		data: () => ({
			service: 'apps',
			items: null
		}),
		async created() {
			await this.getItems();
		},
		methods: {
			async getItems() {
				try {
					this.items = await this.io.service(this.service)
						.find({
							query: {}
						});
					console.log(this.items);
				} catch (e) {
					this.items = null;
					console.error(e);
				}
			}
		}
	};

</script>
<style scoped></style>
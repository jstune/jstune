<template>
	<TemplateHero title="Swarm">
		<WrapperPage class="p-6">
			<div class="relative overflow-auto w-full">
				<button
					class="rounded p-2 bg-slate-200"
					@click="getItems"
				>
					Reload
				</button>
				<div class="shadow-sm overflow-hidden my-8">

					<table class="border-collapse table-auto w-full text-sm">
						<thead>
							<tr>
								<th class="whitespace-nowrap border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center">
									Id
								</th>
								<th class="whitespace-nowrap border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
									Hostname
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Status
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Role
								</th>
								<th class="whitespace-nowrap text-center border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">
									Ready
								</th>
								<th class="whitespace-nowrap border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center">
									Address
								</th>
								<th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center">
									Created
								</th>
								<th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center">
									Terminal
								</th>
							</tr>
						</thead>
						<tbody class="bg-white dark:bg-slate-800">
							<tr v-for="item in items">
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400 text-center">
									<input v-model="item.ID" />
								</td>
								<td class="hover:text-slate-700 cursor-pointer border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
									{{ item.Description.Hostname }}
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
									{{ item.ManagerStatus.Reachability }} {{ item.ManagerStatus.Leader ? '(Leader)' : '' }}
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
									{{ item.Spec.Role }} {{ item.Spec.Availability }}
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="mx-auto w-6 h-6"
										v-if="item.Status.State !== 'ready'"
									>
										<path
											fill-rule="evenodd"
											d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
											clip-rule="evenodd"
										/>
									</svg> <svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="mx-auto w-6 h-6"
										v-if="item.Status.State === 'ready'"
									>
										<path
											fill-rule="evenodd"
											d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
											clip-rule="evenodd"
										/>
									</svg> </td>
								<td class="whitespace-nowrap border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400 text-center">
									{{ item.ManagerStatus.Addr }}
								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400 text-center">
									{{ item.CreatedAt }}

								</td>
								<td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="w-6 h-6 mx-auto cursor-pointer hover:text-slate-700"
									>
										<path
											fill-rule="evenodd"
											d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
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
			service: 'swarm',
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
							query: {
								limit: 100,
								since: '',
								// node ID or name
								before: '' // node ID or name
							}
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
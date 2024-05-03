<template>
	<TemplateSidemenu title="Applications">
		<div class="flex h-full flex-col md:flex-row">
			<div class="flex-col flex w-full md:w-1/2">
				<h2 class="font-extralight text-lg p-4 max-w-full">Header H2</h2>
				<div class="flex p-4">

					<input
						placeholder="Search"
						class="rounded-l bg-slate-50 grow p-2"
					/><button class="hover:bg-slate-200 font-extralight rounded-r p-2 bg-slate-100">
						Search
					</button>
				</div>
				<div class="p-4 md:hidden">
					Pagination
				</div>
				<div class="p-4 grow">
					List items
				</div>
				<div class="p-4 hidden md:block">
					Pagination
				</div>
			</div>
			<div class="grow p-4">
				Details & Actions
			</div>
		</div>
	</TemplateSidemenu>
</template>
<script>
	import WrapperPage from '@/components/WrapperPage.vue';
	import TemplateSidemenu from '@/components/TemplateSidemenu.vue';
	export default {
		components: {
			WrapperPage,
			TemplateSidemenu
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
							query: {
								all: true,
								limit: 100,
								since: '',
								// container ID or name
								before: '' // container ID or name
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
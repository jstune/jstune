<template>
	<TemplateSidemenu title="Applications">
		<div class="flex h-full">
			<div class="w-1/2"></div>
			<div class="grow"></div>
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
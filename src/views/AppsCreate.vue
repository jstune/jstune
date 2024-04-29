<template>
	<TemplateHero title="Applications / Create">
		<WrapperPage class="p-6">
			<div class="relative overflow-auto w-full">
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">

					<h2 class="my-4">
						Basic app settings
					</h2> <input
						placeholder="App name"
						class="px-4 py-2"
					/><input
						placeholder="App port"
						class="ml-4 px-4 py-2"
					/>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<h2 class="my-4">
						Upload using drop of Tar / Zip / Folder / Docker Compose File / Docker File
					</h2>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<h2 class="my-4">
						One click installation browsing images from docker hub
					</h2>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<button
						class="rounded p-2 bg-slate-200"
						@click="getItems"
					>
						Connect to Github
					</button><button
						class="rounded p-2 bg-slate-200 ml-4"
						@click="getItems"
					>
						Select repository
					</button>
					<h2 class="my-4">
						Clone using Github (With option to autodeploy using push webhooks)
					</h2><input
						placeholder="Repository"
						class="px-4 py-2"
					/>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<button
						class="rounded p-2 bg-slate-200"
						@click="getItems"
					>
						Connect to Gitlab
					</button><button
						class="rounded p-2 bg-slate-200 ml-4"
						@click="getItems"
					>
						Select repository
					</button>
					<h2 class="my-4">
						Clone using Gitlab (With option to autodeploy using push webhook)
					</h2><input
						placeholder="Repository"
						class="px-4 py-2"
					/>
				</div><button
					class="rounded p-2 bg-slate-200"
					@click="getItems"
				>
					Submit
				</button>
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
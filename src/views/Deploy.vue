<template>
	<TemplateDefault :renderer="renderer">
		<SectionHero>
			<h1 class="font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase">
				Deploy App
			</h1>
		</SectionHero>
		<WrapperPage class="p-6">
			<div class="mt-8 mb-20 relative overflow-auto w-full">
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
						@click="connect()"
					>
						Connect to Github
					</button><button
						class="rounded p-2 bg-slate-200 ml-4"
						@click="connect()"
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
				<div class="text-right">
					<button
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="connect()"
					>
						Launch
					</button>
				</div>
			</div>
		</WrapperPage>
	</TemplateDefault>
</template>
<script>
	import WrapperPage from '@/components/WrapperPage.vue';
	import TemplateDefault from '@/components/TemplateDefault.vue';
	import SectionHero from '@/components/SectionHero.vue';
	export default {
		components: {
			WrapperPage,
			TemplateDefault,
			SectionHero
		},
		props: ['renderer'],
		data: () => ({})
	};

</script>
<style scoped></style>
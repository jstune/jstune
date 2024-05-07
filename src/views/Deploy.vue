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

					<label class="block my-2">
						Basic app settings
					</label> <input
						placeholder="Name"
						class="px-4 py-2 block w-full mb-4"
					/><input
						placeholder="Slug"
						class="px-4 py-2 block w-full"
					/>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"><label class="block my-2">
						Upload using drop of Tar / Zip / Folder / Docker Compose File / Docker File
					</label><button
						class="rounded p-2 bg-slate-200 block w-full mt-2"
						@click="uploadFiles()"
					>
						Select files
					</button><button
						class="rounded p-2 bg-slate-200 block w-full mt-2"
						@click="uploadFolde()"
					>
						Select folder
					</button><button
						class="rounded p-2 bg-slate-200 block w-full mt-2"
						@click="uploadTar()"
					>
						Select tar
					</button><button
						class="rounded p-2 bg-slate-200 block w-full mt-2"
						@click="files = []"
					>
						Clear files
					</button><button
						class="rounded p-2 bg-slate-200 block w-full mt-2"
						@click="packTar()"
					>
						Pack tar
					</button> </div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"><label class="block my-2">
						{{files.length}}
					</label> </div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<label class="block my-2">
						Clone using Github (With option to autodeploy using push webhooks)
					</label><button
						class="rounded p-2 bg-slate-200"
						@click="connect()"
					>
						Connect to Github
					</button><button
						class="rounded p-2 bg-slate-200 ml-4"
						@click="connect()"
					>
						Select repository
					</button> <input
						placeholder="Repository url"
						class="mt-2 px-4 py-2 w-full"
					/>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<label class="block my-2">
						One click installation browsing images from docker hub
					</label>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<label class="block my-2">Docker Compose</label> <textarea
						class="w-full p-4"
						v-model="dockerComposeFile"
						rows="10"
						placeholder="docker-compose.override.yml"
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
	import Tar from 'tar-js';
	import untar from 'js-untar';
	export default {
		components: {
			WrapperPage,
			TemplateDefault,
			SectionHero
		},
		props: ['renderer'],
		data: () => ({
			dockerComposeFile: ``,
			files: []
		}),
		methods: {
			async packTar() {
				let tape = new Tar();
				for await (let file of this.files) {
					tape.append(file.name, new Uint8Array(file.buffer));
				}
				let result = tape.out;
				console.log(result);
			},
			async uploadTar() {
				return new Promise(resolve => {
					let input = document.createElement('input');
					input.type = 'file';
					input.multiple = false;
					input.onchange = async () => {
						let file = Array.from(input.files)[0];
						let files = await untar(await file.arrayBuffer());
						for await (let file of files) {
							this.files.push({
								buffer: file.buffer,
								name: file.name
							});
						}
						resolve();
					};
					input.click();
				});
			},
			async uploadFolder() {
				return new Promise(resolve => {
					let input = document.createElement('input');
					input.type = 'file';
					input.multiple = true;
					input.webkitdirectory = true;
					input.dir = true;
					input.onchange = async () => {
						let files = Array.from(input.files);
						for await (let file of files) {
							this.files.push({
								buffer: await file.arrayBuffer(),
								name: file.webkitRelativePath
							});
						}
						resolve();
					};
					input.click();
				});
			},
			async uploadFiles() {
				return new Promise(resolve => {
					let input = document.createElement('input');
					input.type = 'file';
					input.multiple = true;
					input.onchange = async () => {
						let files = Array.from(input.files);
						for await (let file of files) {
							let buffer = await file.arrayBuffer();
							this.files.push({
								buffer,
								name: file.name
							});
						}
						resolve();
					};
					input.click();
				});
			}
		}
	};

</script>
<style scoped></style>
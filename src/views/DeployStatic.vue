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
						v-model="hostname"
						placeholder="Hostname"
						class="px-4 py-2 block w-full mb-4"
					/>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"><label class="block my-2">
						Upload using drop of Tar / Zip / Folder / Docker Compose File / Docker File
					</label><button
						class="rounded p-2 bg-slate-200 block w-full mt-2"
						@click="uploadFiles()"
					>
						Upload files
					</button><button
						class="rounded p-2 bg-slate-200 block w-full mt-2"
						@click="uploadFolde()"
					>
						Upload folder
					</button><button
						class="rounded p-2 bg-slate-200 block w-full mt-2"
						@click="uploadTar()"
					>
						Upload tar
					</button><button
						class="rounded p-2 bg-slate-200 block w-full mt-2"
						@click="uploadZip()"
					>
						Upload zip
					</button><button
						class="rounded p-2 bg-slate-200 block w-full mt-2"
						@click="files = []"
					>
						Clear files
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
					</button><button
						class="rounded p-2 bg-slate-200 ml-4"
						@click="autodeploy = !autodeploy"
					>
						{{ autodeploy ? 'Autodeploy on' : 'Autodeploy off' }}
					</button> <input
						v-model="repository"
						placeholder="Repository url"
						class="mt-2 px-4 py-2 w-full"
					/> <input
						v-model="branch"
						placeholder="Branch name"
						class="mt-2 px-4 py-2 w-full"
					/>
				</div>
				<div class="text-right">
					<button
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="deploy()"
					>
						Launch
					</button><button
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="update()"
					>
						Update
					</button><button
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="attach()"
					>
						Attach webhook
					</button><button
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="detach()"
					>
						Detach webhook
					</button><button
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="status()"
					>
						Status webhook
					</button> <button
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="list()"
					>
						List
					</button><button
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="remove()"
					>
						Remove
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
	import {
		unzip
	} from 'unzipit';
	export default {
		components: {
			WrapperPage,
			TemplateDefault,
			SectionHero
		},
		props: ['renderer'],
		inject: ['io'],
		data: () => ({
			files: [],
			hostname: '',
			repository: '',
			branch: 'main',
			autodeploy: false
		}),
		methods: {
			async remove() {
				const hostname = prompt('Hostname', this.hostname);
				const res = await this.io.service('static')
					.remove(hostname);
				console.log('res', res);
			},
			async attach() {
				const hostname = prompt('Hostname', this.hostname);
				const res = await this.io.service('static')
					.patch(hostname, {
						attach: true
					});
				console.log('res', res);
			},
			async detach() {
				const hostname = prompt('Hostname', this.hostname);
				const res = await this.io.service('static')
					.patch(hostname, {
						detach: true
					});
				console.log('res', res);
			},
			async status() {
				const hostname = prompt('Hostname', this.hostname);
				const res = await this.io.service('static')
					.patch(hostname, {
						status: true
					});
				console.log('res', res);
			},
			async list() {
				const res = await this.io.service('static')
					.find();
				console.log('res', res);
			},
			async update() {
				try {
					console.log('files', this.files);
					const res = await this.io.service('static')
						.update(this.hostname, {
							buffer: this.files?.length ? await this.packTar() : null,
							repository: this.repository,
							branch: this.branch,
							autodeploy: this.autodeploy
						});
					console.log('res', res);
				} catch (e) {
					console.log('error', e);
				}
			},
			async deploy() {
				try {
					console.log('files', this.files);
					const res = await this.io.service('static')
						.create({
							hostname: this.hostname,
							buffer: this.files?.length ? await this.packTar() : null,
							repository: this.repository,
							autodeploy: this.autodeploy,
							branch: this.branch
						});
					console.log('res', res);
				} catch (e) {
					console.log('error', e);
				}
			},
			async packTar() {
				let tape = new Tar();
				for await (let file of this.files) {
					tape.append(file.name, new Uint8Array(file.buffer));
				}
				return tape.out;
			},
			async uploadZip() {
				this.files = [];
				return new Promise(resolve => {
					let input = document.createElement('input');
					input.type = 'file';
					input.multiple = false;
					input.accept = '.zip';
					input.onchange = async () => {
						let file = Array.from(input.files)[0];
						const {
							entries
						} = await unzip(await file.arrayBuffer());
						for await (const [name, entry] of Object.entries(entries)) {
							if (!entries[name].isDirectory) {
								this.files.push({
									buffer: await entry.arrayBuffer(),
									name
								});
							}
						}
						await this.resolveDockerCompose();
						resolve();
					};
					input.click();
				});
			},
			async uploadTar() {
				this.files = [];
				return new Promise(resolve => {
					let input = document.createElement('input');
					input.type = 'file';
					input.multiple = false;
					input.accept = '.tar';
					input.onchange = async () => {
						let file = Array.from(input.files)[0];
						let files = await untar(await file.arrayBuffer());
						for await (let file of files) {
							this.files.push({
								buffer: file.buffer,
								name: file.name
							});
						}
						await this.resolveDockerCompose();
						resolve();
					};
					input.click();
				});
			},
			async uploadFolder() {
				this.files = [];
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
						await this.resolveDockerCompose();
						resolve();
					};
					input.click();
				});
			},
			async uploadFiles() {
				this.files = [];
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
								name: 'root/' + file.name
							});
						}
						await this.resolveDockerCompose();
						resolve();
					};
					input.click();
				});
			}
		}
	};

</script>
<style scoped></style>
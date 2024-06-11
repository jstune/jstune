<template>
	<TemplateDefault :renderer="renderer">
		<SectionHero>
			<h1 class="font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase">
				{{ id || 'Deploy Docker App'}}
			</h1>
		</SectionHero>
		<WrapperPage class="p-6">
			<div class="mt-8 mb-20 relative overflow-auto w-full">
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">

					<label class="block my-2">
						Basic app settings
					</label> <input
						v-model="name"
						placeholder="Name"
						class="px-4 py-2 block w-full mb-4"
					/><input
						v-if="!$route.params.id"
						v-model="slug"
						placeholder="Slug"
						class="px-4 py-2 block w-full"
					/> <input
						v-if="$route.params.id"
						v-model="id"
						placeholder="Slug"
						readonly=""
						class="px-4 py-2 block w-full"
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
					</button> </div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"><label class="block my-2">
						Files count: {{files.length}}
					</label> </div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<label class="block my-2">
						Clone using a git provider
					</label>
					<div
						v-for="provider in oauthProvidersFiltered"
						class="mr-4 inline-block"
					>
						<button
							class="rounded p-2 bg-slate-200 mr-1"
							@click="consent(provider.consent_url)"
						>
							Connect to {{provider.provider}}
						</button> <button
							class="rounded p-2 bg-slate-200"
							@click="searchRepos = !searchRepos"
						>
							{{ searchRepos ? 'Close' : 'Select repository' }}
						</button>
					</div>
					<div v-if="searchRepos">
						<label class="block my-2">
							Select user / organisation ({{orgs?.length || '0'}})
						</label> <select
							v-model="query"
							class="mt-2 px-4 py-2 w-full"
						>
							<option
								v-for="org in orgs"
								:value="org.query"
							>
								{{org.title}}
							</option>
						</select> <input
							v-model="search"
							placeholder="Search for repository ..."
							class="mt-2 px-4 py-2 w-full"
							@keypress.enter="getRepositories()"
						/> <button
							class="rounded p-2 mt-2 w-full bg-slate-200"
							@click="getRepositories()"
						>
							Search
						</button> <label class="block my-2">
							Select Repository ({{repositories?.items?.length || '0'}})
						</label> <select
							v-model="repository"
							class="mt-2 px-4 py-2 w-full"
						>
							<option
								v-for="repo in repositories?.items"
								:value="repo.clone_url"
							>
								{{repo.full_name}}
							</option>
						</select> <label class="block my-2">
							Select Branch ({{branches?.length || '0'}})
						</label> <select
							v-model="branch"
							class="mt-2 px-4 py-2 w-full"
						>
							<option
								v-for="repoBranch in branches"
								:value="repoBranch.name"
							>
								{{repoBranch.name}}
							</option>
						</select>
					</div> <label class="block my-2">
						Repository
					</label> <input
						v-model="repository"
						placeholder="Repository url"
						class="mt-2 px-4 py-2 w-full"
					/> <label class="block my-2">
						Branch
					</label> <input
						v-model="branch"
						placeholder="Branch"
						class="mt-2 px-4 py-2 w-full"
					/> <button
						class="rounded p-2 bg-slate-200 mt-2"
						@click="adjustVolumes = !adjustVolumes"
					>
						Move volumes to app folder: {{ adjustVolumes ? 'Yes' : 'No' }}
					</button>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<label class="block my-2">
						One click installation browsing images from docker hub
					</label>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<label class="block my-2">Docker Compose</label><button
						class="rounded p-2 bg-slate-200 my-4"
						@click="inherit = !inherit"
					>
						Inherit original docker-compose file: {{ inherit ? 'Yes' : 'No' }}
					</button> <textarea
						class="w-full p-4"
						v-model="dockerComposeFile"
						rows="10"
						placeholder="docker-compose.override.yml"
					/>
				</div>
				<div class="text-right">
					<button
						v-if="!$route.params.id"
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						:disabled="!slug"
						@click="deploy()"
					>
						Launch
					</button><button
						v-if="$route.params.id"
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="update()"
					>
						Update
					</button><button
						v-if="!webhook && $route.params.id && repository"
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="attach()"
					>
						Attach webhook
					</button><button
						v-if="webhook && $route.params.id && repository"
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="detach()"
					>
						Detach webhook
					</button><button
						v-if="!running && $route.params.id"
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="start()"
					>
						Start
					</button> <button
						v-if="running && $route.params.id"
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						@click="stop()"
					>
						Stop
					</button> <button
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						v-if="$route.params.id"
						@click="build()"
					>
						Build
					</button> <button
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						v-if="$route.params.id"
						@click="destroy()"
					>
						Destroy
					</button> <button
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						v-if="$route.params.id"
						@click="compose()"
					>
						Compose
					</button> <button
						class="py-4 p-2 mt-4 w-full rounded bg-slate-200"
						v-if="$route.params.id"
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
			dockerComposeFile: ``,
			files: [],
			name: '',
			slug: '',
			repository: '',
			branch: '',
			branches: [],
			adjustVolumes: true,
			inherit: true,
			running: false,
			webhook: false,
			searchRepos: false,
			oauthProviders: [],
			consentUrl: '',
			search: '',
			user: null,
			query: '',
			organisations: [],
			repositories: null
		}),
		watch: {
			async searchRepos(open) {
				if (open) {
					await this.getOAuthProviders();
					await this.getUser();
					await this.getOrganisations();
					if (!this.query && this.orgs.length) {
						this.query = this.orgs[0].query;
						await this.getRepositories();
					}
				}
			},
			async query() {
				await this.getRepositories();
			},
			async repository(value) {
				const repo = this.repositories?.items.find(repo => repo.clone_url === value);
				if (repo) {
					this.branch = repo.default_branch;
					await this.getBranches(repo);
				}
			}
		},
		computed: {
			id() {
				return this.$route.params.id || this.slug;
			},
			oauthProvidersFiltered() {
				const supported = ['github'];
				return this.oauthProviders.filter(provider => supported.includes(provider.provider));
			},
			orgs() {
				return [{
					title: this.user?.login,
					query: `user:${this.user?.login}`
				}, ...this.organisations.map(org => {
					return {
						title: org?.organization?.login,
						query: `org:${org?.organization?.login}`
					};
				})];
			}
		},
		async created() {
			await this.getOAuthProviders();
			if (this.id) {
				await this.getItem();
			}
		},
		methods: {
			async getUser() {
				const provider = this.oauthProvidersFiltered.find(provider => provider.provider === 'github');
				if (provider) {
					let response = await fetch('https://api.github.com/user', {
						headers: {
							Accept: 'application/vnd.github+json',
							Authorization: `Bearer ${provider.token}`
						}
					});
					this.user = await response.json();
					console.log('user', this.user);
				}
			},
			async getOrganisations() {
				const provider = this.oauthProvidersFiltered.find(provider => provider.provider === 'github');
				if (provider) {
					let response = await fetch('https://api.github.com/user/memberships/orgs' + '?per_page=150', {
						headers: {
							Accept: 'application/vnd.github+json',
							Authorization: `Bearer ${provider.token}`
						}
					});
					this.organisations = await response.json();
					console.log('orgs', this.organisations);
				}
			},
			async getRepositories() {
				const provider = this.oauthProvidersFiltered.find(provider => provider.provider === 'github');
				if (provider) {
					let search = 'q=' + encodeURIComponent(this.search + (' ' + this.query || ' user:' + this.user.login));
					let response = await fetch(`https://api.github.com/search/repositories?${search}&per_page=150`, {
						headers: {
							Accept: 'application/vnd.github+json',
							Authorization: `Bearer ${provider.token}`
						}
					});
					this.repositories = await response.json();
					console.log('repos', this.repositories);
				}
			},
			async getBranches(repo) {
				const provider = this.oauthProvidersFiltered.find(provider => provider.provider === 'github');
				if (provider) {
					let response = await fetch(repo.branches_url.replace('{/branch}', '') + '?per_page=150', {
						headers: {
							Accept: 'application/vnd.github+json',
							Authorization: `Bearer ${provider.token}`
						}
					});
					this.branches = await response.json();
					console.log('branches', this.branches);
				}
			},
			consent(url) {
				if (!url) return;
				window.open(url, '_blank');
			},
			async getOAuthProviders() {
				const result = await this.io.service('oauth_providers')
					.find({
						query: {}
					});
				this.oauthProviders = result?.data;
			},
			async getItem() {
				const item = await this.io.service('apps')
					.get(this.id);
				this.name = item.name;
				this.slug = item.id;
				this.repository = item.repository;
				this.branch = item.branch;
				this.adjustVolumes = item.adjustVolumes;
				this.inherit = item.inherit;
				this.running = item.running;
				this.dockerComposeFile = item.dockerComposeFile;
				this.webhook = item.webhook;
				console.log(item);
			},
			async remove() {
				const res = await this.io.service('apps')
					.remove(this.id);
				console.log('res', res);
			},
			async attach() {
				const res = await this.io.service('apps')
					.patch(this.id, {
						attach: true
					});
				console.log('res', res);
			},
			async detach() {
				const res = await this.io.service('apps')
					.patch(this.id, {
						detach: true
					});
				console.log('res', res);
			},
			async status() {
				const res = await this.io.service('apps')
					.patch(this.id, {
						status: true
					});
				console.log('res', res);
			},
			async start() {
				const res = await this.io.service('apps')
					.patch(this.id, {
						start: true
					});
				console.log('res', res);
			},
			async stop() {
				const res = await this.io.service('apps')
					.patch(this.id, {
						stop: true
					});
				console.log('res', res);
			},
			async build() {
				const res = await this.io.service('apps')
					.patch(this.id, {
						build: true
					});
				console.log('res', res);
			},
			async destroy() {
				const res = await this.io.service('apps')
					.patch(this.id, {
						destroy: true
					});
				console.log('res', res);
			},
			async compose() {
				const res = await this.io.service('apps')
					.patch(this.id, {
						compose: this.dockerComposeFile
					});
				console.log('res', res);
			},
			async deploy() {
				try {
					console.log('files', this.files);
					const res = await this.io.service('apps')
						.create({
							name: this.name,
							slug: this.id,
							buffer: this.files?.length ? await this.packTar() : null,
							repository: this.repository,
							branch: this.branch,
							dockerComposeFile: this.dockerComposeFile,
							adjustVolumes: this.adjustVolumes,
							inherit: this.inherit
						});
					console.log('res', res);
				} catch (e) {
					console.log('error', e);
				}
			},
			async update() {
				try {
					const res = await this.io.service('apps')
						.update(this.id, {
							buffer: this.files?.length ? await this.packTar() : null,
							repository: this.repository,
							dockerComposeFile: this.dockerComposeFile,
							inherit: this.inherit,
							adjustVolumes: this.adjustVolumes,
							branch: this.branch,
							name: this.name
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
			async resolveDockerCompose() {
				const file = this.files.find(f => f.name.endsWith('docker-compose.yml'));
				if (file) {
					const content = new TextDecoder()
						.decode(file.buffer);
					this.dockerComposeFile = content;
				}
			},
			async uploadZip() {
				this.files = [];
				this.dockerComposeFile = '';
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
				this.dockerComposeFile = '';
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
				this.dockerComposeFile = '';
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
				this.dockerComposeFile = '';
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
<style scoped>
	[disabled] {
		opacity: .5;
	}

</style>
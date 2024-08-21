<template>
	<TemplateDefault :renderer="renderer">
		<SectionHero>
			<div class="w-full">
				<h1 class="font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center uppercase">
					{{ id || 'Deploy Docker App'}}
				</h1>
				<h2
					v-if="loading"
					class="font-thin block xl:pl-6 w-full text-center uppercase"
				>
					Loading - {{ loading }} ...
				</h2>
			</div>
		</SectionHero>
		<WrapperPage class="p-6">
			<div class="mt-8 mb-20 relative overflow-auto w-full">
				<div>
					<button
						class="py-4 p-2 w-full rounded bg-slate-200"
						@click="getItem()"
					>
						Reload
					</button>
				</div>
				<div
					class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"
					v-if="log"
				>

					<label class="block my-2">
						Last updated {{ new Date(log?.[0]?.commit?.author?.timestamp * 1000).toLocaleString() }} by {{ log?.[0]?.commit?.author?.name }}
					</label>
				</div>
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
					</button><button
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
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">
					<label class="my-2 block">
						Related Services
					</label><button
						class="rounded p-2 bg-slate-200 my-4"
						@click="getServices()"
					>
						Reload
					</button>
					<div
						class="bg-slate-50 p-4 overflow-auto shadow-sm mb-2 text-slate-700"
						v-for="service in services"
					>
						<label class="block my-2">
							<b>Service name:</b> {{ service.name }}<br>
							<b>Service ID:</b> {{ service.docker_service_id }}<br>
							<b>Image:</b> {{ service.docker_image }}
						</label>
						<div class="bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700">
							<table class="w-full">
								<caption class="text-left mb-3">
									Environment Variables
								</caption>
								<thead>
									<tr>
										<th class="text-left">
											Key
										</th>
										<th class="text-left">
											Value
										</th>
										<th class="text-left">
											Actions
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="env in service.environments">
										<td class="pr-4">
											<input
												v-model="env.key"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4"><input
												v-model="env.value"
												class="w-full p-2 rounded"
											/> </td>
										<td><button
												class="mr-2 rounded p-2 bg-slate-200 my-4"
												@click="inherit = !inherit"
											>
												Save
											</button><button
												class="rounded p-2 bg-slate-200 my-4"
												@click="inherit = !inherit"
											>
												Delete
											</button> </td>
									</tr>
								</tbody>
							</table><button
								class="mr-2 rounded p-2 bg-slate-200 my-4"
								@click="inherit = !inherit"
							>
								New
							</button>
						</div>
						<div class="bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700">
							<table class="w-full">
								<caption class="text-left mb-3">
									Networks
								</caption>
								<thead>
									<tr>
										<th class="text-left">
											Address
										</th>
										<th class="text-left">
											Network ID
										</th>
										<th class="text-left">
											Actions
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="network in service.networks">
										<td class="pr-4">
											<input
												v-model="network.address"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4"><input
												v-model="network.docker_network_id"
												class="w-full p-2 rounded"
											/> </td>
										<td><button
												class="mr-2 rounded p-2 bg-slate-200 my-4"
												@click="inherit = !inherit"
											>
												Save
											</button><button
												class="rounded p-2 bg-slate-200 my-4"
												@click="inherit = !inherit"
											>
												Delete
											</button> </td>
									</tr>
								</tbody>
							</table><button
								class="mr-2 rounded p-2 bg-slate-200 my-4"
								@click="inherit = !inherit"
							>
								New
							</button>
						</div>
						<div class="bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700">
							<table class="w-full">
								<caption class="text-left mb-3">
									Ports
								</caption>
								<thead>
									<tr>
										<th class="text-left">
											External
										</th>
										<th class="text-left">
											Internal
										</th>
										<th class="text-left">
											Actions
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="port in service.ports">
										<td class="pr-4">
											<input
												v-model="port.port_external"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4"><input
												v-model="port.port_internal"
												class="w-full p-2 rounded"
											/> </td>
										<td><button
												class="mr-2 rounded p-2 bg-slate-200 my-4"
												@click="inherit = !inherit"
											>
												Open
											</button><button
												class="mr-2 rounded p-2 bg-slate-200 my-4"
												@click="inherit = !inherit"
											>
												Close
											</button><button
												class="mr-2 rounded p-2 bg-slate-200 my-4"
												@click="inherit = !inherit"
											>
												Save
											</button><button
												class="rounded p-2 bg-slate-200 my-4"
												@click="inherit = !inherit"
											>
												Delete
											</button> </td>
									</tr>
								</tbody>
							</table><button
								class="mr-2 rounded p-2 bg-slate-200 my-4"
								@click="inherit = !inherit"
							>
								New
							</button>
						</div>
						<div class="bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700">
							<table class="w-full">
								<caption class="text-left mb-3">
									Volumes
								</caption>
								<thead>
									<tr>
										<th class="text-left">
											Name
										</th>
										<th class="text-left">
											Path
										</th>
										<th class="text-left">
											Type
										</th>
										<th class="text-left">
											Actions
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="volume in service.volumes">
										<td class="pr-4">
											<input
												v-model="volume.name"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="volume.path"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="volume.type"
												class="w-full p-2 rounded"
											/>
										</td>
										<td>
											<button
												class="mr-2 rounded p-2 bg-slate-200 my-4"
												@click="inherit = !inherit"
											>
												Save
											</button><button
												class="rounded p-2 bg-slate-200 my-4"
												@click="inherit = !inherit"
											>
												Delete
											</button>
										</td>
									</tr>
								</tbody>
							</table><button
								class="mr-2 rounded p-2 bg-slate-200 my-4"
								@click="inherit = !inherit"
							>
								New
							</button>
						</div>
						<div class="bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700">
							<caption class="text-left mb-3">
								Tasks
							</caption>
							<table class="w-full">
								<thead>
									<tr>
										<th class="text-left">
											Timestamp
										</th>
										<th class="text-left">
											State
										</th>
										<th
											class="text-left"
											style="height:26px"
										>
											Message
										</th>
										<th
											class="text-left"
											style="height:26px"
										>
											Desired state
										</th>
										<th
											class="text-left"
											style="height:26px"
										>
											Slot
										</th>
										<th
											class="text-left"
											style="height:26px"
										>
											Node ID
										</th>
										<th
											class="text-left"
											style="height:26px"
										>
											Task ID
										</th>
										<th class="text-left">
											Actions
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="task in service.tasks">
										<td class="pr-4">
											<input
												v-model="task.timestamp"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="task.state"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="task.message"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="task.desired_state"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="task.slot"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="task.docker_task_id"
												class="w-full p-2 rounded"
											/>
										</td>
										<td style="width:130px">
											<button
												class="mr-2 rounded p-2 bg-slate-200 my-4"
												@click="inherit = !inherit"
											>
												Save
											</button><button
												class="rounded p-2 bg-slate-200 my-4"
												@click="inherit = !inherit"
											>
												Delete
											</button>
										</td>
									</tr>
								</tbody>
							</table><button
								class="mr-2 rounded p-2 bg-slate-200 my-4"
								@click="inherit = !inherit"
							>
								New
							</button>
						</div>
						<div class="bg-slate-100 p-4 overflow-auto shadow-sm mb-2 text-slate-700">
							<caption class="text-left mb-3">
								Containers
							</caption>
							<table class="w-full">
								<thead>
									<tr>
										<th class="text-left">
											Name
										</th>
										<th class="text-left">
											Command
										</th>
										<th
											class="text-left"
											style="height:26px"
										>
											State
										</th>
										<th
											class="text-left"
											style="height:26px"
										>
											Status
										</th>
										<th
											class="text-left"
											style="height:26px"
										>
											Image
										</th>
										<th
											class="text-left"
											style="height:26px"
										>
											Task ID
										</th>
										<th class="text-left">
											Node ID
										</th>
										<th class="text-left">
											Container ID
										</th>
										<th class="text-left">
											Actions
										</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="container in service.containers">
										<td class="pr-4">
											<input
												v-model="container.name"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="container.command"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="container.state"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="container.status"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="container.docker_image_name"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="container.docker_task_id"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="container.docker_node_id"
												class="w-full p-2 rounded"
											/>
										</td>
										<td class="pr-4">
											<input
												v-model="container.docker_container_id"
												class="w-full p-2 rounded"
											/>
										</td>
										<td style="width:130px">
											<button
												class="mr-2 rounded p-2 bg-slate-200 my-4"
												@click="inherit = !inherit"
											>
												Save
											</button><button
												class="rounded p-2 bg-slate-200 my-4"
												@click="inherit = !inherit"
											>
												Delete
											</button>
										</td>
									</tr>
								</tbody>
							</table><button
								class="mr-2 rounded p-2 bg-slate-200 my-4"
								@click="inherit = !inherit"
							>
								New
							</button>
						</div>
					</div>
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
			repositories: null,
			log: null,
			loading: '',
			services: []
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
					await this.getDockerCompose(repo);
				}
			},
			async branch(value) {
				const repo = this.repositories?.items.find(repo => repo.clone_url === this.repository);
				if (repo) {
					await this.getDockerCompose(repo);
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
			async getServices() {
				console.log('Syncing docker with database...')
				await this.io.service('docker_nodes')
					.get('sync');
				console.log('Fetching services...')
				const services = (await this.io.service('docker_services')
						.find({
							query: {
								stackname: this.slug,
								$limit: 1000
							}
						}))
					.data;
				console.log('Fetching service resources...', service)
				for (const service of services) {
					console.log('Resolve', service.name);
					console.log('Fetching environments');
					service.environments = (await this.io.service('docker_services_environments')
							.find({
								query: {
									docker_service_id: service.docker_service_id,
									$limit: 1000
								}
							}))
						.data;
					console.log('Fetching networks');
					service.networks = (await this.io.service('docker_services_networks')
							.find({
								query: {
									docker_service_id: service.docker_service_id,
									$limit: 1000
								}
							}))
						.data;
					console.log('Fetching ports');
					service.ports = (await this.io.service('docker_services_ports')
							.find({
								query: {
									docker_service_id: service.docker_service_id,
									$limit: 1000
								}
							}))
						.data;
					console.log('Fetching volumes');
					service.volumes = (await this.io.service('docker_services_volumes')
							.find({
								query: {
									docker_service_id: service.docker_service_id,
									$limit: 1000
								}
							}))
						.data;
					console.log('Fetching tasks');
					service.tasks = (await this.io.service('docker_tasks')
							.find({
								query: {
									docker_service_id: service.docker_service_id,
									$limit: 1000
								}
							}))
						.data;
					console.log('Fetching containers');
					service.containers = (await this.io.service('docker_containers')
							.find({
								query: {
									docker_service_id: service.docker_service_id,
									$limit: 1000
								}
							}))
						.data;
					console.log('Done', service.name);
				}
				console.log('Completed', services);
				this.services = services;
			},
			async getDockerCompose(repo) {
				this.loading = 'docker compose file';
				const provider = this.oauthProvidersFiltered.find(provider => provider.provider === 'github');
				if (provider) {
					try {
						let response = await fetch(repo.contents_url.replace('{+path}', 'docker-compose.yml') + `?ref=${this.branch}`, {
							headers: {
								Accept: 'application/vnd.github+json',
								Authorization: `Bearer ${provider.token}`
							}
						});
						const json = await response.json();
						if (json.download_url) {
							this.dockerComposeFile = await (await fetch(json.download_url))
								.text();
						}
					} catch (e) {
						console.error('Could not fetch docker-compose.yml', error);
					}
				}
				this.loading = '';
			},
			async getUser() {
				this.loading = 'user';
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
				this.loading = '';
			},
			async getOrganisations() {
				this.loading = 'organisations';
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
				this.loading = '';
			},
			async getRepositories() {
				this.loading = 'repositories';
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
				this.loading = '';
			},
			async getBranches(repo) {
				this.loading = 'branches';
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
				this.loading = '';
			},
			consent(url) {
				if (!url) return;
				window.open(url, '_blank');
			},
			async getOAuthProviders() {
				this.loading = 'providers';
				const result = await this.io.service('oauth_providers')
					.find({
						query: {}
					});
				this.oauthProviders = result?.data;
				this.loading = '';
			},
			async getItem() {
				this.loading = 'app';
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
				this.log = item.log;
				console.log(item);
				this.loading = '';
			},
			async remove() {
				this.loading = 'remove app';
				try {
					const res = await this.io.service('apps')
						.remove(this.id);
					console.log('res', res);
					this.$router.push('/apps');
				} catch (e) {
					console.log('err', e);
				}
				this.loading = '';
			},
			async attach() {
				this.loading = 'attach webhook';
				try {
					const res = await this.io.service('apps')
						.patch(this.id, {
							attach: true
						});
					console.log('res', res);
				} catch (e) {
					console.log('err', e);
				}
				await this.getItem();
				this.loading = '';
			},
			async detach() {
				this.loading = 'detach webhook';
				try {
					const res = await this.io.service('apps')
						.patch(this.id, {
							detach: true
						});
					console.log('res', res);
				} catch (e) {
					console.log('err', e);
				}
				await this.getItem();
				this.loading = '';
			},
			async start() {
				this.loading = 'start app';
				try {
					const res = await this.io.service('apps')
						.patch(this.id, {
							start: true
						});
					console.log('res', res);
				} catch (e) {
					console.log('err', e);
				}
				await this.getItem();
				this.loading = '';
			},
			async stop() {
				this.loading = 'stop app';
				try {
					const res = await this.io.service('apps')
						.patch(this.id, {
							stop: true
						});
					console.log('res', res);
				} catch (e) {
					console.log('err', e);
				}
				await this.getItem();
				this.loading = '';
			},
			async build() {
				this.loading = 'build app';
				try {
					const res = await this.io.service('apps')
						.patch(this.id, {
							build: true
						});
					console.log('res', res);
				} catch (e) {
					console.log('err', e);
				}
				await this.getItem();
				this.loading = '';
			},
			async destroy() {
				this.loading = 'destroy app';
				try {
					const res = await this.io.service('apps')
						.patch(this.id, {
							destroy: true
						});
					console.log('res', res);
				} catch (e) {
					console.log('err', e);
				}
				await this.getItem();
				this.loading = '';
			},
			async compose() {
				this.loading = 'compose app';
				const res = await this.io.service('apps')
					.patch(this.id, {
						compose: this.dockerComposeFile
					});
				console.log('res', res);
				await this.getItem();
				this.loading = '';
			},
			async deploy() {
				this.loading = 'deploy app';
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
				await this.getItem();
				this.loading = '';
			},
			async update() {
				this.loading = 'update app';
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
				await this.getItem();
				this.loading = '';
			},
			async resolveDockerCompose() {
				this.loading = 'docker compose file';
				const file = this.files.find(f => f.name.endsWith('docker-compose.yml'));
				if (file) {
					const content = new TextDecoder()
						.decode(file.buffer);
					this.dockerComposeFile = content;
				}
				this.loading = '';
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
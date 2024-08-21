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
			<div class="mb-20 relative overflow-auto w-full">
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700">

					<input
						v-model="name"
						placeholder="Name"
						class="text-2xl px-4 py-2 block w-full mb-4"
					/><input
						v-if="!log"
						v-model="slug"
						placeholder="Slug"
						class="px-4 py-2 block w-full"
					/> <input
						v-if="log"
						v-model="id"
						placeholder="Slug"
						readonly=""
						class="px-4 py-2 block w-full"
					/>
				</div>
				<div
					class="flex p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"
					v-if="log"
				>
					<div class="w-1/2">
						<label class="block my-2">
							Last updated {{ new Date(log?.[0]?.commit?.author?.timestamp * 1000).toLocaleString() }} by {{ log?.[0]?.commit?.author?.name }}
						</label>
					</div>
					<div class="text-right w-1/2">
						<button
							class="p-2 mr-4 rounded bg-slate-200"
							@click="update()"
							title="Update"
						><svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-6 h-6"
							>
								<path
									fill-rule="evenodd"
									d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
									clip-rule="evenodd"
								/>
							</svg> </button><button
							class="p-2 rounded bg-slate-200"
							@click="getItem()"
							title="Reload"
						><svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-6 h-6"
							>
								<path
									fill-rule="evenodd"
									d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
									clip-rule="evenodd"
								/>
							</svg> </button>
					</div>
				</div>
				<div
					class="flex p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"
					v-if="log"
				>
					<button
						v-if="!running"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="start()"
						title="Start"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						v-if="running"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="stop()"
						title="Stop"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
								clip-rule="evenodd"
							/>
						</svg> </button> <button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="compose()"
						title="Compose"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="build()"
						title="Build"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
								clip-rule="evenodd"
							/>
							<path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
							<path
								fill-rule="evenodd"
								d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="destroy()"
						title="Destruct"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						v-if="!webhook && repository"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="attach()"
						title="Attach Webhook"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						v-if="webhook && repository"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="detach()"
						title="Detach Webhook"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="remove()"
						title="Remove"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
								clip-rule="evenodd"
							/>
						</svg> </button>
				</div>
				<div class="p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"><label class="block my-2 text-center">
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
					<label class="block mt-2 mb-4 font-medium text-lg">
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
					<label class="block my-2 font-medium text-lg">Docker Compose</label><button
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
					<div
						class="flex mt-2 mb-6"
						v-if="log"
					>
						<div class="w-1/2">
							<label class="font-medium text-lg">
								Related Services
							</label>
						</div>
						<div class="text-right w-1/2">
							<button
								class="rounded p-2 bg-slate-200"
								@click="getServices()"
								title="Reload"
							><svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="w-6 h-6"
								>
									<path
										fill-rule="evenodd"
										d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div class="flex overflow-auto shadow-sm bg-slate-100 text-slate-700">
						<button
							class="p-2 mr-1 rounded bg-slate-200"
							@click="serviceOpen = (serviceOpen?.docker_service_id === service.docker_service_id ? null : service)"
							v-for="service in services"
						>
							{{service.name.replace(slug + '_', '')}}
						</button>
					</div>
					<div
						class="bg-slate-50 p-4 overflow-auto shadow-sm mb-2 text-slate-700"
						v-for="service in (serviceOpen ? [serviceOpen] : [])"
					>
						<label class="block my-2">
							<b class="block mt-1">
								Service name
							</b>
							{{ service.name }} <b class="block mt-1">
								Service ID
							</b>
							{{ service.docker_service_id }} <b class="block mt-1">
								Image
							</b>
							{{ service.docker_image }}
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
											class="whitespace-nowrap text-left"
											style="height:26px"
										>
											Desired State
										</th>
										<th
											class="text-left"
											style="height:26px"
										>
											Slot
										</th>
										<th
											class="whitespace-nowrap text-left"
											style="height:26px"
										>
											Node ID
										</th>
										<th
											class="whitespace-nowrap text-left"
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
												v-model="task.docker_node_id"
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
											class="whitespace-nowrap text-left"
											style="height:26px"
										>
											Task ID
										</th>
										<th class="whitespace-nowrap text-left">
											Node ID
										</th>
										<th class="whitespace-nowrap text-left">
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
				<div
					class="text-right"
					v-if="!log"
				>
					<button
						class="py-4 w-full rounded bg-slate-200"
						:disabled="!slug"
						@click="deploy()"
					>
						Launch
					</button>
				</div>
				<div
					class="flex p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"
					v-if="log"
				>
					<button
						v-if="!running"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="start()"
						title="Start"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						v-if="running"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="stop()"
						title="Stop"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
								clip-rule="evenodd"
							/>
						</svg> </button> <button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="compose()"
						title="Compose"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="build()"
						title="Build"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
								clip-rule="evenodd"
							/>
							<path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
							<path
								fill-rule="evenodd"
								d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="destroy()"
						title="Destruct"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						v-if="!webhook && repository"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="attach()"
						title="Attach Webhook"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						v-if="webhook && repository"
						class="p-2 mr-4 rounded bg-slate-200"
						@click="detach()"
						title="Detach Webhook"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="remove()"
						title="Remove"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						class="p-2 mr-4 rounded bg-slate-200"
						@click="update()"
						title="Update"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
								clip-rule="evenodd"
							/>
						</svg> </button><button
						class="p-2 rounded bg-slate-200"
						@click="getItem()"
						title="Reload"
					><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
								clip-rule="evenodd"
							/>
						</svg> </button>
				</div>
				<h2
					v-if="loading"
					class="font-thin block xl:pl-6 w-full text-center uppercase flex p-4 overflow-auto shadow-sm my-8 bg-slate-100 text-slate-700"
				>
					Loading - {{ loading }} ...
				</h2>
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
			serviceOpen: null,
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
				return this.$route.params.id || this.slug || 'ignite-users';
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
				console.log('Syncing docker with database...');
				await this.io.service('docker_nodes')
					.get('sync');
				console.log('Fetching services...');
				const services = (await this.io.service('docker_services')
						.find({
							query: {
								stackname: this.slug,
								$limit: 1000
							}
						}))
					.data;
				console.log('Fetching service resources...', services);
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
				await this.getServices();
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
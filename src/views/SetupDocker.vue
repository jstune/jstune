<template>
	<TemplateSetup>
		<div v-if="platform === 'linux'">
			<h2 class="mb-2">
				Setup Docker Automagically
			</h2><button
				@click="autoSetup"
				class="hover:bg-fuchsia-950 mb-4 rounded-lg bg-fuchsia-900 w-full p-3"
				title="Install and/or start docker on your machine"
			>
				Auto install
			</button><input
				v-model="sudo"
				class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
				placeholder="Sudo user password:"
			/>
		</div>
		<h2 class="mb-2">
			Setup Docker Manually
		</h2><input
			v-model="config.host"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Host: 127.0.0.1"
		/><input
			v-model="config.port"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Port: 2375"
		/><input
			v-model="config.username"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Username:"
		/><input
			v-model="config.password"
			class="font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Password:"
		/><button
			@click="setup"
			class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3"
			title="Install using already running docker instance"
		>
			Install manually
		</button>
	</TemplateSetup>
</template>
<script>
	import TemplateSetup from '@/components/TemplateSetup.vue';
	export default {
		inject: ['io'],
		components: {
			TemplateSetup: TemplateSetup
		},
		data: () => ({
			config: {
				host: '',
				port: '',
				username: '',
				password: ''
			},
			platform: '',
			sudo: ''
		}),
		async created() {
			const result = await this.io.service('setup')
				.get('docker');
			this.config = result.config;
			this.platform = result.platform;
			console.log('result', result);
		},
		methods: {
			async autoSetup() {
				let result = await this.io.service('setup')
					.patch('docker', {
						sudo: this.sudo
					});
				this.resolve(result);
			},
			async setup() {
				let result = await this.io.service('setup')
					.patch('docker', this.config);
				this.resolve(result);
			},
			resolve(result) {
				console.log('result', result);
			}
		}
	};

</script>
<style scoped></style>
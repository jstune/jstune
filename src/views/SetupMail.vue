<template>
	<TemplateSetup>
		<h2 class="mb-2">
			Setup sender email
		</h2> <input
			v-model="config.email"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Email:"
		/><a
			class="hover:no-underline hover:text-sky-100 underline inline-block mb-2"
			style="height:24px"
			target="_blank"
			href="https://security.google.com/settings/security/apppasswords"
			v-if="config.email.includes('@gmail')"
		>
			Get Your Gmail App Password
		</a><input
			v-model="config.password"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Password:"
			type="password"
		/><input
			v-model="config.host"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Host: smtp.gmail.com"
		/> <input
			v-model="config.port"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md w-full"
			placeholder="Port: 587"
		/> <label class="block">Secure</label> <input
			type="checkbox"
			v-model="config.secure"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md"
		/> <label class="block">Pool</label> <input
			type="checkbox"
			v-model="config.pool"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md"
		/> <label class="block">Reject unauthorized</label> <input
			type="checkbox"
			v-model="config.rejectUnauthorized"
			class="mb-3 font-extralight text-slate-800 py-2.5 px-2 rounded-md"
		/><button
			@click="setup()"
			:disabled="loading"
			class="hover:bg-fuchsia-950 mt-4 rounded-lg bg-fuchsia-900 w-full p-3"
			title="Install using already running database instance"
		>
			Submit
		</button>
		<h2 class="mt-2">
			Loading: {{loading}}
		</h2>
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
				email: '',
				password: '',
				host: 'smtp.gmail.com',
				port: 587,
				secure: false,
				pool: false,
				rejectUnauthorized: true
			},
			loading: false
		}),
		async created() {
			await this.connect();
		},
		methods: {
			async connect() {
				this.loading = true;
				const result = await this.io.service('setup')
					.get('mail');
				this.resolve(result);
			},
			async setup() {
				this.loading = true;
				let result = await this.io.service('setup')
					.install('mail', {
						...this.config
					});
				this.resolve(result);
			},
			async resolve(result) {
				if (result && !result.ready) {} else {
					this.$router.push('/login');
				}
				this.loading = false;
			}
		}
	};

</script>
<style scoped></style>
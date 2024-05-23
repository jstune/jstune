<template>
	<TemplateDefault :renderer="renderer">
		<SectionHero>
			<h1 class="font-thin text-xl lg:text-3xl xl:pl-6 w-full text-center">
				Terminal
			</h1>
		</SectionHero>
		<WrapperPage class="flex-col">

			<div class="flex-col max-w-md place-self-center mt-8 mb-24 w-full flex md:max-w-4xl">
				<h1 class="px-4 mb-2 mt-6 font-medium text-3xl w-full">
					Execute scripts on leader node
				</h1>
				<h1 class="px-4 mb-4 mt-2 font-medium text-xl w-full">
					Leader node address: {{ address }}
				</h1>
				<div class="mt-6 relative mb-16 flex-col md:flex-row flex w-full">
					<div class="h-64 w-full p-4 rounded bg-slate-50">
					</div>
					<div class="-mb-6 bg-slate-100 -bottom-5 absolute h-0.5 left-2 right-2">
					</div>
				</div><input class="p-4 my-4 bg-slate-50 rounded" /><button
					class="p-4 rounded bg-slate-200"
					@click="update()"
				>
					Go
				</button>
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
		inject: ['io'],
		props: ['renderer'],
		data: () => ({
			address: ''
		}),
		async created() {
			try {
				await this.inspectLeader();
			} catch (e) {}
		},
		methods: {
			async inspectLeader() {
				const state = await this.io.service('state')
					.get();
				if (state.leaderIP) {
					this.address = state.leaderIP;
				} else {
					const leaders = await this.io.service('docker_nodes')
						.find({
							query: {
								leader: true
							}
						});
					const leader = leaders?.data?.[0];
					if (leader) {
						this.address = leader.address;
					}
				}
			},
			async update() {
				if (!confirm(`Are you sure you want to update jstune?`)) {
					return false;
				}
				await this.io.service('exec')
					.patch('update');
				alert('jstune will automtically be restarted after update is completed');
			},
			async updateNPM() {
				if (!confirm(`Are you sure you want to update packages?`)) {
					return false;
				}
				await this.io.service('exec')
					.patch('update-npm');
				alert('jstune will automtically be restarted after update is completed');
			},
			async updateUI() {
				if (!confirm(`Are you sure you want to update admin ui?`)) {
					return false;
				}
				await this.io.service('exec')
					.patch('update-ui');
				location.reload();
			},
			async reboot() {
				if (!confirm(`Are you sure you want to reboot?`)) {
					return false;
				}
				await this.io.service('exec')
					.patch('reboot');
				setTimeout(() => {
					location.reload();
				}, 3000);
			}
		}
	};

</script>
<style scoped></style>
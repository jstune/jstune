<template>
	<TemplateHero title="Contact US">
		<WrapperPage>
			<div class="w-full md:flex-row flex-col my-16 py-4 flex">
				<div class="px-6 justify-center flex-col flex w-full md:w-1/2">
					<h1 class="mb-8 font-semibold text-4xl">
						Drop us an email, and we'll get back to you shortly
					</h1>
					<p class="tracking-wide max-w-md font-light text-2xl">
						This dummy form is non-functional; it serves solely to showcase the design of an attractive contact form using Vue Play.
					</p>
				</div>
				<div class="rounded-lg flex-col mx-4 p-6 flex grow md:w-1/2 bg-slate-100 mt-4 md:mt-0">
					<div class="mb-4">
						<label
							for=""
							class="text-slate-800 text-xl"
						>
							Full name
						</label><input class="px-4 rounded-lg shadow w-full h-12" />
					</div>
					<div class="mb-4">
						<label
							for=""
							class="text-slate-800 text-xl"
						>
							E-mail
						</label><input class="px-4 rounded-lg shadow w-full h-12" />
					</div>
					<div class="mb-4">
						<label
							for=""
							class="text-slate-800 text-xl"
						>
							Message
						</label><textarea
							rows=""
							cols=""
							class="p-4 rounded-lg shadow w-full h-32"
						>
</textarea>
					</div><button class="hover:bg-pink-700 py-3 px-4 rounded-md bg-pink-600 text-white">
						Submit
					</button>
				</div>
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
		data: () => ({})
	};

</script>
<style scoped></style>
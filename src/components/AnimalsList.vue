<template>
	<main>
		<div class="header">
			<div v-if="currentTab == 1">
				<h1>Dogs</h1>
			</div>
			<div v-else>
				<h1>Cats</h1>
			</div>
		</div>
		<div class="animal-contianer">
			<div class="animal-card" v-for="animal in animals" :key="animal.id">
				<router-link
					:to="{
						name: 'AnimalShow',
						params: { id: animal.id },
					}"
				>
					<div
						v-if="animal.primary_photo_cropped"
						class="img-container"
					>
						<img :src="animal.primary_photo_cropped.small" alt="" />
					</div>
					<div v-else class="img-container">
						<img src="../assets/dog-place-holder-3.jpeg" alt="" />
					</div>
					<div class="attribute-wrapper">
						<h3>{{ animal.name }}</h3>
						<div class="location-row">
							<i class="fas fa-map-pin"></i>
							<sub
								>{{ animal.contact.address.city }},
								{{ animal.contact.address.state }}
							</sub>
						</div>
					</div>
				</router-link>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: "AnimalsList",
	props: ["animals", "currentTab"],
	data() {
		return {};
	},
	methods: {},
	created() {},
	updated() {},
};
</script>

<style scoped>
.header {
	background-color: #eec5a4b5;
	height: 7vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

.animal-contianer {
	width: 100vw;
	height: 85vh;
	overflow: scroll;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}

.animal-card {
	border: 1px solid #202427;
	width: 150px;
	min-height: 125px;
	padding-bottom: 0.5rem;
	border-top-right-radius: 0.325rem;
	border-top-left-radius: 0.325rem;
	border-bottom-left-radius: 0.15rem;
	border-bottom-right-radius: 0.15rem;
	display: flex;
	flex-direction: column;
	margin: 1rem;
}

.img-container {
	height: 125px;
	overflow: hidden;
}
img {
	height: 100%;
	width: 150px;
	border-top-right-radius: 0.325rem;
	border-top-left-radius: 0.325rem;
}

.status {
	width: fit-content;
	padding: 2px;
	margin-bottom: -0.5rem;
	border-radius: 0.5rem;
	font-size: 14px;
	background-color: #98ebb3cb;
	color: #4f4f4f;
}

.attribute-wrapper {
	margin: 0 0.5rem;
	display: flex;
	flex-direction: column;
}

.location-row {
	display: flex;
}

.fas {
	padding-right: 0.75rem;
}

a {
	text-decoration: none;
	color: #4a4a4a;
}

a:visited {
	color: #4a4a4a;
}
</style>

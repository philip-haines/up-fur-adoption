<template>
	<div class="header">
		<h1>Shelters</h1>
	</div>
	<div class="animal-contianer">
		<div class="animal-card" v-for="shelter in shelters" :key="shelter.id">
			<div v-if="shelter.photos[0]" class="img-container">
				<img :src="shelter.photos[0].small" alt="" />
			</div>
			<div v-else>
				<img
					src="../assets/Shelter-placeholder.jpeg"
					alt=""
					class="alternate-photo"
				/>
			</div>
			<div class="attribute-wrapper">
				<h3>{{ shelter.name }}</h3>
				<div class="location-row">
					<i class="fas fa-map-pin"></i>
					<sub
						>{{ shelter.address.city }},
						{{ shelter.address.state }}
					</sub>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SheltersList",
	props: ["shelters"],
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
	height: 250px;
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

.alternate-photo {
	min-height: 100px;
}
img {
	height: 100%;
	width: 150px;
	border-top-right-radius: 0.325rem;
	border-top-left-radius: 0.325rem;
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

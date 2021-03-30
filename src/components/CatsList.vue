<template>
	<div class="header">
		<h1>Cats</h1>
	</div>
	<div class="animal-contianer">
		<div class="animal-card" v-for="cat in cats" :key="cat.id">
			<div class="img-container">
				<!-- <img :src="dog.primary_photo_cropped.small" alt="" /> -->
			</div>
			<div class="attribute-wrapper">
				<h3>{{ cat.name }}</h3>
				<div class="location-row">
					<i class="fas fa-map-pin"></i>
					<sub
						>{{ cat.contact.address.city }},
						{{ cat.contact.address.state }}
					</sub>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CatsList",
	props: ["cats"],
	methods: {},
	created() {},
	updated() {},
};
</script>

<style scoped>
.header {
	background-color: #eec5a4b5;
	height: 4.6rem;
	display: flex;
	align-items: center;
	justify-content: center;
}

.animal-contianer {
	width: 100vw;
	height: 76vh;
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
	color: #202427;
}

.fas {
	padding-right: 0.75rem;
}
</style>

<template>
	<div>
		<div v-if="animal.animal.primary_photo_cropped" class="image">
			<img :src="animal.animal.primary_photo_cropped.medium" alt="" />
		</div>
		<div v-else class="image">
			<img src="..//assets/dog-place-holder-3.jpeg" alt="" />
		</div>
		<div class="container">
			<div class="attributes">
				<div class="title-row">
					<div class="decorations-left">
						<div class="decoration3"></div>
						<div class="decoration2"></div>
						<div class="decoration1"></div>
					</div>
					<h2>{{ animal.animal.name }}</h2>
					<div class="decorations-right">
						<div class="decoration3"></div>
						<div class="decoration2"></div>
						<div class="decoration1"></div>
					</div>
				</div>
				<div class="location-row">
					<h3>
						{{ animal.animal.contact.address.city }},
						{{ animal.animal.contact.address.state }}
					</h3>
				</div>
				<div class="primary">
					<h3>{{ animal.animal.age }}</h3>
					<h3>{{ animal.animal.gender }}</h3>
					<div v-if="animal.animal.breeds.primary">
						<h3>{{ animal.animal.breeds.primary }}</h3>
					</div>
				</div>
				<div class="fun">
					<div class="decorations-left">
						<div class="decoration1"></div>
						<div class="decoration2"></div>
						<div class="decoration3"></div>
					</div>
					<div class="decorations-right">
						<div class="decoration1"></div>
						<div class="decoration2"></div>
						<div class="decoration3"></div>
					</div>
				</div>
				<div v-if="animal.animal.description" class="description">
					<p>{{ animal.animal.description }}</p>
				</div>
			</div>
			<a :href="animal.animal.url"
				><button class="btn">Learn More</button></a
			>
		</div>
	</div>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6ImIyYWQ0Y2E3NzE0MzhjNmVlYmNkNTM1ODE3MzM3ZWZjMjIyMjMwOTNjMTdhZTRhMGMyOGFmZmMyNDk0NWEwNDM5MjYzNDNjMDMxNTQzN2E1IiwiaWF0IjoxNjE3MjI5Njg3LCJuYmYiOjE2MTcyMjk2ODcsImV4cCI6MTYxNzIzMzI4Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.xs9b-FgkifdUusx5awrC3atscC1YedaF2DC9IjSU2esxM202cjiqJRVpokpuiFhKIz6R59R8rQQOxK4cH0wlA-EBSTKcEy7wjHWZ8vnvgHDkpws3n6rn475AXio9-uLPGJ--DU4f-lv4t30wnLN_i8QBnAcKpTE5KtWINeajzq0WInDiBHzbvWqr8Z78P2X0DplmSQD-NpiGEgN4eaVs7uaHIZIxYgz_ODjPnIHOLrtNhkf7aVxhxpDE8HLZhXuAteFv_MLiI_CTHq9JX7DZckce4eqGBakFVdZQuCikBurY1_t0xSIIfK2IfAu8ZS1yB8IOOMv650EDVkEv9S_mZA";
export default {
	data() {
		return {
			animal: {},
		};
	},
	props: {
		id: {
			required: true,
			type: String,
		},
	},

	methods: {
		getAnimal() {
			fetch(`https://api.petfinder.com/v2/animals/${this.id}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: bearer,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					this.animal = data;
					console.log(this.animal);
				});
		},
	},
	created() {
		this.getAnimal();
	},
};
</script>

<style scoped>
img {
	min-width: 100vw;
	max-width: 100vw;
}

.container {
	width: 96vw;
	margin: 0 auto;
	padding-left: 0.3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.image {
	max-height: 60vh;
	overflow: hidden;
}

.title-row {
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.location-row {
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.decorations-left,
.decorations-right {
	display: flex;
	flex-direction: column-reverse;
}

.decorations-right {
	align-items: flex-end;
}

.fun {
	display: flex;
	justify-content: space-around;
}

.decoration1 {
	width: 80px;
	height: 1px;
	margin: 0.2rem 0;
	background-color: #eec5a4;
}

.decoration2 {
	width: 60px;
	height: 1px;
	margin: 0.2rem 0;
	background-color: #eec5a4;
}

.decoration3 {
	width: 40px;
	height: 1px;
	margin: 0.2rem 0;
	background-color: #eec5a4;
}

h3 {
	margin: 1rem;
}

.primary {
	display: flex;
	justify-content: space-around;
	align-items: center;
}

a {
	position: fixed;
	bottom: 2rem;
	left: 2.5rem;
	right: 2.5rem;
}

.btn {
	width: 300px;
	height: 60px;
	border: none;
	background-color: #eec5a4b5;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
		rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>

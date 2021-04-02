<template>
	<div>
		<div class="header">
			<div class="header-container">
				<GoBack />
			</div>
		</div>
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
	</div>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6ImYzNWFlMTkwNjM5ZGRhNmQ4NjhhMGUxNjMxYmEzM2M5M2M3NjIyNzc3OTViMjI1MmYxN2E3ODI2ZDk3NmFmY2ZkYzJhY2JkNjBmYTdmOGZjIiwiaWF0IjoxNjE3Mzg4NjE3LCJuYmYiOjE2MTczODg2MTcsImV4cCI6MTYxNzM5MjIxNywic3ViIjoiIiwic2NvcGVzIjpbXX0.BiiGkfmTwOAewTChEYl4ayVkuItCxPZGC3vMGDn9Csz3tHFt5Vg7Rhb8rklX7QkIAFRo3-a5oIuvc-IwrKfUIxQpb_DQKtEn52b4QlkemrXzCnZBa5Ao7LtsO7gVvXKSuPTOMtBt7dWxMxDxvk5uZ9O0LBp6M8vMemH7Cih_Gl2K4hOb38K6PBf4U2iGnsEUqaHBeLUOTE0ceZGNP4u3JBpTN-TyJtK7PyTaAJXTTZbeIf4rR2XOuOhBU8OfDjVYZ7levg015_rVodq5Ph_oE-r8LKJ9Ml6DyZncxM0NWNfZUVhws9NQGic6YzoQEtXSYjEQOLvAMb2DcsJyaDT4UQ";
import GoBack from "@/components/GoBack.vue";
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
	components: {
		GoBack,
	},
};
</script>

<style scoped>
img {
	min-width: 100vw;
	max-width: 100vw;
}

.header {
	display: flex;
	align-items: center;
	width: 100vw;
	background-color: #eec5a4b5;
	height: 4vh;
}

.header-container {
	width: 85vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
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
	max-height: 65vh;
	overflow: hidden;
	margin-bottom: 3rem;
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

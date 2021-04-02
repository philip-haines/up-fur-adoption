<template>
	<div>
		<div v-if="currentTab == 1" class="dogs">
			<LoadingScreen v-if="loading === true" />
			<AnimalsList :animals="animals" :currentTab="currentTab" />
		</div>
		<div v-else-if="currentTab == 2">
			<LoadingScreen v-if="loading === true" />
			<AnimalsList :animals="animals" :currentTab="currentTab" />
		</div>
		<div v-else class="shelters">
			<!-- <LoadingScreen v-if="loading === true" /> -->
			<Shelters />
		</div>
		<div class="button-row">
			<button @click="selectTab(1)" class="btn">
				<i class="fas fa-dog fa-2x"></i>
				Dogs
			</button>
			<button @click="selectTab(2)" class="btn">
				<i class="fas fa-cat fa-2x"></i>
				Cats
			</button>
			<button @click="selectTab(3)" class="btn">
				<i class="fas fa-store-alt fa-2x"></i> Shelters
			</button>
		</div>
	</div>
</template>

<script>
import AnimalsList from "@/components/AnimalsList.vue";
import Shelters from "./Shelters.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6ImYzNWFlMTkwNjM5ZGRhNmQ4NjhhMGUxNjMxYmEzM2M5M2M3NjIyNzc3OTViMjI1MmYxN2E3ODI2ZDk3NmFmY2ZkYzJhY2JkNjBmYTdmOGZjIiwiaWF0IjoxNjE3Mzg4NjE3LCJuYmYiOjE2MTczODg2MTcsImV4cCI6MTYxNzM5MjIxNywic3ViIjoiIiwic2NvcGVzIjpbXX0.BiiGkfmTwOAewTChEYl4ayVkuItCxPZGC3vMGDn9Csz3tHFt5Vg7Rhb8rklX7QkIAFRo3-a5oIuvc-IwrKfUIxQpb_DQKtEn52b4QlkemrXzCnZBa5Ao7LtsO7gVvXKSuPTOMtBt7dWxMxDxvk5uZ9O0LBp6M8vMemH7Cih_Gl2K4hOb38K6PBf4U2iGnsEUqaHBeLUOTE0ceZGNP4u3JBpTN-TyJtK7PyTaAJXTTZbeIf4rR2XOuOhBU8OfDjVYZ7levg015_rVodq5Ph_oE-r8LKJ9Ml6DyZncxM0NWNfZUVhws9NQGic6YzoQEtXSYjEQOLvAMb2DcsJyaDT4UQ";
export default {
	components: {
		AnimalsList,
		Shelters,
		LoadingScreen,
	},
	data() {
		return {
			animals: [],
			currentTab: 1,
			type: "dog",
			location: localStorage.getItem("location"),
			loding: false,
		};
	},
	methods: {
		setTypeState() {
			if (this.currentTab === 1) {
				this.type = "dog";
			} else {
				this.type = "cat";
			}
		},

		selectTab(selectedTab) {
			this.currentTab = selectedTab;
			this.setTypeState();
			this.fetchAnimals();
		},

		fetchAnimals() {
			this.loading = true;
			setTimeout(
				fetch(
					`https://api.petfinder.com/v2/animals?type=${this.type}&age=adult,senior&location=${this.location}&distance=50&status=adoptable&limit=10`,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: bearer,
						},
					}
				)
					.then((response) => response.json())
					.then((data) => {
						this.animals = data.animals;
						this.loading = false;
					}),
				6000
			);
		},
	},
	created() {
		this.fetchAnimals();
	},
};
</script>

<style scoped>
.button-row {
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #eec5a4b5;
	margin-top: 0.1rem;
	padding-top: 0.25rem;
	height: 8vh;
}

.btn {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 4rem;
	width: 4rem;
	background: none;
	border: none;
	color: #4f4f4f;
}

.btn:focus {
	border: none;
	outline: none;
}

.slide-enter-active,
.slide-leave-active {
	transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-leave-to {
	opacity: 0;
	transform: translateX(-30%);
}
</style>

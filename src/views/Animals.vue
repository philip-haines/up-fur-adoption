<template>
	<div>
		<div v-if="currentTab == 1 || currentTab == 2" class="dogs">
			<AnimalsList :animals="animals" :currentTab="currentTab" />
		</div>
		<div v-if="currentTab == 3" class="shelters">
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
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6ImJiMTlhZjFhODI5YzBjM2E4OWJjYWNiZWUzYTcxNzAxZDQwMDkxODZiNjI5MWQ2NWIwNGNiNzYzZTBkZWIxYjI1Y2IyODg4MzA2Mzk1Y2NkIiwiaWF0IjoxNjE3MjI2MDAxLCJuYmYiOjE2MTcyMjYwMDEsImV4cCI6MTYxNzIyOTYwMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.CTrPOFPcddk9k0kUPCdlcRrRwZ2NrzH-FgbpoLK36_qE2gPIeQOhnhAaK7YJ7vtD-KEAPxhfoSH8d5KN9e86detA57KhJh59S2EShElnnrDmPdRrhNYZ_ZJ65pBH0z0SiUOjjMvgVzwAD1qMWq254CdZpBwVOBwatYxky93wnjI0Rp2OMyX5Y53CMGZee7X8w_HN5tQQBkIc_PACftjO6O79uvA85G0lXko2G4RER7z6bVnDIMN8WiQzZc8rBUlN0z6B_F7ul3OYey2-JNihh2EDQWd_IWLiTnRqI3AfCHjaI1T43IlXJj3rN7eyZzjtGsxFOdeoJnK8uWEi5HaVwg";
export default {
	components: {
		AnimalsList,
		Shelters,
	},
	data() {
		return {
			animals: [],
			currentTab: 1,
			type: "dog",
			location: localStorage.getItem("location"),
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
			console.log(this.type);
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
					console.log(this.animals);
				});
		},
	},
	created() {
		this.animals = this.fetchAnimals();
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
}
</style>

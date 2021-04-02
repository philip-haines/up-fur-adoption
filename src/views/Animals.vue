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
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6IjI5YmUwNzk3MTc3ZDZmOWQwMTZjYzgyYjY3YTgyMGMwNzEzMTBiNGUxZDIzNWE0MzVkZjQ0MWZmNGMyMzdjMzJmM2I4NDQxOTg5MTFhNTljIiwiaWF0IjoxNjE3MzgzMDM2LCJuYmYiOjE2MTczODMwMzYsImV4cCI6MTYxNzM4NjYzNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.PvT1WJqhlxgPvI6hBM6cl1-pc8K1pPOedN413GMNa_uT7j291qsEb4LnluiTNyyUghjRom5657EYvW_JtKzeq4SpLZyEw6tNN_UJEnSJijQIUnPm5sydCb2I1kS4k23VtsFEhRuI_CLvA4Z5dARGr_fFj-Xv9JI578xOLpPjdSJ1ZFUsGaJS5YU3j3gVGSGwBTYlBjY9moPM_zXnY0DC8OkRtJNR5WItxOEIQx1NZkLTWa9uGbo0rLnZX1-hov9XwXItQ3yRs8AA1QJBzkm0ye40pEyjbRoUXfLcosHx-b71h_NqrJOUv7M9tqCNWBOA6Yr3finf8HjvdgpIeNeGug";
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
			this.fetchAnimals(3500);
		},

		fetchAnimals(delay) {
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
						console.log(this.animals);
						console.log(
							"loading state before change",
							this.loading
						);
						this.loading = false;
						console.log("loading state after change", this.loading);
					}),
				delay
			);
		},
	},
	created() {
		this.fetchAnimals(3500);
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

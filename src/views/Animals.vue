<template>
	<div v-if="currentTab == 1" class="dogs">
		<DogsList :dogs="animals" />
	</div>
	<div v-if="currentTab == 2" class="cats">
		<CatsList :cats="animals" />
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
</template>

<script>
import DogsList from "@/components/DogsList.vue";
import CatsList from "@/components/CatsList.vue";
import Shelters from "./Shelters.vue";
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6IjRjZjNlMTlkZTFmNmMwNGQ2NjI3MjhmNjIyZmJiMjg4M2MxZDg0OTRiY2UwYTQ3MTMxNTk0ZGQ3YjE3MDY0YTM0OTJlYTMwOGNlMzY5ZjFmIiwiaWF0IjoxNjE3MjExNTQyLCJuYmYiOjE2MTcyMTE1NDIsImV4cCI6MTYxNzIxNTE0Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.gWYPDQzqlIMD4NAN5R4v7mcv85mwU4yI35_23LJcrMx4eycx8OzFgvIsHZTO9Es2t4y0M_IEHJ5bSPwGkz3KAKBY2B5b95juL2YMCaEB_vMydkINUYl7rFezHgZ7_E5p96k-Z_drSxjRFsWcSCNZtY7L0LTUfnqGnbq-a8l_mtvNuxCh1B6PDUZm70BQlcR7VQx2mTH-P-P0J051yNoZhhSaRZfCP9eq2RPCYffyNCpybmst0Fzab_Pu3IukszH7kHN4QHNVs3XADiXCk83E3f34FAvYrO2AVHjT5S483H8c3DzAIc5el2SFf3C7eBNnvkerUCvmSmWiTVnKk_H7lA";
export default {
	components: {
		DogsList,
		CatsList,
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

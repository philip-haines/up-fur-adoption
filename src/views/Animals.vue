<template>
	<div v-if="currentTab == 1" class="dogs">
		<Dogs />
	</div>
	<div v-if="currentTab == 2" class="cats">
		<Cats />
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
import Dogs from "./Dogs.vue";
import Cats from "./Cats.vue";
import Shelters from "./Shelters.vue";
export default {
	components: {
		Dogs,
		Cats,
		Shelters,
	},
	data() {
		return {
			currentTab: 1,
			speciecs: "dog",
		};
	},
	methods: {
		selectTab(selectedTab) {
			this.currentTab = selectedTab;
		},

		setSpeciecsState() {
			if (this.currentTab === 1) {
				this.species = "dog";
			} else {
				this.species = "cat";
			}
		},
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
	height: 11vh;
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

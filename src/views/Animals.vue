<template>
	<div v-if="currentTab == 1" class="dogs">
		<Dogs />
	</div>
	<div v-if="currentTab == 2" class="cats">
		<Cats />
	</div>
	<div v-if="currentTab == 3" class="cats">
		<Shelters />
	</div>
	<div class="button-row">
		<button @click="selectTab(1)" class="btn">
			<i class="fas fa-dog fa-3x"></i>
			Dogs
		</button>
		<button @click="selectTab(2)" class="btn">
			<i class="fas fa-cat fa-3x"></i>
			Cats
		</button>
		<button @click="selectTab(3)" class="btn">
			<i class="fas fa-store-alt fa-3x"></i> Shelters
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
		};
	},
	methods: {
		selectTab(selectedTab) {
			this.currentTab = selectedTab;
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
	height: 6rem;
}

.btn {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 4rem;
	width: 6rem;
	background: none;
	border: none;
}
</style>

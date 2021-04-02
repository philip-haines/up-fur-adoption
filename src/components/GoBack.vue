<template>
	<span class="go-back">
		<!-- <button >go back</button> -->
		<i @click="goBack" class="fas fa-arrow-left"></i>
	</span>
</template>

<script>
export default {
	methods: {
		goBack() {
			return this.$router.go(-1);
		},
	},
};
</script>

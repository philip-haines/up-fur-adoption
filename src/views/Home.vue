<template>
	<div class="home">
		<div class="tag">
			<h1>BarkWire</h1>
			<h2>ADOPT, DON'T SHOP!</h2>
		</div>
		<div class="form">
			<h3>Enter Your Zip To Get Started</h3>
			<form id="zip-code">
				<input v-model="location" type="number" />
				<button @click="saveLocation()">
					<router-link to="/animals" tag="button"
						>New Furrriends</router-link
					>
				</button>
			</form>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
export default {
	name: "Home",
	data() {
		return {
			location: "",
		};
	},
	methods: {
		saveLocation() {
			localStorage.setItem("location", this.location);
		},
	},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap");
.home {
	background-color: #eec5a4b5;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
	align-items: center;

	background-image: url("../assets/up-fur-adoption-home.png");
	background-size: 125%;
	background-position: center;
	color: #7b3a43;
}

.tag {
	margin-top: 2rem;
	font-family: "Luckiest Guy", cursive;
	text-align: center;
}

.form {
	max-width: 350px;
	margin: 1rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

button {
	width: 300px;
	height: 60px;
	border: none;
	border-radius: 0.5rem;
	background-color: #7b3a43c1;
	color: #fbfbfc;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
		rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

input {
	height: 2rem;
	width: 90%;
	border: none;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
		rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
	margin: 1rem 0;
	padding: 0 1rem;
}

a {
	text-decoration: none;
	font-size: 16px;
	color: white;
}
</style>

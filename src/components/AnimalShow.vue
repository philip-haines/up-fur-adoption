<template>
	<h2>{{ animal.animal.name }}</h2>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6ImJkNTY1YzY3YzI4ZDZiYWM5MTU2OThjYjA0YjMxZDk0NDYxNzUwZmM3NTUzYTBhZDdlNTg3Y2I1ZWM4ZWY4MmNmYzkzMjVkOTRjNWE5YWQ4IiwiaWF0IjoxNjE3MjA5MzUwLCJuYmYiOjE2MTcyMDkzNTAsImV4cCI6MTYxNzIxMjk1MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.m_pfpOrWnQG0mHep09dm9FdQWSedcl4NjEmE0Ysmi6gzjXAsIjh-fY28fUnQfGyheX6tPMizVPc1HX4nyd4XCxOKXrvYsLAklzD8igpJjoXAAZ5R--JtiqgRiqH2Ah371OBTLxQ2vrKJLgyUKPR99xkS3qVCcKP5YUbE5f82aKbkrQD1hWDwptPs4e1H4hzBoSwtwCdH9e1X485GYg-KG7FG-yoVdUAwUyLzqgr8htN3-QdLY4vojuTLo771djcasexGFD_leVWAuSIi8jU_sM7vBjqvyGPwXn-3M2Z7KaqBszXRg5btp0yo5TPKaWRXY7bAgBxuxaiZ51zphAmzCg";
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

<style scoped></style>

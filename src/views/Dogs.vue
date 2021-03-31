<template>
	<div>
		<DogsList :dogs="this.dogs" @update-id="updateId" />
	</div>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6ImJkNTY1YzY3YzI4ZDZiYWM5MTU2OThjYjA0YjMxZDk0NDYxNzUwZmM3NTUzYTBhZDdlNTg3Y2I1ZWM4ZWY4MmNmYzkzMjVkOTRjNWE5YWQ4IiwiaWF0IjoxNjE3MjA5MzUwLCJuYmYiOjE2MTcyMDkzNTAsImV4cCI6MTYxNzIxMjk1MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.m_pfpOrWnQG0mHep09dm9FdQWSedcl4NjEmE0Ysmi6gzjXAsIjh-fY28fUnQfGyheX6tPMizVPc1HX4nyd4XCxOKXrvYsLAklzD8igpJjoXAAZ5R--JtiqgRiqH2Ah371OBTLxQ2vrKJLgyUKPR99xkS3qVCcKP5YUbE5f82aKbkrQD1hWDwptPs4e1H4hzBoSwtwCdH9e1X485GYg-KG7FG-yoVdUAwUyLzqgr8htN3-QdLY4vojuTLo771djcasexGFD_leVWAuSIi8jU_sM7vBjqvyGPwXn-3M2Z7KaqBszXRg5btp0yo5TPKaWRXY7bAgBxuxaiZ51zphAmzCg";
import DogsList from "@/components/DogsList.vue";
// import AnimalShow from "@/components/AnimalShow.vue";
export default {
	name: "Dogs",
	components: {
		DogsList,
		// AnimalShow,
	},
	data() {
		return {
			dogs: [],
			location: localStorage.getItem("location"),
		};
	},
	methods: {
		fetchAnimals() {
			fetch(
				`https://api.petfinder.com/v2/animals?type=dog&age=adult,senior&location=${this.location}&distance=50&status=adoptable&limit=10`,
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
					this.dogs = data.animals;
					console.log(this.dogs);
				});
		},

		// updateId(id) {
		// 	this.id = id;
		// },
	},
	created() {
		this.dogs = this.fetchAnimals();
	},
};
</script>

<style scoped></style>

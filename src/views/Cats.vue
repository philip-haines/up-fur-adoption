<template>
	<div>
		<CatsList :cats="this.cats" />
	</div>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6IjZjOTk2OTE2ZTg3NTZmZjEwYzI4NzMwZjVjMmYxOGY1N2IzMDE0MTk3OGI0NmMxMTQzYzZkMTk3MjkxYmFiODc3MTk1ZTUxYmIzMmJmMTAxIiwiaWF0IjoxNjE3MTk5ODM0LCJuYmYiOjE2MTcxOTk4MzQsImV4cCI6MTYxNzIwMzQzNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.T8ICoAN0vM58JYu9_7UYzIXSO97dhLLdBYVThDJZ-KrLbXUL-TY3qdQNEz3C44tLAYOV487KFXA11m48S0sEQar6kr3zLlYrMiopnMAZBFevxzYVxIhjpWTu6fE06Woiztmwnn6D-WN00i0S60T6GjL_F6sm0tYXKK8d4sPGtcb6fqQrPpGpNrIyZvj6nkG7bNSje5dy0d2HgJPnRlGh27Elg3nWMRYy0F7KrdV6TCKe-wHVIxeQU1gnWwiPZCmFVGHwTCxyQ5OiliMX1VRdkukdshm80d2aDQ-lG9ZPc5KMIb1A5OVsuRBz-rwqrMsKPcix2kJrCVDyW4CAIwQPXg";
import CatsList from "@/components/CatsList.vue";
export default {
	name: "Cats",
	components: {
		CatsList,
	},
	data() {
		return {
			cats: [],
			location: 10128,
		};
	},
	methods: {
		fetchAnimals() {
			fetch(
				`https://api.petfinder.com/v2/animals?type=cat&age=adult,senior&location=${this.location}&distance=50&status=adoptable&limit=10`,
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
					this.cats = data.animals;
					console.log(this.cats);
				});
		},
	},
	created() {
		this.cats = this.fetchAnimals();
	},
};
</script>

<style scoped></style>

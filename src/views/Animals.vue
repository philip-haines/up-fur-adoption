<template>
	<h1>Your New Furry Friends</h1>
	<div class="animals">
		<AnimalList :animals="animals" />
	</div>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6IjVlYzY4MDg4MjFmNzg5MzNhMjY2OGQyMjczMmI4MGFiNWExZjMyYTFkODFkMDZmZGViZjdkYjhlMDUyZTE3ZDZjNmVmODYwNzA1OWI3MjM1IiwiaWF0IjoxNjE3MTEzNDI4LCJuYmYiOjE2MTcxMTM0MjgsImV4cCI6MTYxNzExNzAyOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.XvNU_oFBlVkhneKTM32617A_bfldvtJIlOnxm6j-vAPBQAl-p0JrjkhHnqPoKzcRf8A-eNP6WVwaPEKpzxe3dBI642TdSkuLxDiQ6l9o7gnr5d8WWd6uOEZ1SwPEiSYvRy48-ow3evLpmAvcfdSIA-1SUqYuNUVsPNKOJloTSaBvdT1t-peevgTCjU29AhQWbg6ejRHiJFGQfDRAtBWWOmhewv6CCpE6EqlQfEeZaJBe6QBxYc5So5C-OOvEl2aY7b3PvlXkubeP0QOZi1jy3gfsPO4Fr2ORv04U6rPGR6X4O_jspngF02r_9Ox7b1TJJQnLi2CNm1gmn_nQ_Fxo5w";

import AnimalList from "@/components/AnimalList.vue";

export default {
	name: "Animals",
	components: {
		AnimalList,
	},
	data() {
		return {
			animals: [],
		};
	},
	methods: {
		fetchAnimals() {
			fetch(
				"https://api.petfinder.com/v2/animals?type=cat&age=adult,senior&location=10128&distance=50&status=adoptable&limit=10",
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

<style scoped></style>

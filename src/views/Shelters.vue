<template>
	<div>
		<ShelterList :shelters="this.shelters" />
	</div>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6ImJiMTlhZjFhODI5YzBjM2E4OWJjYWNiZWUzYTcxNzAxZDQwMDkxODZiNjI5MWQ2NWIwNGNiNzYzZTBkZWIxYjI1Y2IyODg4MzA2Mzk1Y2NkIiwiaWF0IjoxNjE3MjI2MDAxLCJuYmYiOjE2MTcyMjYwMDEsImV4cCI6MTYxNzIyOTYwMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.CTrPOFPcddk9k0kUPCdlcRrRwZ2NrzH-FgbpoLK36_qE2gPIeQOhnhAaK7YJ7vtD-KEAPxhfoSH8d5KN9e86detA57KhJh59S2EShElnnrDmPdRrhNYZ_ZJ65pBH0z0SiUOjjMvgVzwAD1qMWq254CdZpBwVOBwatYxky93wnjI0Rp2OMyX5Y53CMGZee7X8w_HN5tQQBkIc_PACftjO6O79uvA85G0lXko2G4RER7z6bVnDIMN8WiQzZc8rBUlN0z6B_F7ul3OYey2-JNihh2EDQWd_IWLiTnRqI3AfCHjaI1T43IlXJj3rN7eyZzjtGsxFOdeoJnK8uWEi5HaVwg";
import ShelterList from "@/components/ShelterList";
export default {
	name: "Shelters",
	components: {
		ShelterList,
	},
	data() {
		return {
			shelters: [],
			location: 10128,
		};
	},
	methods: {
		fetchAnimals() {
			fetch(
				`https://api.petfinder.com/v2/organizations?location=${this.location}&distance=10&limit=20`,
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
					this.shelters = data.organizations;
					console.log(this.shelters);
				});
		},
	},
	created() {
		this.fetchAnimals();
	},
};
</script>

<style scoped></style>

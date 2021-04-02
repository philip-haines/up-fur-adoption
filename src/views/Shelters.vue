<template>
	<div>
		<ShelterList :shelters="this.shelters" />
	</div>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6IjhkZjFmMzVkYzVmYjVkMTA0NDk3ZjY3ODdkZTU4Yzg1YmQwM2QwZDAwZDkyZDAwNmRjNGM0MDkzZTBlY2VkOWZhODUxOGM5NWZmZDJiOTM2IiwiaWF0IjoxNjE3MzkzOTk3LCJuYmYiOjE2MTczOTM5OTcsImV4cCI6MTYxNzM5NzU5Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.Gahu8OXwoh9DmLusRxtoQ7IDxIxTmUvvFskNlOEP1OBg0Ln8zR7thQoqw3Q58f_BnXnj0Eood2FRWAxD__6EFU8TvQD7FuAFJuIp-5v61tpKTCgvLrCVlA6NT-WvZ-FGAz74HEkna_Qs6e25_kXvpEpL7LI4Ao6hXtt3I5kq4AzKNU-kOyX33wzIzmYPLV37p9k2yIfYjUKJi8SfdH3_L6neN75mKRd3yGxl1lhTDXQO6XscJMT1N5z2rDbHvXnaW2yWxmZKEWRWDIZVTLW2d35avJz2GilpZtKUwyLOs-LhaBHubTR_ZcuJxZRpzo3NFjAOzyeMpm2V0-v54o__yA";
import ShelterList from "@/components/ShelterList";
export default {
	name: "Shelters",
	components: {
		ShelterList,
	},
	data() {
		return {
			shelters: [],
			location: localStorage.getItem("location"),
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
				});
		},
	},
	created() {
		this.fetchAnimals();
	},
};
</script>

<style scoped></style>

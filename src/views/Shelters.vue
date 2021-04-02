<template>
	<div>
		<ShelterList :shelters="this.shelters" />
	</div>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6ImYzNWFlMTkwNjM5ZGRhNmQ4NjhhMGUxNjMxYmEzM2M5M2M3NjIyNzc3OTViMjI1MmYxN2E3ODI2ZDk3NmFmY2ZkYzJhY2JkNjBmYTdmOGZjIiwiaWF0IjoxNjE3Mzg4NjE3LCJuYmYiOjE2MTczODg2MTcsImV4cCI6MTYxNzM5MjIxNywic3ViIjoiIiwic2NvcGVzIjpbXX0.BiiGkfmTwOAewTChEYl4ayVkuItCxPZGC3vMGDn9Csz3tHFt5Vg7Rhb8rklX7QkIAFRo3-a5oIuvc-IwrKfUIxQpb_DQKtEn52b4QlkemrXzCnZBa5Ao7LtsO7gVvXKSuPTOMtBt7dWxMxDxvk5uZ9O0LBp6M8vMemH7Cih_Gl2K4hOb38K6PBf4U2iGnsEUqaHBeLUOTE0ceZGNP4u3JBpTN-TyJtK7PyTaAJXTTZbeIf4rR2XOuOhBU8OfDjVYZ7levg015_rVodq5Ph_oE-r8LKJ9Ml6DyZncxM0NWNfZUVhws9NQGic6YzoQEtXSYjEQOLvAMb2DcsJyaDT4UQ";
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

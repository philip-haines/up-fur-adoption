<template>
	<div>
		<ShelterList :shelters="this.shelters" />
	</div>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6IjI5YmUwNzk3MTc3ZDZmOWQwMTZjYzgyYjY3YTgyMGMwNzEzMTBiNGUxZDIzNWE0MzVkZjQ0MWZmNGMyMzdjMzJmM2I4NDQxOTg5MTFhNTljIiwiaWF0IjoxNjE3MzgzMDM2LCJuYmYiOjE2MTczODMwMzYsImV4cCI6MTYxNzM4NjYzNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.PvT1WJqhlxgPvI6hBM6cl1-pc8K1pPOedN413GMNa_uT7j291qsEb4LnluiTNyyUghjRom5657EYvW_JtKzeq4SpLZyEw6tNN_UJEnSJijQIUnPm5sydCb2I1kS4k23VtsFEhRuI_CLvA4Z5dARGr_fFj-Xv9JI578xOLpPjdSJ1ZFUsGaJS5YU3j3gVGSGwBTYlBjY9moPM_zXnY0DC8OkRtJNR5WItxOEIQx1NZkLTWa9uGbo0rLnZX1-hov9XwXItQ3yRs8AA1QJBzkm0ye40pEyjbRoUXfLcosHx-b71h_NqrJOUv7M9tqCNWBOA6Yr3finf8HjvdgpIeNeGug";
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

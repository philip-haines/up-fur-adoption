<template>
	<div>
		<CatsList :cats="this.cats" />
	</div>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6IjVkOTRhMmM5ZWFmNjQzZjJjYjBmMWU3ODBkZDU4NjFkYTBiZWViYzI1NmY5MDkzMWUzOTVhZjc5MGUxYTNjYmJkMmQyZmUyYmRkMzE2NjE4IiwiaWF0IjoxNjE3MTMwNjA1LCJuYmYiOjE2MTcxMzA2MDUsImV4cCI6MTYxNzEzNDIwNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.Khp3XE-1wAQh1orCvoS3EbJbZUnF3SsJhD1v_qADqQ600yYhVBUNEDCgYi8d4MTFGpvJYXEDbXsFBSszj3ZBElfo7dx7Mq6utiE-Mtn46sweJM7ueOgAKxfaqVfgMjGSTJIy95cWlEFxs0OMjWQ9wmBRvwFb_-WJxLYESzxUwAMVaGk5ltRgE5lxI3vuIKDeGwqHxxJuEVXkeInmhzEwyrLHiPEl_iDKrZfDjDOjr522D8Dn-j6NSiO7N5CXUKL0BnyySTET3SoJTiEFO3T4DATv6DdsGgSkho1Uub398_bMqm7kxwxCyr3MwVVSgHyUfATaN5mXHfTqyeyyhGYJ9A";
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

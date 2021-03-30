<template>
	<div>
		<ShelterList :shelters="this.shelters" />
	</div>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6IjVkOTRhMmM5ZWFmNjQzZjJjYjBmMWU3ODBkZDU4NjFkYTBiZWViYzI1NmY5MDkzMWUzOTVhZjc5MGUxYTNjYmJkMmQyZmUyYmRkMzE2NjE4IiwiaWF0IjoxNjE3MTMwNjA1LCJuYmYiOjE2MTcxMzA2MDUsImV4cCI6MTYxNzEzNDIwNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.Khp3XE-1wAQh1orCvoS3EbJbZUnF3SsJhD1v_qADqQ600yYhVBUNEDCgYi8d4MTFGpvJYXEDbXsFBSszj3ZBElfo7dx7Mq6utiE-Mtn46sweJM7ueOgAKxfaqVfgMjGSTJIy95cWlEFxs0OMjWQ9wmBRvwFb_-WJxLYESzxUwAMVaGk5ltRgE5lxI3vuIKDeGwqHxxJuEVXkeInmhzEwyrLHiPEl_iDKrZfDjDOjr522D8Dn-j6NSiO7N5CXUKL0BnyySTET3SoJTiEFO3T4DATv6DdsGgSkho1Uub398_bMqm7kxwxCyr3MwVVSgHyUfATaN5mXHfTqyeyyhGYJ9A";
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

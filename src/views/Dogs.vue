<template>
	<div>
		<DogsList :dogs="this.dogs" @update-id="updateId" />
	</div>
</template>

<script>
const bearer =
	"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJLNFVCYmFJYVUzYWV3anJycFRDMHVHTFd0Vm1LWHA5WDF1S1lQTmJVMzU3ZW5iM3ZuQyIsImp0aSI6IjRjZjNlMTlkZTFmNmMwNGQ2NjI3MjhmNjIyZmJiMjg4M2MxZDg0OTRiY2UwYTQ3MTMxNTk0ZGQ3YjE3MDY0YTM0OTJlYTMwOGNlMzY5ZjFmIiwiaWF0IjoxNjE3MjExNTQyLCJuYmYiOjE2MTcyMTE1NDIsImV4cCI6MTYxNzIxNTE0Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.gWYPDQzqlIMD4NAN5R4v7mcv85mwU4yI35_23LJcrMx4eycx8OzFgvIsHZTO9Es2t4y0M_IEHJ5bSPwGkz3KAKBY2B5b95juL2YMCaEB_vMydkINUYl7rFezHgZ7_E5p96k-Z_drSxjRFsWcSCNZtY7L0LTUfnqGnbq-a8l_mtvNuxCh1B6PDUZm70BQlcR7VQx2mTH-P-P0J051yNoZhhSaRZfCP9eq2RPCYffyNCpybmst0Fzab_Pu3IukszH7kHN4QHNVs3XADiXCk83E3f34FAvYrO2AVHjT5S483H8c3DzAIc5el2SFf3C7eBNnvkerUCvmSmWiTVnKk_H7lA";
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

# Up-Fur-Adoption

## Motivation
The idea for Up-Fur-Adoption came from the large increase in pet ownership since the Covid-19 pandemic. Historiucally older dogs and cats have a harder time being adopted. The app is designed to only display older animals to users in hops to get them adopted into good homes quickly. 


## Tech/framework used
<b>Built with</b>
- [Vue.js](https://vuejs.org/)

## Features
- Vue router
    - Use of Vue Router to transition user between home page, index page, and show page
- Vue Slots
    - Use of Vue Slots to dynamically serve data to the user without the route changing. 
    - Data is served and rendedred based on which tab the user is on. 
- Dynamic Query Building

## Code Example

```
<div v-if="currentTab == 1" class="dogs">
  <div v-if="loading === true">
    <LoadingScreen />
  </div>
  <div v-else>
    <AnimalsList :animals="animals" :currentTab="currentTab" />
  </div>
</div>
<div v-else-if="currentTab == 2">
  <div v-if="loading === true">
    <LoadingScreen />
  </div>
  <div v-else>
    <AnimalsList :animals="animals" :currentTab="currentTab" />
  </div>
</div>
<div v-else class="shelters">
  <Shelters />
</div>
 ```
 - The use of directives in the template on the "Animals" view. 
 - The above will condtionally render either cats, dogs, or shelters based on which tab the user clicks. Furthermore, it will also dictate the presence of a loading screen based on if a loading state is true or false. 
 
 ```
 <script>
import GoBack from "./GoBack.vue";
export default {
	name: "AnimalsList",
	props: ["animals", "currentTab"],
	components: {
		GoBack,
	},
};
</script>
```
- Use of Props and Componenets in the Script section on the animal index page
- This child component is reciving two sets of props from the parent component in order to render data from the api that is being called.  



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

 
## Screenshots
Include logo/demo screenshot etc.


#API Information

The Petfinder API was used for this project, and the docs for this API can be found [here](https://www.petfinder.com/developers/v2/docs/). 

#Contact Me
- [LinkedIn](https://www.linkedin.com/in/philip-haines/)
- [My Website](https://philiphaines.com)

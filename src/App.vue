<template>
	<div id="app">
		<main class="App__main">
			<transition name="fade" mode="out-in">
				<router-view />
			</transition>
		</main>
	</div>
</template>

<script></script>

<style>
body {
	padding: 0;
	margin: 0;
	display: flex;
}

.fade-enter-active,
.fade-leave-active {
	transition-duration: 0.3s;
	transition-property: opacity;
	transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}

#nav {
	height: 4rem;
	display: flex;
	justify-content: space-evenly;
	position: fixed;
	bottom: 0;
	width: 100%;
}
</style>

<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato,wght@1,300&display=swap");
body {
	padding: 0;
	margin: 0;
	display: flex;
	font-family: "Lato", sans-serif;
	height: 100vh;
	width: 100vw;
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
</style>

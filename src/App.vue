<template>
	<div>
		<header>
			<img src="../static/img/header.png" alt="logo">
		</header>

		<main>
			<router-view/>
		</main>
	</div>
</template>

<script>
export default {

}
</script>

<style>
	@font-face {
		font-family: 'Nunito Sans';
		font-style: normal;
		font-weight: 400;
		src: local('Nunito Sans Regular'), local('NunitoSans-Regular'), url('../static/fonts/nunitosans.woff2') format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	@font-face {
		font-family: 'Nunito Sans';
		font-style: normal;
		font-weight: 600;
		src: local('Nunito Sans SemiBold'), local('NunitoSans-SemiBold'), url('../static/fonts/nunitosans-semibold.woff2') format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	body {
		margin: 0;
		font-family: 'Nunito Sans', sans-serif;
		font-size: 1.1rem;
		color: #222233;
		background: #2300a1;
	}

	a {
		color: #222233;
		text-decoration: none
	}

	main {
		margin-top: 100px;
		position: relative;
	}

	img {
		min-width: 100%;
		opacity: .5;
	}

	h1, h2, p {
		margin: 0
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	header {
		position: fixed;
		top: 0;
		width: 100%;
	}

	.bg {
		background: #4fa9ff;
		height: 300px;
	}
</style>
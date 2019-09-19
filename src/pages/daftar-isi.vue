<template>
	<section>
		<div class="content">
			<div class="search">
				<input type="text" v-model="smeSearch" placeholder="Cari ...">
				<button type="submit" class="search-button">
					<svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 512 512"><path fill="#fff" d="M495 466.2L377.2 348.4a206.6 206.6 0 1 0-28.9 28.9L466.1 495a20.4 20.4 0 0 0 28.9-28.8zm-277.5-83.3C126.2 382.9 52 308.7 52 217.5S126.2 52 217.5 52C308.7 52 383 126.3 383 217.5s-74.3 165.4-165.5 165.4z"/></svg>
				</button>
			</div>
			<ul>
				<li v-for="kamus in filteredList" :key="kamus.id">
					<a :href="'#/arti/' + kamus.id">{{kamus.istilah}}</a>
				</li>
			</ul>
		</div>
		<button @click="toTop()" class="btn-to-top" title="Go to top">
			<svg xmlns="http://www.w3.org/2000/svg" width="50" viewBox="0 0 476.74 476.74"><path fill="#2886c8" d="M238.37 0C106.73 0 0 106.73 0 238.37c0 131.67 106.73 238.37 238.37 238.37 131.67 0 238.37-106.7 238.37-238.37C476.74 106.73 370.04 0 238.37 0zm114.35 289.22a15.9 15.9 0 0 1-22.47 0l-91.88-91.88-91.88 91.88a15.9 15.9 0 0 1-22.47 0 15.9 15.9 0 0 1 0-22.47l103.07-103.07c3.11-3.12 7.18-4.64 11.28-4.64s8.17 1.53 11.28 4.64l103.07 103.07a15.9 15.9 0 0 1 0 22.47z"/></svg>
		</button> 
	</section>
</template>

<script>
import data from '../data-istilah.json'

export default {
	data () {
        return {
            dataIstilah: [],
            smeSearch: ''
        }
    },
	mounted() {
		this.dataIstilah = data
	},
	computed: {
        filteredList() {
            return this.dataIstilah.filter(dataIstilahs => {
                return dataIstilahs.istilah.toLowerCase().includes(this.smeSearch.toLowerCase())
            })
        }
	},
	methods: {
		handleSCroll(event) {
			if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
				document.querySelector(".btn-to-top").style.display = "block"; 
			} else if (window.scrollY < 300) {
				document.querySelector(".btn-to-top").style.display = "none";
			}
		},
		toTop() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
	},
	created () {
    	window.addEventListener('scroll', this.handleSCroll);
	},
	destroyed () {
		window.removeEventListener('scroll', this.handleSCroll);
	}
}
</script>

<style scoped>
	section {
		margin: 0 15px;
	}

	li {
		margin-bottom: 12px;
	}

	li a {
		padding: 10px;
		display: block;
		background: #fff;
		border-radius: 3px;
		font-weight: 600;
		box-shadow: 0 3px 5px rgba(0, 0, 0, .1);
	}

	.search {
		width: 100%;
		margin-bottom: 40px;
		position: relative;
		display: flex;
	}

	.search input {
		width: 100%;
		border: none;
		border-right: none;
		padding: 15px;
		border-radius: 3px;
		outline: none;
		background: #4fa8fe;
		color: #fff;
		border-radius: 3px 0 0 3px;
		font-size: 1rem;
		box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
	}

	.search-button {
		width: 54px;
		height: 44;
		text-align: center;
		border-radius: 3px;
		background: #4fa8fe;
		border: none;
		border-radius: 0 3px 3px 0;
	}

	.search-button svg {
		top: 2px;
		position: relative;
	}

	.btn-to-top {
		display: none;
		position: fixed;
		bottom: 20px;
		right: 30px;
		z-index: 99;
		border: none;
		outline: none;
		background-color: #fff;
		border-radius: 50%;
		height: 50px;
		padding: 0;
	}
</style>
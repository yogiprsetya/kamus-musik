<template>
    <section>
        <h1>{{ tampilkanArti.istilah }}</h1>
        <p><strong>Pengertian</strong>:</p>
        <p id="semua" v-html="tampilkanArti.arti">{{ tampilkanArti.arti }}</p>
        <div v-show="sukses" class="alert-success">Berhasil dicopy !</div>      

        <div class="list">
            <button onclick="window.location.href='#/'" class="kiri">Kembali</button>
            <button @click="copyArti('semua')">Copy</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            urlParams: window.location.href.split('/'),
            tampilkanArti: "",
            sukses: false
        }
    },
    mounted() {
        axios.get("../../static/data-istilah.json")
		.then(response => {
            this.tampilkanArti = response.data.find(item => item.id == this.urlParams[this.urlParams.length-1])
        })
    },
    methods: {
        copyArti(containerid) {
           if (document.selection) { 
                var range = document.body.createTextRange();
                range.moveToElementText(document.getElementById(containerid));
                range.select().createTextRange();
                document.execCommand("copy"); 
            } else if (window.getSelection) {
                var range = document.createRange();
                range.selectNode(document.getElementById(containerid));
                window.getSelection().addRange(range);
                document.execCommand("copy");
                this.sukses = true;
                setTimeout(() => {this.sukses = false}, 2000);
            }
        },
    }
}
</script>

<style scoped>
    h1 {
		font-size: 1.5rem;
		margin-bottom: 30px;	
		font-weight: 600;
        border-bottom: 1px #0f0045 solid;
	}

    main {
        margin-top: 50px !important;
    }

    section {
        background: #fff;
        padding: 15px;
        margin: 0 15px;
		box-shadow: 0 3px 5px rgba(0, 0, 0, .1);
        border-radius: 3px;
    }

    .list {
        display: inline-block;
        margin-top: 20px;
        width: 100%;
    }

    button {
        float: right;
        color: #fff;
        background-color: #1976d2;
        padding: 8px 17px;
        font-size: 1rem;
        border-radius: 3px;
        border: 0
    }

    .kiri {
        float: none
    }

    .alert-success {
        color: #155724;
        font-size: .8rem;
        background-color: #d4edda;
        position: relative;
        padding: .4rem 1.2rem;
        margin-top: 10px
    }
</style>

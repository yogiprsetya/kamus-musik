import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import DaftarIsiHTML from '@/pages/daftar-isi'
import Arti from '@/pages/arti'
import PageNotFound from '@/pages/404'

Vue.use(Router)

export default new Router({
  	routes: [{
		path: '/',
		name: 'Home',
		component: Home
	},{
		path: '/daftar-isi',
		name: 'Daftar Isi',
		component: DaftarIsiHTML
    },{
		path: '/arti/:id',
		name: 'Arti',
		component: Arti
    },{
		path: '**',
		name: 'PageNotFound',
		component: PageNotFound
    }]
})
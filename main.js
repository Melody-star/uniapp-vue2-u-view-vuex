import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import './uni.promisify.adaptor'
import apiPlugin from '@/api/index.js'
import store from './store/index.js'
Vue.config.productionTip = false

// 导入Vuex
Vue.prototype.$store = store

// 导入uview
Vue.use(uView)

// 导入请求
Vue.use(apiPlugin)

App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
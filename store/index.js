import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: ""
	},
	getters: {
		getToken: state => {
			if (state.token == '') {
				return uni.getStorageSync('token')
			} else {
				return state.token
			}

		}
	},
	mutations: {
		setToken(state, payload) {
			state.token = payload
			uni.setStorage({
				key: 'token',
				data: payload
			})
		}
	}
})

export default store
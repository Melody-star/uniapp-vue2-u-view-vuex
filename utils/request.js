import {
	baseUrl
} from '@/config/host.js'
import store from '@/store/index.js'

const request = (url, method, data, options) =>
	new Promise((resolve, reject) => {
		uni.request({
			url,
			method,
			data,
			success: res => {
				resolve(res.data);
			},
			fail: err => {
				reject(err);
			},
			...options
		});
	});

const httpInterceptor = {
	invoke(option) {
		if (!option.url.startsWith('http')) {
			option.url = baseUrl + option.url
		}
		option.timeout = 10000
		const token = store.getters.getToken
		if (token) {
			option.header = {
				Authorization: token
			}
		}
	}
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

export default request;
import {
	baseUrl
} from '@/config/host.js'

const request = (url, method, data, options) =>
	new Promise((resolve, reject) => {

		// const fullUrl = baseUrl + url

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
		option.header = {
			...option.header,

		}
	}
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

export default request;
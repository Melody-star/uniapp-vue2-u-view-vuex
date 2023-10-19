import config from './config';
import request from '@/utils/request.js'

const install = Vue => {
	if (install.installed) return;

	install.installed = true;

	Object.defineProperties(Vue.prototype, {
		$api: {
			get() {
				const api = {};

				for (const key in config) {
					const {
						url,
						method
					} = config[key];

					api[key] = (data, options) =>
						request(url, method, data, options)
				}

				return api;
			}
		}
	});
};

export default {
	install
};
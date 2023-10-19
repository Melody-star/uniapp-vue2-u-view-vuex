let baseUrl;

if (process.env.NODE_ENV === 'development') {
	baseUrl = 'http://192.168.0.38';
} else {
	baseUrl = 'https://api.jxwenxin.com';
}

export {
	baseUrl
};
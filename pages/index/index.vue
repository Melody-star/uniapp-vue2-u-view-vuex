<template>
	<view class="content">
		<u-button @click="request" text="请求"></u-button>
		<u-button @click="setToken" text="设置Token"></u-button>
	</view>
</template>

<script>
	import store from '@/store/index.js'

	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		methods: {
			request() {
				this.$api.login({
					username: "张三",
					password: '123456'
				}).then((res) => {
					console.log(res);
				})
			},
			setToken() {
				store.commit('setToken', 'sadsijdlasjildjiwd')
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
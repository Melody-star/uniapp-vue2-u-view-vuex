<template>
	<view class="content">
		{{todos}}
		<u-button @click="request" text="请求"></u-button>
	</view>
</template>

<script>
	import store from '@/store/index.js'
	import {
		mapState
	} from 'vuex'

	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		computed: {
			...mapState({
				todos: state => state.todos
			})
		},
		methods: {
			request() {

				store.commit('add', {
					id: 5,
					coo: '正式'
				})

				this.$api.login({
					username: "张三",
					password: '123456'
				}).then((res) => {
					console.log(res);
				})
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
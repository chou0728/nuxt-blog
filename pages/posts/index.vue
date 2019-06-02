<template>
	<div class="posts-page">
		<PostList :posts="loadedPosts"/>
	</div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
import { mapGetters } from 'vuex'

export default {
	components: {
		PostList
	},
	computed: {
		...mapGetters(['loadedPosts'])
	}
}
</script>

<style lang="scss" scoped>
.posts-page {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

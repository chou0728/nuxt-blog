<style lang="scss" scoped>
.post-list {
	display: flex;
	padding: 20px;
	box-sizing: border-box;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}
</style>

<template>
	<section class="post-list">
		<PostPreview
			v-for="item in post"
			:key="item.id"
			:id="item.id"
			:title="item.title"
			:previewText="item.previewText"
			:thumbnail="item.thumbnail"
			:is-admin="isAdmin"
		/>
	</section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
	components: {
		PostPreview
	},
	props: {
		isAdmin: {
			type: Boolean,
			default: false
		},
	},
	data() {
		return {
			post: {
				'1': {
					id: '1',
					title: 'Post title 1',
					previewText: 'post content',
					thumbnail:
						'https://cdn-images-1.medium.com/max/1200/1*EWDEUt0fqsmRgpYGFOOMew.png'
				},
				'2': {
					id: '2',
					title: 'Post title 2',
					previewText: 'post content',
					thumbnail:
						'https://miro.medium.com/max/1838/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg'
				},
				'3': {
					id: '3',
					title: 'Post title 3',
					previewText: 'post content',
					thumbnail: 'https://firebase.google.com/images/social.png'
				}
			}
		}
	}
}
</script>

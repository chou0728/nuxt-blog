<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList isAdmin :posts="loadedPosts"/>
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton'

export default {
  components: {
    PostList,
    AppButton
  },
  layout: 'admin',
  data() {
    return {
			loadedPosts: {
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
  },
}
</script>

<style lang="scss" scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>

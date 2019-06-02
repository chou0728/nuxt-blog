<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: {
          '1': {
            id: '1',
            title: 'Post title 1',
            previewText: 'post content',
            thumbnail: 'https://cdn-images-1.medium.com/max/1200/1*EWDEUt0fqsmRgpYGFOOMew.png'
          },
          '2': {
            id: '2',
            title: 'Post title 2',
            previewText: 'post content',
            thumbnail: 'https://miro.medium.com/max/1838/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg'
          },
          '3': {
            id: '3',
            title: 'Post title 3',
            previewText: 'post content',
            thumbnail: 'https://firebase.google.com/images/social.png'
          }
        }
      })
    }, 1500)
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

<style lang="scss" scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
	background-image: url('~assets/images/code-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div class="home-page">
    <section class="intro">
      <h1>接收最新前端技術!</h1>
    </section>
    <section class="featured-posts">
      <PostPreview
        v-for="item in post"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :previewText="item.previewText"
        :thumbnail="item.thumbnail"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  data() {
    return {
      post: {
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
    }
  }
}
</script>

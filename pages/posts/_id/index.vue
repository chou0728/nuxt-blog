<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">最近更新日期: {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">作者: {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
      <button type="button" class="btn btn-primary">Primary</button>
    </section>
    <section class="post-feedback">
      <p>
        有疑問可email至
        <a href="mailto:dean34520@gmail.com">dean34520@gmail.com</a>
      </p>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData(context) {
    return axios.get(`${process.env.baseUrl}/posts/${context.params.id}.json`)
      .then(result => {
        return {
          loadedPost: result.data
        }
      })
      .catch(e => context.error(e))
  }
}
</script>

<style lang="scss" scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>

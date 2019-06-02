<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  components: {
    AdminPostForm
  },
  layout: 'admin',
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost).then(() => {
        this.$router.push('/admin')
      })
    }
  },
  asyncData(context) {
    return axios.get(`https://nuxt-blog-0728.firebaseio.com/posts/${context.params.postId}.json`)
      .then(result => {
        return {
          loadedPost: {...result.data, id: context.params.postId }
        }
      })
      .catch(e => context.error(e))
  }
}
</script>

<style lang="scss" scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>

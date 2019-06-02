<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  components: {
    AdminPostForm
  },
  layout: 'admin',
  data() {
    return {
      loadedPost: {
        author: 'Eric',
        title: 'My first post',
        thumbnailLink: 'https://miro.medium.com/max/1838/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg',
        content: 'This is super amazing!'
      }
    }
  },
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

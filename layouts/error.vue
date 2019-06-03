<template>
  <div class="error-page">
    <h1>Oops, something went wrong!</h1>
    <!--用a的原因在於js可能已經crash了，但為了要讓網站能正常運作，所以不能用nuxt-link -->
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>

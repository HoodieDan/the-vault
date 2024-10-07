<template>
  <div>
    <NuxtLayout>
      <AppHeader />
      <NuxtPage />
      <AppFooter />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import 'bootstrap/dist/css/bootstrap.min.css'
</script>

<style lang="scss">
@use "~/styles/index.scss";
</style>
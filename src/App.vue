<script setup>
import Sidebar from "./components/Sidebar.vue"
import ImageGallery from "./components/ImageGallery.vue"
</script>

<template>
  <VApp>
    <!-- Side Bar -->

    <Sidebar />
    <!-- Main -->
    <VMain>
      <!-- Cards -->
      <ImageGallery />
    </VMain>
  </VApp>
</template>

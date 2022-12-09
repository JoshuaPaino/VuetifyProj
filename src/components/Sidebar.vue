<template>
  <VNavigationDrawer expand-on-hover rail>
    <!-- List -->
    <VList>
      <VListItem
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Random User"
        subtitle="rando@test.com"
      >
      </VListItem>
    </VList>
    <VDivider></VDivider>

    <VList density="compact" nav>
      <VListItem
        prepend-icon="mdi-image"
        title="Color Gallery"
        value="color"
        @click="selectOption(true)"
      ></VListItem>
      <VListItem
        prepend-icon="mdi-dialpad"
        title="Grayspace Gallery"
        value="gray"
        @click="selectOption(false)"
      ></VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<script setup>
const emits = defineEmits(["selectOption"])

const selectOption = (isColor) => {
  emits("selectOption", isColor)
}
</script>

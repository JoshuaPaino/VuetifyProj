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
      ></VListItem>
      <VListItem
        prepend-icon="mdi-dialpad"
        title="Grayspace Gallery"
        value="gray"
      ></VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<script>
import { mdiAccount, mdiDelete, mdiPencil, mdiShareVariant } from "@mdi/js"

export default {
  data: () => ({
    icons: {
      mdiAccount,
      mdiPencil,
      mdiShareVariant,
      mdiDelete,
    },
  }),
}
</script>

<script setup lang="ts">
import useUserStore from "@/stores/modules/user";

const userStore = useUserStore();
</script>

<template>
  <h1>{{ userStore.user }}</h1>
</template>

<style scoped lang="scss">

</style>
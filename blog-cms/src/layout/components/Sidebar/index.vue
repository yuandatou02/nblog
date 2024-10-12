<template>
  <div :class="{'has-logo':showLogo}" class="select-none">
    <logo v-if="showLogo" :collapse="isCollapse"/>
  </div>
</template>

<script setup lang="ts">
import useSettingStore from "@/stores/modules/settings";
import Logo from "./Logo.vue"
import useAppStore from "@/stores/modules/app";
import {computed} from "vue";

const appStore = useAppStore();
const Settings = useSettingStore();
const showLogo = Settings.sidebarLogo;
const isCollapse = computed(() => !appStore.sidebar.opened);
</script>

<style scoped lang="scss">

</style>
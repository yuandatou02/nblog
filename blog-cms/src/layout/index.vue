<template>
  <div class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <sidebar class="sidebar-container"/>
  </div>
</template>

<script setup lang="ts">
import useAppStore from "@/stores/app";
import Sidebar from "./components/Sidebar/index.vue";

const appStore = useAppStore();
const device = appStore.device;
const sidebar = appStore.sidebar;
// 点击侧边栏外面关闭侧边栏
const handleClickOutside = () => {
  appStore.closeSideBar(false);
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/mixin.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 1702; //999 mavon-editor最高z-index: 1600
  }
}
</style>
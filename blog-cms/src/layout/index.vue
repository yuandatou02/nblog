<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAppStore from "@/stores/app";
import Sidebar from "./components/Sidebar/index.vue";
import Navbar from "@/layout/components/Navbar.vue";
import useSettingStore from "@/stores/settings";
import {computed} from "vue";

const settingStore = useSettingStore();
const appStore = useAppStore();
const device = appStore.device;
const sidebar = appStore.sidebar;
const fixedHeader = settingStore.fixedHeader;
// 点击侧边栏外面关闭侧边栏
const handleClickOutside = () => {
  appStore.closeSideBar(false);
}
const classObj = computed(() => ({
  hideSidebar: !appStore.sidebar.opened,
  openSidebar: appStore.sidebar.opened,
  withoutAnimation: appStore.sidebar.withoutAnimation,
  mobile: appStore.device === 'mobile'
}))
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
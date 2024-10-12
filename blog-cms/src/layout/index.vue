<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar/>
      </div>
      <app-main/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./components/Sidebar/index.vue";
import Navbar from "@/layout/components/Navbar/index.vue";
import AppMain from "@/layout/components/AppMain/index.vue";
import useStore from "@/stores";
import {computed} from "vue";

const {app, settings} = useStore();
const device = app.device;
const sidebar = app.sidebar;
const fixedHeader = settings.fixedHeader;
// 点击侧边栏外面关闭侧边栏
const handleClickOutside = () => {
  app.closeSideBar(false);
}
const classObj = computed(() => ({
  hideSidebar: !app.sidebar.opened,
  openSidebar: app.sidebar.opened,
  withoutAnimation: app.sidebar.withoutAnimation,
  mobile: app.device === 'mobile'
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
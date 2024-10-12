<template>
  <div :class="{'has-logo':showLogo}" class="select-none">
    <logo v-if="showLogo" :collapse="isCollapse"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
          :default-openeds="defaultOpends"
          :default-active="activeMenu"
          :collapse="isCollapse"
          :background-color="variables.menuBg"
          :text-color="variables.menuText"
          :active-text-color="variables.menuActiveText"
          :unique-opened="true"
          :collapse-transition="true"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import variables from "@/assets/styles/variables.module.scss"
import Logo from "./Logo.vue"
import {computed} from "vue";
import useStore from "@/stores";
import {useRoute} from "vue-router";
import SidebarItem from "./SidebarItem.vue";
import {routes} from "@/router";

const route = useRoute()
const {meta, path} = route
const {app, settings} = useStore();
const defaultOpends = settings.defaultOpends;
const activeMenu = computed(() => {
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path;
});
const showLogo = settings.sidebarLogo;
const isCollapse = computed(() => !app.sidebar.opened);
</script>

<style scoped lang="scss">


</style>
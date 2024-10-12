<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar"/>

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="users.avatar" class="user-avatar" alt="Avatar">
          <el-icon class="el-icon--right">
            <arrow-down/>
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <a target="_blank" href="https://github.com/Naccl/NBlog">
              <el-dropdown-item>
                <SvgIcon icon-class="github" class-name="svg"/>
                <span class="ml-6px">GitHub</span>
              </el-dropdown-item>
            </a>
            <el-dropdown-item @click.native="handleLogout">
              <SvgIcon icon-class="logout" class-name="svg"/>
              <span class="ml-6px">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hamburger from '@/components/Hamburger/index.vue'
import {computed} from "vue";
import useStore from "@/stores";
import {ArrowDown} from "@element-plus/icons-vue";
import {myElMessageBox, myElNoteMessage} from "@/utils/myMessage";
import {logout} from "@/api/user";
import {removeToken} from "@/utils/token";
import {useRouter} from "vue-router";

const router = useRouter();
const {app, user} = useStore();
const users = user.user;
const sidebar = computed(() => app.sidebar);
const toggleSideBar = () => {
  app.changeSideBar();
}
const handleLogout = () => {
  myElMessageBox('确定退出登录吗？', 'warning').then(() => {
    logout().then(() => {
      // 退出登录后清空用户信息
      app.$reset();
      // 清除token
      removeToken();
      // 跳转到登录页面
      router.push('/login');
      myElNoteMessage("系统提示", '退出登录成功');
    })
  })
}
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  user-select: none;

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 20px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 0;
          font-size: 12px;
        }
      }
    }
  }
}

.user-dropdown .svg {
  margin-right: 5px;
}

.el-dropdown-menu {
  margin: 7px 0 0 0 !important;
  padding: 0 !important;
  border: 0 !important;
}
</style>
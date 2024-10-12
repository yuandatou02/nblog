<template>
  <div class="login-container">
    <el-form class="login-form" ref="loginFormRef" :rules="loginRules" :model="loginForm" auto-complete="on"
             label-position="left">
      <div class="title-container">
        <h1 class="title">后台管理</h1>
      </div>
      <!-- 用户名输入框 -->
      <el-form-item prop="username">
        <el-input ref="username" v-model="loginForm.username" placeholder="请输入用户名" name="username" type="text"
                  tabindex="1" auto-complete="on" size="large">
          <template #prefix>
            <el-icon :size="20">
              <User/>
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <!-- 密码输入框 -->
      <el-form-item prop="password">
        <el-input ref="password" v-model="loginForm.password" size="large" placeholder="请输入密码" name="password"
                  tabindex="2" auto-complete="on" show-password type="password">
          <template #prefix>
            <el-icon :size="20">
              <Lock/>
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-button size="large" :loadding="loading" class="w-[100%] mb-[30px]" type="primary"
                 @click.native.prevent="handleLogin">
        登 录
      </el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
// 引入element-plus的图标
import {User, Lock} from '@element-plus/icons-vue';
import {reactive, ref} from 'vue';
import {login} from "@/api/user";
import {useRouter} from "vue-router";
import useUserStore from "@/stores/modules/user";
import {myElNoteMessage} from "@/utils/myMessage";
// 引入用户状态管理
const userStore = useUserStore();
const router = useRouter();
// 定义登录表单
const loginForm = reactive({
  username: 'admin',
  password: '123456'
});
// 定义登录按钮状态
const loading = ref(false);
// 定义登录表单引用
const loginFormRef = ref();
// 登录校验方法
const loginRules = {
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
  ]
}
// 登录方法
const handleLogin = () => {
  loginFormRef.value.validate((valid: boolean) => {
    // 如果表单内容为空，则不执行登录操作
    if (!valid) {
      return;
    }
    // 显示登录按钮加载状态
    loading.value = true;
    // 发送登录请求
    login(loginForm).then(res => {
      // 登录提示信息
      myElNoteMessage('登录成功', res.msg);
      // 存储token和用户信息到本地
      userStore.setUserAndToken(res.data.user, res.data.token)
      router.push('/')
    }).finally(() => {
      // 隐藏登录按钮加载状态
      loading.value = false;
    })
  });
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$light_gray: #eee;

.login-container {
  min-height: 100vh;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    .title-container {
      position: relative;

      .title {
        color: $light_gray;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: bold;
        font-size: 40px;
      }
    }
  }
}
</style>
<template>
    <div class="login-container">
        <el-form class="login-form" :rules="loginRules" :model="loginForm" auto-complete="on" label-position="left">
            <div class="title-container">
                <h1 class="title">后台管理</h1>
            </div>
            <!-- 用户名输入框 -->
            <el-form-item prop="username">
                <el-input ref="username" v-model="loginForm.username" placeholder="请输入用户名" name="username" type="text"
                    tabindex="1" auto-complete="on" size="large">
                    <template #prefix>
                        <el-icon :size="20">
                            <User />
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
                            <Lock />
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <!-- 登录按钮 -->
            <el-button size="large" class="w-[100%] mb-[30px]" type="primary">
                登 录
            </el-button>
        </el-form>
    </div>
</template>

<script setup lang="ts">
// 引入element-plus的图标
import { User, Lock } from '@element-plus/icons-vue';
import { reactive } from 'vue';
// 定义登录表单
const loginForm = reactive({
    username: '',
    password: ''
});
// 登录校验方法
const loginRules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ]
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
                margin: 0px auto 40px auto;
                text-align: center;
                font-weight: bold;
                font-size: 40px;
            }
        }
    }
}
</style>
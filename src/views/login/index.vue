<template>
    <div class='login-container'>
        <el-form class="login-form" ref="login-form" :model="user">
            <el-form-item>
                <el-input
                    v-model="user.mobile"
                    placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="user.code"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name:'login',
    components: {},
    props: {},
    data() {
        return {
          user: {
            mobile: '',
            code: ''
            }
        }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
         onSubmit() {
            console.log('submit!');
      }
    },
};
</script>

<style scoped lang="less">
    .login-container {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('./login_bg.jpg') no-repeat;
        background-size: cover;
        .login-form{
            background-color: #fff;
            padding: 50px;
            min-width: 300px
        }
    }
</style>


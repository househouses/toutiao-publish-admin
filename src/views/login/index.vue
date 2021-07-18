<template>
    <div class='login-container'>
        <el-form class="login-form" ref="login-form" :model="user" :rules="rules">
            <div class="login-head">
            </div>
            <el-form-item prop="mobile">
                <el-input
                    v-model="user.mobile"
                    placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input
                    v-model="user.code"
                    placeholder="请输入验证码"></el-input>
            </el-form-item>
            <el-form-item prop="agree">
                <el-checkbox v-model="user.agree">我已阅读并同意用户协议与隐私条款</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button class="login-btn" :loading="isLoading" type="primary" @click="onLogin">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { login } from '@/api/user'
export default {
    name:'login',
    components: {},
    props: {},
    data() {
        return {
          user: {
            mobile: '13911111111',//13911111111
            code: '246810',//246810
            agree:false
            },
          isLoading:false,
          rules:{
              mobile:[
                  {required:true,message:'请输入手机号',trigger:'change'},
                  {pattern:/1[3|5|7|8|9]\d{9}$/,message:'请输入正确的号码格式',trigger:'change'}
              ],
              code:[
                  {required:true,message:'验证码不能为空',trigger:'change'},
                  {pattern:/^\d{6}$/,message:'验证码格式不正确',trigger:'change'}
              ],
              agree:[
                  {
                      //自定义校验规则
                      //验证通过,callback()
                      //验证失败,callback(new Error())
                      validator:(rule,value,callback)=>{
                          if(value){
                              callback()
                          }else{
                              callback(new Error('请勾选同意用户协议'))
                          }
                      },
                      trigger:'change'
                }
              ]
          }
        }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
        login(){
            this.isLoading = true
            //验证通过，提交登录
            login(this.user).then(res=>{
                this.$message({
                    message:'登录成功',
                    type: 'success'
                })
                this.isLoading = false
                //将登陆成功返回的用户信息保存在本地存储
                window.localStorage.setItem('user',JSON.stringify(res.data.data))
                this.$router.push({
                    name:'home'
                })
            }).catch(err=>{
                console.log(err);
                this.$message.error('登录失败')
                this.isLoading = false
            })
        },
        onLogin() {
            //表单验证
            this.$refs['login-form'].validate((valid)=>{
                if(!valid){
                    return
                }
                this.login()
            })
            //处理后端响应结果
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
        .login-head{
            width: 259px;
            height: 57px;
            background: url('./logo_index.png') no-repeat;
            padding-bottom: 20px;
        }
        .login-form{
            background-color: #fff;
            padding: 30px;
            min-width: 300px
        }
        .login-btn {
            width: 100%;
        }
    }
</style>


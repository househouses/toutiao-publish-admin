<template>
  <el-container class="layout-container">
    <el-aside class="aside" width="auto"><app-aside :is-collapse='isCollapse' class="aside-menu" /></el-aside>
    <el-container>
      <el-header class="header">
        <div class="title">
          <i
            :class="{
              'el-icon-s-fold':!isCollapse,
              'el-icon-s-unfold':isCollapse
            }"
            @click="isCollapse = !isCollapse"
          ></i>
          <span>江苏传智博客教育科技有限公司</span>
        </div>
        <el-dropdown>
          <div class="avatar-wrap">
            <img class="avatar" :src="user.photo" alt="">
            <span>{{user.name}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <!-- <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span> -->
          <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item @click.native="onLogout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="main">
          <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getUserProfile } from '@/api/user.js'
import AppAside from './components/Aside.vue'
export default {
  name: "Layout",
  components: {
      AppAside
  },
  props: {},
  data() {
    return {
      user:{},
      isCollapse:true
    };
  },
  computed: {},
  watch: {},
  created() {
    this.loadUserProfile()
  },
  mounted() {
  },
  methods: {
    loadUserProfile(){
      getUserProfile().then(res=>{
        this.user = res.data.data
      })
    },
    onLogout(){
      this.$confirm('确认退出吗?', '退出提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          window.localStorage.removeItem('user')
          this.$router.push('/login')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          })        
        })
    }
  },
}
</script>

<style scoped lang="less">
.layout-container{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .aside{
        background-color: #D3DCE6;
        .aside-menu{
            height: 100%;
        }
    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
    }
    .main{
        background-color: #E9EEF3;
    }
    .avatar-wrap{
      display: flex;
      align-items: center;
      cursor: pointer;
      .avatar{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
}
</style>

<template>
    <el-menu
      default-active="/"
      class="nav-menu"
      background-color="#002033"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="isCollapse"
      :collapse-transition = "false"
      >
      <router-link class="home-logo" to="/"><img :src="logoUrl" alt=""></router-link>
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/article">
        <i class="el-icon-document"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
      <el-menu-item index="/image">
        <i class="iconfont icon-image"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
      <el-menu-item index="/publish">
        <i class="iconfont icon-publish"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="/comment">
        <i class="iconfont icon-comment"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="/fans">
        <i class="el-icon-setting"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>
      <el-menu-item index="/settings">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name:'Aside',
    components: {},
    props: ['is-collapse'],
    data() {
        return {
          logoUrl:require('./logo_admin.png')
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {},
};
</script>

<style scoped lang="less">
  .home-logo{
    display: inline-block;
    margin: 15px;

  }
  .nav-menu{
    .iconfont{
      margin-right: 10px;
      padding-left: 5px;
    }
  }
</style>

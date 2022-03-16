<template>
  <el-header style="background:#979393">
      <div class="l-content">
          <el-button plain @click="EditCollapse" icon="el-icon-menu" size="mini"></el-button>
          <!-- <h3 style="color:#fff">首页</h3> -->
          <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
          </el-breadcrumb>
      </div>
      <div class="r-content">
          <el-dropdown szie="mini" trigger="click">
              <span > 
                  <img class="user" :src="userImg">
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
      </div>
  </el-header>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name:'CommonHeader',
        data() {
            return {
                userImg:require("../assets/images/user.png")
            }
        },
        methods:{
            EditCollapse(){
                this.$store.commit('CollapseMenu')
            }
        },
        computed:{
            ...mapState({
                tags:state =>state.tab.tableList
            })
        }
    }
</script>

<style lang="less" scoped>
header{
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    background: #979393
}
.l-content{
    display: flex;
    align-items: center;
    .el-button{
        margin-right: 20px;
    }
}
.r-content{
    .user{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}

</style>
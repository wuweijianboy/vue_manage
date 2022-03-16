<template>
   <div>
        <el-container style="height:100%">
            <el-aside width="auto">
                <commonaside/>
            </el-aside>
            <el-container>
                <el-header>
                    <commonheader/>
                </el-header>
               <commontag/>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
   </div>
</template>

<script>

    import commonaside from '../src/components/CommonAside'
    import commonheader from '../src/components/CommonHeader'
    import commontag from '../src/components/CommonTag'
    export default {
        name:'Home',
        components:{
            commonaside,commonheader,commontag
        }
    }
</script>

<style scoped>
.el-header{
    background: #979393;
}
.el-amin{
    padding-top: 0;
}
</style>
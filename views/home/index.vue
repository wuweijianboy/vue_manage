<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top:20px">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="userImg">
                    <div class="userInfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2021-7-19</span></p>
                    <p>上次登录地点：<span>杭州</span></p>
                </div>
            </el-card>
            <el-card  style="margin-top:20px; height:496px">
               <el-table :data="tableData">
                   <el-table-column v-for="(val,key) in tableProp" :key="key" :prop="key" :label="val"></el-table-column>
               </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="margin-top:20px">
            <div class="num">
                <el-card  v-for="item in countData" :key="item.name" :body-style="{display:'flex', padding:0 }">
                    <i class="icon" :class="'el-icon-'+item.icon" :style="{background: item.color}"></i>
                    <div class="detail">
                        <p class="num">￥{{ item.value }}</p>
                        <p class="txt">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <div>
                <el-card style="height:280px,">
                <div style="height:280px" ref="Echarts">

                </div>
            </el-card>
            </div>
            <div class="graph" style="height:260px">
                <el-card style="height:260px">
                    <div style="height:240px" ref="userEcharts">

                    </div>
                </el-card>
                <el-card style="height:260px">
                    <div style="height:240px" ref="videoEcharts">

                    </div>
                </el-card>
            </div>
        </el-col>
        
    </el-row>
</template>

<script>
    import {getData} from '../../api/data.js'
    import * as echarts from 'echarts'
    export default {
        name:'home',
        data() {
            return {
                userImg:require('../../src/assets/images/user.png'),
                tableData: [],
                tableProp:{
                    name: '课程',
                    todayBuy: '今日购买',
                    monthBuy: '本月购买',
                    totalBuy: '总购买'
                }, 
                countData: [
                    {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                    },
                    {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                    },
                    {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                    },
                    {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                    },
                    {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                    },
                    {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                    },
                ],
            }   
        },
        mounted(){
           getData().then(res =>{
               const {code,data} = res.data
               if(code === 20000){
                   this.tableData = data.tableData
                   const order = data.orderData
                   const xData = order.date
                   const keyArray =  Object.keys(order.data[0])
                   const series = []
                   keyArray.forEach(key =>{
                       series.push({
                           name:key,
                           data:order.data.map(item=>item[key]),
                           type:'line'
                       })
                   })

                   const option = {
                       xAxis:{
                           data: xData
                       },
                       yAxis:{},
                       legend:{
                           data:keyArray
                       },
                       series
                   }
                   const E = echarts.init(this.$refs.Echarts)
                   E.setOption(option)

                   //柱状图
                    const user =   {
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: ['新增用户', '活跃用户']
                        },
                        xAxis: [
                            {
                            type: 'category',
                            // prettier-ignore
                            data: data.userData.map(item=>item.date)
                            }
                        ],
                        yAxis: [
                            {
                            type: 'value'
                            }
                        ],
                        series: [
                            {
                                name:'新增用户',
                                type:'bar',
                                data:data.userData.map(item=>item.new)
                            },
                            {
                                name:'活跃用户',
                                type:'bar',
                                data:data.userData.map(item=>item.active)
                            }
                        ]
                    }
                    const userE = echarts.init(this.$refs.userEcharts)
                    userE.setOption(user)

                    //饼图
                    const video =  {
                        tooltip: {
                            trigger: 'item'
                        },
                        // legend: {
                        //     orient: 'vertical',
                        //     left: 'right'
                        // },
                        series: [
                            {
                            name: 'Access From',
                            type: 'pie',
                            radius: '50%',
                            data: data.videoData.map(item=>item),
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                            }
                        ]
                    }
                    const videoE = echarts.init(this.$refs.videoEcharts)
                    videoE.setOption(video)
                }
               console.log(res.data)
           })
        }
    }   
</script>

<style>

</style>
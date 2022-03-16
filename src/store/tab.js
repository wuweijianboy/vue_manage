// import Cookie from 'js-cookie'



export default{
    state:{
        isCollapse:false,
        tableList:[
            {
                path:'home',
                name:'home',
                label:'首页',
                icon:'home'
            }
        ],
        currentMenu:null,
        menu:[
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'home'
              },
              {
                path: '/mall',
                name: 'mall',
                label: '商品管理',
                icon: 'video-play',
                url: 'mall'
              },
              {
                path: '/user',
                name: 'user',
                label: '用户管理',
                icon: 'user',
                url: 'user'
              },
              {
                label: '其他',
                icon: 'location',
                children: [
                  {
                    path: '/page1',
                    name: 'page1',
                    label: '页面1',
                    icon: 'setting',
                    url: 'other/pageOne'
                  },
                  {
                    path: '/page2',
                    name: 'page2',
                    label: '页面2',
                    icon: 'setting',
                    url: 'other/pageTwo'
                  }
                ]
              }
        ]
    },
    mutations:{
        CollapseMenu(state){
            state.isCollapse = !state.isCollapse;
            // console.log("222222"+state.isCollapse)
        },
        selectMenu(state,val){
            if(val.name !=='home'){
                state.currentMenu = val
                const result = state.tableList.findIndex(item => item.name === val.name)
                if(result === -1){
                    state.tableList.push(val)
                }
            }else{
                state.currentMenu = null
            }
            console.log(state.tableList)
        },
        closeTag(state,val){
            const result = state.tableList.findIndex(item => item.name === val.name)
            state.tableList.splice(result,1)
        },
        // setMenu(state,val){
        //     state.menu = val
        //     Cookie.set('menu',JSON.stringify(val))

        // },
        // clearMenu(state){
        //     state.menu = []
        //     Cookie.remove('menu')
        // },
        // addMenu(state,router){
        //     if(!Cookie.get('menu')){
        //         return
        //     }
        //     const menu = JSON.parse(Cookie.get('menu'))
        //     state.menu = menu
        //     const menuArray = []
        //     menu.forEach(item => {
        //         if (item.children){
        //             item.children = item.children.map(item=>{
        //                 item.component = ()=> import(`../../views/${item.url}`)
        //                 return item
        //             })
        //             menuArray.push(...item.children)
        //         }else{
        //             item.component = ()=> import(`../../views/${item.url}`)
        //             menuArray.push(item)
        //         }
        //     });
        //     //路由的动态添加
        //     menuArray.forEach(item =>{
        //         router.addRoutes('Main',item)
        //     })
        // }
    }
}
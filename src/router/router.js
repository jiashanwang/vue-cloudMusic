import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router=new VueRouter({
    routes:[
        {path:'/findMusic',component:require("../views/findMusic.vue"),
        children:[
            {
                 path:"/findMusic/recommend",
                 component :require("../views/recommend.vue")
            },
            {
                 path:"/findMusic/ranking",
                 component:require("../views/ranking.vue")
            }
        ]
        },
        {path:'/personalFM',component:require("../views/personalFM.vue")},
        {path:'/MV',component:require("../views/MV.vue")},
        {path:'/friends',component:require("../views/friends.vue")},
        {path:'/iTunes',component:require("../views/iTunes.vue")},
        {path:'/download',component:require("../views/download.vue")},
        {path:'/myFavorite',component:require("../views/myFavorite.vue")}
        // {path:'/findMusic/recommend',component:require("../views/recommend.vue")},
    ]
})
export default router

   

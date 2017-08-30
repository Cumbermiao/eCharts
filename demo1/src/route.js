import Vue from 'Vue';
import VueRouter from 'vue-router';
import chart1 from './components/chart1.vue'
Vue.use(VueRouter)
const router= new VueRouter({
    routes:[
        {path:'/chart1',component:chart1}
    ]
})

export default router
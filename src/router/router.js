import VueRouter from "vue-router";
import login from "../components/Registration_login.vue"
import page from "../components/Registration_page.vue"

const routers = new VueRouter({
    // mode: 'history',
    routes: [{
        path: '/',
        name: 'Login',
        component: login
    },{
        path: '/Page',
        name: 'Page',
        component: () =>
            import ('../components/Registration_page')
    }]
})
export default routers
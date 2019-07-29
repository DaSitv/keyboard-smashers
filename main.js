Vue.use(VueMaterial.default)
Vue.use(VueRouter)

const Sezione_1 = Vue.component('sezione1',{
    data(){
        return{
            titolo:"Questa è la homepage",
            sezione:"Sezione 1"
        }
    },
    template: `
    <h4>{{titolo}}</h4>
    <h2>{{sezione}}</h2>
    <h2>Sono un pezzo di culo</h2>
    `}
)

const Sezione_2 = Vue.component('sezione2',{
    data(){
        return{
            titolo:"Questa è la seconda pagina",
            sezione:"Sezione 2"
        }
    },
    template: `
        <h2>{{titolo}}</h2>
        <h2>{{sezione}}</h2>
    `}
)

const Sezione_3 = Vue.component('sezione3',{
    data(){
        return{
            titolo:"Questa è la terza pagina",
            sezione:"Sezione 3"
        }
    },
    template: `
        <h2>{{titolo}}</h2>
        <h2>{{sezione}}</h2>
    `}
)

const Sezione_4 = Vue.component('sezione4',{
    data(){
        return{
            titolo:"Questa è la quarta pagina",
            sezione:"Sezione 4"
        }
    },
    template: `
        <h2>{{titolo}}</h2>
        <h2>{{sezione}}</h2>
    `}
)


const router = new VueRouter({
    routes: [
        {path: '/sezione1', component: Sezione_1},
        {path: '/sezione2', component: Sezione_2},
        {path: '/sezione3', component: Sezione_3},
        {path: '/sezione4', component: Sezione_4},
        {path: '*', component: Sezione_1}
    ]
})

new Vue({
    router: router,
    el: '#app',
})


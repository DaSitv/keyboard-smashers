Vue.use(VueMaterial.default)
Vue.use(VueRouter)

const Sezione_1 = Vue.component('sezione1',{
    data(){
        return{
            titolo:"Il Rovereto Online",
            sezione:"",
            products: [                 //Questa poi sparisce per fare posto ai dati dinamici
                {
                    id:"1",
                    nome:"Pupazzo di pezza",
                    descrizione:"Non ha fatto effetto affatto"
                },{
                    id:"2",
                    nome:"Nave di stuzzichini",
                    descrizione:"Un grande ammasso di legno"
                },{
                    id:"3",
                    nome:"Samsung Galaxy Grand neo",
                    descrizione:"Non è molto, ma è un lavoro onesto"
                },{
                    id:"4",
                    nome:"M1 Abrams",
                    descrizione:"Non è veloce, ma arriva ovunque"
                },{
                    id:"5",
                    nome:"44 gatti",
                    descrizione:"Non possono stare in fila per 6, ma a loro non interessa e lo fanno comunque"
                },{
                    id:"6",
                    nome:"rofllmao",
                    descrizione:"fksgjdvb"
                },
            ],
        }
    },
    template: `
    <div>
            <h2 class="barra_titolo" align="center">{{titolo}}</h2>
                <product-box v-for="product in products" :key="" :item="product">
                </product-box>      
    </div>`
}
)

const Sezione_2 = Vue.component('sezione2',{
    data(){
        return{
            titolo:"Il Rovereto Online",
            sezione:""
        }
    },
    template: `
    <div>
        <h2 class="barra_titolo" align="center">{{titolo}}</h2>
    </div>`}
)

const Sezione_3 = Vue.component('sezione3',{
    data(){
        return{
            titolo:"Il Rovereto Online",
            sezione:""
        }
    },
    template: `
    <div>
        <h2 class="barra_titolo" align="center">{{titolo}}</h2>
    </div>`}
)

Vue.component("product-box", {
    template:`
        <md-card style="width: 700px;
                        margin: 12px;
                        display: inline-block;
                        vertical-align: top;">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{item.nome}}</div>
                </md-card-header-text>
                <md-card-media md-medium>
                    <img v-bind:src="'https://picsum.photos/240/240?image' + item.id" alt="People">
                </md-card-media>
                </md-card-header>

            <md-card-content>
                {{item.descrizione}}
            </md-card-content>
            
            <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>   
            </md-card-actions>
        </md-card>
    `,
    props: ['item']
});

const Sezione_4 = Vue.component('sezione4',{
    data(){
        return{
            titolo:"Il Rovereto Online",
            sezione:""
        }
    },
    template: `
    <div>
        <h2 class="barra_titolo" align="center">{{titolo}}</h2>
    </div>`}
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
    data(){
        return{
            menuVisible : 'false'
        }
    }
})


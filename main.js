Vue.use(VueMaterial.default)
Vue.use(VueRouter)

const Sezione_1 = Vue.component('sezione1',{
    data(){
        return{
            titolo:"Prova cards",
            sezione:"Sezione 1",
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
                },
            ],
        }
    },
    template: `
    <div>
        <h2>{{titolo}}</h2>
        <h2>{{sezione}}</h2>
        <div>
            <product-box v-for="product in products" :key="" :item="product">
            </product-box>
        </div>
    </div>`
}
)

const Sezione_2 = Vue.component('sezione2',{
    data(){
        return{
            titolo:"Questa è la seconda pagina",
            sezione:"Sezione 2"
        }
    },
    template: `
    <div>
        <h2>{{titolo}}</h2>
        <h2>{{sezione}}</h2>
    </div>`}
)

const Sezione_3 = Vue.component('sezione3',{
    data(){
        return{
            titolo:"Questa è la homepage",
            sezione:"Sezione 1"
        }
    },
    template: `
    <div>
        <h2>{{titolo}}</h2>
        <h2>{{sezione}}</h2>
        <h2>Sono un pezzo di culo</h2>
    </div>`}
)

Vue.component("product-box", {
    template:`
        <md-card style="width: 320px;
                        margin: 4px;
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
            titolo:"Questa è la quarta pagina",
            sezione:"Sezione 4"
        }
    },
    template: `
    <div>
        <h2>{{titolo}}</h2>
        <h2>{{sezione}}</h2>
    </div>`}
)

<<<<<<< Updated upstream
=======
Vue.component("product-box", {
    data(){
        return{
            showDialog: false
        }
        },
    methods: {
        mostra_articolo(){
            console.log(this.showDialog);
            this.showDialog = true;
            console.log(this.showDialog);
            showDialog=this.showDialog;
            return showDialog;
        }
    },
    template:`
        <md-card md-with-hover id="card" align="left" style="width: 250px;
                                                             max-height: fit-content;
                                                             margin: 15px;
                                                             display: inline-block;
                                                             vertical-align: top;
                                                             padding: 0px;">
        
            <md-ripple>                                                    
                <div @click="showDialog = true">

                    <md-card-header>
                        <md-card-header-text>
                            <div class="md-title">{{item.nome}}</div>
                        </md-card-header-text>
                    </md-card-header>
                    <br>

                    <md-card-media md-medium>
                        <img v-bind:src="'https://picsum.photos/240/240?image' + item.id" alt="People" style="padding: 10px;">
                    </md-card-media>

                    <br><br>


                    <md-card-content>
                        {{item.descrizione}}
                    </md-card-content>

                    <div>      
                        <md-dialog  :md-active.sync="showDialog">
                            <md-dialog-actions>
                                <md-button style="position: fixed;" @click="showDialog=false"><md-icon>clear</md-icon></md-button>
                            </md-dialog-actions>

                            <md-dialog-title>{{item.nome}}</md-dialog-title>

                            <md-dialog-media md-large   >
                            <img v-bind:src="'https://picsum.photos/240/240?image' + item.id" alt="People" >
                            </md-dialog-media>

                            <md-dialog-content md-dynamic-height md->
                                <span class="md-subheading">{{item.articolo}}</span><br>
                                <span class="md-body-2">{{item.autore}}</span>
                            </md-dialog-content>

                        </md-dialog>

                    </div>

            </md-ripple>               
        </md-card>
    `,
    props: ['item']
});

>>>>>>> Stashed changes

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


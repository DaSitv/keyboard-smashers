  
Vue.config.devtools = true;
Vue.use(VueMaterial.default)
Vue.use(VueRouter)

const Sezione_1 = Vue.component('sezione1',{
    data(){
        return{
            sezione:"Home",
            
            products: [                 //Questa poi sparisce per fare posto ai dati dinamici
                {
                    id:"1",
                    nome:"Pupazzo di pezza",
                    descrizione:"Non ha fatto effetto affatto",
                    articolo:"tante coseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                    autore:"pippo"
                },{
                    id:"2",
                    nome:"Nave di stuzzichini",
                    descrizione:"Un grande ammasso di legno",
                    articolo:"tante cose",
                    autore:""
                },{
                    id:"3",
                    nome:"Samsung Galaxy Grand neo",
                    descrizione:"Non è molto, ma è un lavoro onesto",
                    articolo:"tante cose",
                    autore:""
                },{
                    id:"4",
                    nome:"M1 Abrams",
                    descrizione:"Non è veloce, ma arriva ovunque",
                    articolo:"tante cose",
                    autore:""
                },{
                    id:"5",
                    nome:"44 gatti",
                    descrizione:"Non possono stare in fila per 6, ma a loro non interessa e lo fanno comunque",
                    articolo:"tante cose",
                    autore:""
                },{
                    id:"6",
                    nome:"rofllmao",
                    descrizione:"fksgjdvb",
                    articolo:"tante cose",
                    autore:""
                },
            ],           
        }
        
    },
    template: `
            <div align="center">
                <product-box v-for="product in products" :key="" :item="product">
                </product-box>  
            </div>`
}
)

const Sezione_2 = Vue.component('sezione2',{
    data(){
        return{
            sezione:"Sport",
            products: [                 //Questa poi sparisce per fare posto ai dati dinamici
                {
                    id:"1",
                    nome:"cambia cambia",
                    descrizione:"certo che cambia",
                    articolo:"tante cose",
                    autore:""
                },{
                    id:"2",
                    nome:"ovvio che cambia",
                    descrizione:"sicuro che cambia",
                    articolo:"tante cose",
                    autore:""
                },{
                    id:"3",
                    nome:"te lo avevo detto che cambiava",
                    descrizione:"vero lo avevi detto che cambiava",
                    articolo:"tante cose",
                    autore:""
                },{
                    id:"4",
                    nome:"M1 Abrams",
                    descrizione:"lalalalalal bubububbu gigigig hahaha uuuu ii ggggggg ddddddd ffffff eeeeeeeeee qqqqq wwwwwww cccccccc xxxxxxxxs sss kk lakfcvsbdv ilkfbvs asdhbcvs ",
                    articolo:"tante cose",
                    autore:""
                },{
                    id:"5",
                    nome:"44 gatti",
                    descrizione:"Non possono stare in fila per 6, ma a loro non interessa e lo fanno comunque",
                    articolo:"tante cose",
                    autore:""
                },{
                    id:"6",
                    nome:"rofllmao",
                    descrizione:"fksgjdvb",
                    articolo:"tante cose",
                    autore:""
                },
            ],
        }
    },
    template: `
            <div align="center">
                <product-box v-for="product in products" :key="" :item="product">
                </product-box>      
            </div>`
}
)

const Sezione_3 = Vue.component('sezione3',{
    data(){
        return{
            sezione:"Mondo",
            products: [                 //Questa poi sparisce per fare posto ai dati dinamici
                {
                    id:"1",
                    nome:"Pupazzo di pezza",
                    descrizione:"Non ha fatto effetto affatto",
                    articolo:"tante cose",
                    autore:"Andrea"
                },{
                    id:"2",
                    nome:"Nave di stuzzichini",
                    descrizione:"Un grande ammasso di legno",
                    articolo:"tante cose",
                    autore:"Luca"
                },{
                    id:"3",
                    nome:"Samsung Galaxy Grand neo",
                    descrizione:"Non è molto, ma è un lavoro onesto",
                    articolo:"tante cose",
                    autore:"Pasquale Pratticò"
                },{
                    id:"4",
                    nome:"M1 Abrams",
                    descrizione:"Non è veloce, ma arriva ovunque",
                    articolo:"tante cose",
                    autore:"Abramo Lincoln"
                },{
                    id:"5",
                    nome:"44 gatti",
                    descrizione:"Non possono stare in fila per 6, ma a loro non interessa e lo fanno comunque",
                    articolo:"Non possono stare in fila per 6, ma a loro non interessa e lo fanno comunque",
                    autore:"Zecchino d'oro"
                },{
                    id:"6",
                    nome:"rofllmao",
                    descrizione:"fksgjdvb",
                    articolo:"tante cose",
                    autore:""
                },
            ],
        }
    },
    template: `
            <div align="center">
                <product-box v-for="product in products" :key="" :item="product">
                </product-box>      
            </div>`
}
)

const Sezione_4 = Vue.component('sezione4',{
    data(){
        return{
            sezione:"Economia",
            products: [                 //Questa poi sparisce per fare posto ai dati dinamici
                {
                    id:"1",
                    nome:"Pupazzo di pezza",
                    descrizione:"Non ha fatto effetto affatto",
                    articolo:"tante cose",
                    autore:""
                },{
                    id:"2",
                    nome:"Nave di stuzzichini",
                    descrizione:"Un grande ammasso di legno",
                    articolo:"tante cose",
                    autore:""
                },{
                    id:"3",
                    nome:"Samsung Galaxy Grand neo",
                    descrizione:"Non è molto, ma è un lavoro onesto",
                    articolo:"tante cose",
                    autore:""
                },{
                    id:"4",
                    nome:"M1 Abrams",
                    descrizione:"Non è veloce, ma arriva ovunque",
                    articolo:"tante cose",
                    autore:""
                },{
                    id:"5",
                    nome:"44 gatti",
                    descrizione:"Non possono stare in fila per 6, ma a loro non interessa e lo fanno comunque",
                    articolo:"tante cose",
                    autore:""
                },{
                    id:"6",
                    nome:"rofllmao",
                    descrizione:"fksgjdvb",
                    articolo:"tante cose",
                    autore:""
                },
            ],
        }
    },
    template: `
            <div align="center">
                <product-box v-for="product in products" :key="" :item="product">
                </product-box>      
            </div>`
}
)

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
        },


    },
    template:`

        <md-card class="flip-card" md-with-hover style="width: 240px; 
                                                        height: 240px; 
                                                        display: inline-block; 
                                                        margin: 15px; 
                                                        padding: 0px; 
                                                        vertical-align: top;">

            <md-ripple>

                <div class="flip-card-inner">
    
                    <div class="flip-card-front">

                        <img v-bind:src="'https://picsum.photos/240/240?image' + item.id" alt="People" style="padding: 0px;">

                    </div>

                    <div class="flip-card-back">

                        <h1>{{item.nome}}</h1>
                        <p>{{item.descrizione}}</p>

                    </div>
                </div>
            </md-ripple>
        </md-card>
  
    `,
    props: ['item']
});



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
            menuVisible : false,
        }
    }
})

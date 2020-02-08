  
Vue.config.devtools = true;
Vue.use(VueMaterial.default)
Vue.use(VueRouter)

const Sezione_1 = Vue.component('sezione1',{
    data(){
        return{
            titolo:"Il Rovereto Online",
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
    <div id="contenitore" align="center">
        <div id="pagina" align="center" style="padding: 10px;
                                               box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(0, 0, 0, 0.24);
                                               max-width: 950px;">
        
            <div align="center">
                <h2 class="barra_titolo" align="center">{{titolo}}</h2>
                <product-box v-for="product in products" :key="" :item="product">
                </product-box>  
            </div>
        </div>    
    </div>`
}
)

const Sezione_2 = Vue.component('sezione2',{
    data(){
        return{
            titolo:"Il Rovereto Online",
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
    <div id="contenitore" align="center">
        <div id="pagina" align="center" style="padding: 10px;
                                               box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(0, 0, 0, 0.24);
                                               max-width: 950px;">
    
            <div align="center">
                <h2 class="barra_titolo" align="center">{{titolo}}</h2>
                <product-box v-for="product in products" :key="" :item="product">
                </product-box>      
            </div>
        </div>
    </div>`
}
)

const Sezione_3 = Vue.component('sezione3',{
    data(){
        return{
            titolo:"Il Rovereto Online",
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
    <div id="contenitore" align="center">
        <div id="pagina" align="center" style="padding: 10px;
                                               box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(0, 0, 0, 0.24);
                                               max-width: 950px;">
            <div align="center">
                <h2 class="barra_titolo" align="center">{{titolo}}</h2>
                <product-box v-for="product in products" :key="" :item="product">
                </product-box>      
            </div>
        </div>
    </div>`
}
)

const Sezione_4 = Vue.component('sezione4',{
    data(){
        return{
            titolo:"Il Rovereto Online",
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
    <div id="contenitore" align="center">
        <div id="pagina" align="center" style="padding: 10px;
                                               box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(0, 0, 0, 0.24);
                                               max-width: 950px;">
            <div align="center">
                <h2 class="barra_titolo" align="center">{{titolo}}</h2>
                <product-box v-for="product in products" :key="" :item="product">
                </product-box>      
            </div>
        </div>
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



        //è tutto commentato perché senza che funzioni perfettamente sbarella tutta l'app; il database è ancro da creare.//

        /*salva_commento: function(){
            var me = this;
                db.collection("commenti").add({
                    id_articolo: this.id_articolo_corrente,
                    commento: this.commento_inserito,
                    utente: this.utente_inserito
                })
                }
        } */
    },
    template:`
        <md-card md-with-hover id="card" align="left" style="width: 250px;
                                                             max-height: fit-content;
                                                             margin: 15px;
                                                             display: inline-block;
                                                             vertical-align: top;
                                                             padding: 0px;">

            <md-ripple> 

            <div @click="showDialog = true"> <!-- qui dovrebbe esserci un @click="paginaArticolo" o un routerlink -->

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

            </md-ripple>
            <div align="right">
            <hr>
                <md-action>
                    <md-card-expand>
                        <md-card-expand-trigger>
                            <md-button class="md-icon-button">
                                <md-icon>
                                    keyboard_arrow_down
                                </md-icon>
                            </md-button>
                        </md-card-expand-trigger>
            </div>
            <div align="left">
                        <md-card-expand-content>
                            <md-card-content>
                                <div>
                                    lorem ipsum sic tua madre
                                </div>
                            <br>
                            <hr>
                            <br>           
                                <div>
                                    <md-input style="width: 217px" type="text" vue_model="nome_commento" placeholder=" nome"/>
                                </div>
                            <br>
                                <div>
                                    <md-textarea style="width: 217px" type="text" vue_model="testo_commento" rows="3" placeholder=" commento"/>
                                </div>
                                <div align="center">
                                    <md-button class="md-primary md-button"      >Commenta</md-button> 
                                </div>
                            </md-card-content>
                        </md-card-expand-content>
                    </md-card-expand>        
                </md-action>
            </div>

                <div>      

                <md-dialog  :md-active.sync="showDialog">

                    <md-dialog-actions>
                        <md-button style="position: fixed;" @click="showDialog=false"><md-icon>clear</md-icon></md-button>
                    </md-dialog-actions>

                    <md-dialog-title>{{item.nome}}</md-dialog-title>
               
                    <md-card-media md-medium>
                        <div align="center">
                            <img v-bind:src="'https://picsum.photos/240/240?image' + item.id" alt="People" style="padding: 15px;
                                                                                                          height: 400px;
                                                                                                          width: 400px;">
                        </div>
                    </md-card-media>
                
            <br>
                
                <div style="padding: 0px;">

                    <md-dialog-content md-dynamic-height md->
                        <div style="max-width: 400px;"><span class="md-subheading">{{item.articolo}}</span></div><br>
                        <span class="md-body-2">{{item.autore}}</span>
                    </md-dialog-content>

                </div>
                
                </md-dialog>

                </div> 
                        
        </md-card>
    `,
    props: ['item']
});

//è tutto commentato perché senza che funzioni perfettamente sbarella tutta l'app; il database è ancora da creare.//

/* const paginaArticolo = vue.component('paginaArticolo,', {
    template: '#paginaArticolo',
    created: function() {
        var me = this;
        db.collection("articoli").doc(this.$route.params.id).get().then(function(res){
            me.articolo = res.data();
        });

        db.collection("commenti").where("id_articolo", "==", this.$route.params.id).get().then(function(res){
            const list = [];
            res.forEach(function(r) {
                list.push(r.data().commento);
                list.push(r.data().utente)
            });
            me.lista_commenti = list;
        });
    },

    data: function() {
        return {
            articolo: {},
            lista_commenti: [],
            average: 0,
            conta_voti: 0
        }
    }
}); */




/*<template> ora ci sarebbe da creare la pagina che si apre nel momento in cui si clicca sulla card
    (al posto del dialog che fa schifo e non funziona,
     il dialog lo tengo buono per qualcos altro)</template>*/




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
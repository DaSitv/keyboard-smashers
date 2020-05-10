  
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
            sezione:"Azione",
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
            sezione:"Mistero",
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
            sezione:"Divertente",
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

const Sezione_5 = Vue.component('sezione5',{
    data(){
        return{
            sezione:"Divertente",
            products: [                 //Questa poi sparisce per fare posto ai dati dinamici
                {
                    id:"7",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"8",
                    nome:"Titolo",
                    descrizione:"Descrizione",
                    articolo:"Articolo",
                    autore:"autore"
                },
            ],
        }
    },
    template: `
            <div align="center">
                <dettaglio-box v-for="product in products" :key="" :item="product">
                </dettaglio-box>      
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
    <div style="display: inline-block; height: 100%;">

        <md-card class="card" md-with-hover style="width: 240px; 
                                                   height: 240px; 
                                                   display: inline-block; 
                                                   margin: 16px; 
                                                   padding: 0px; 
                                                   vertical-align: top;
                                                   background-color: darkgray;
                                                   margin-top: 100%;
                                                   margin-bottom: 100%;">


            

            <md-ripple>
            <router-link tag="div" to="/sezione5">
                <div class="card-inner">               

                    <img v-bind:src="'https://picsum.photos/240/240?image' + item.id" alt="People" style="padding: 0px;"> 
                    <div class="card-content" style="margin: 16px;">
                        <h1>{{item.nome}}</h1>
                        <p>{{item.descrizione}}</p>
                    </div>
                </div>
            </md-ripple>
        </md-card>
    </div>
    `,
    props: ['item']
});


Vue.component("dettaglio-box", {

    template:`

    <div class="container" style="width: 800px; 
                                  height: 800px; 
                                  display: inline-block; 
                                  margin: 16px; 
                                  padding: 0px;">

    <h2>Carousel Example</h2>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">

      <!-- Indicators -->

      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
  
      <!-- Wrapper for slides -->

      <div class="carousel-inner">
  
        <div class="item active">

            <md-card class="card" md-with-hover style="width: 800px; 
                                                       height: 600px; 
                                                       display: inline-block; 
                                                       margin: 0px; 
                                                       padding: 0px; 
                                                       vertical-align: top;
                                                       background-color: darkgray;">




            <md-ripple>

            <router-link tag="div" to="/sezione5">

            <div class="card-inner">               

            <img v-bind:src="'https://picsum.photos/800/600?image' + item.id" alt="People" style="padding: 0px;"> 

                <div class="card-content" style="margin: 16px;">

                    <h1>{{item.nome}}</h1>
                    <p>{{item.descrizione}}</p>

                </div>
            </div>
            </md-ripple>
            </md-card>
        </div>
  





        <div class="item">
        <img v-bind:src="'https://picsum.photos/800/600?image' + item.id" alt="People" style="padding: 0px;">
          <div class="carousel-caption">
            <h3>Chicago</h3>
            <p>Thank you, Chicago!</p>
          </div>
        </div>
      
        <div class="item">
        <img v-bind:src="'https://picsum.photos/800/600?image' + item.id" alt="People" style="padding: 0px;">
          <div class="carousel-caption">
            <h3>New York</h3>
            <p>We love the Big Apple!</p>
          </div>
        </div>
    





      </div>
  
      <!-- Left and right controls -->

      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>

      </a>

      <a class="right carousel-control" href="#myCarousel" data-slide="next">

        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>

      </a>
    </div>
  </div>







        <md-card class="card_fumetto" style="width: 800px; 
                                             height: 800px; 
                                             display: inline-block; 
                                             margin: 16px; 
                                             padding: 0px;">

            <h1>{{item.nome}}</h1>
            <p>{{item.descrizione}}</p>
            <p>{{item.autore}}</p>


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
        {path: '/sezione5', component: Sezione_5},
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

        var db = firebase.firestore();
        var fumetti = db.collection("fumetti");
        var editore = db.collection("editore");
        var categorie = db.collection("categorie");
        var testo_fumetto = db.collection("testo_fumetto");
        var autore = db.collection("autore");
        var nome = db.collection("nome");
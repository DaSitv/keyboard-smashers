  
Vue.config.devtools = true;
Vue.use(VueMaterial.default)
Vue.use(VueRouter)

const Home = Vue.component('home',{
    data(){
        return{
            sezione:"Home",
            serie1: [                 //Questa poi sparisce per fare posto ai dati dinamici
                {
                    id:"7",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"8",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"9",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"10",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
            ],

            serie2: [
                {
                    id:"11",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"12",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"13",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"14",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
            ],

            serie3: [
                {
                    id:"15",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"16",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"17",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"18",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
            ],

            active: [
                {
                    id:"19",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"20",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"21",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"22",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
        ],
        }
    },
    template: `
            <div align="center" style="margin-top: 13%; margin-bottom: 14%">
                <div class="container">
                    <div class="row">
                        <div class="span12">       
                            <div id="myCarousel" class="carousel slide">
                         
                               <!-- <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                    <li data-target="#myCarousel" data-slide-to="3"></li>
                                </ol> -->
                         
                                <div class="carousel-inner">
                            
                                    <div class="item active">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in active" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>


                                    <div class="item">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in serie1" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>


                                    <div class="item">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in serie2" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>


                                    <div class="item">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in serie3" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>
                 

                            </div>
                 
                            <a class="carousel-control-prev" href="#myCarousel" data-slide="prev" style="color: #f2f2f2; text-decoration: none;">&#10094;</a>
                            <a class="carousel-control-next" href="#myCarousel" data-slide="next" style="color: #f2f2f2; text-decoration: none;">&#10095;</a>

                        </div>
		            </div>
	            </div>
            </div>`
}
)

const Azione = Vue.component('azione',{
    data(){
        return{
            sezione:"Azione",
            serie1: [                 //Questa poi sparisce per fare posto ai dati dinamici
                {
                    id:"7",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"8",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"9",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"10",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
            ],

            serie2: [
                {
                    id:"11",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"12",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"13",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"14",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
            ],

            serie3: [
                {
                    id:"15",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"16",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"17",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"18",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
            ],

            active: [
                {
                    id:"19",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"20",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"21",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"22",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
        ],
        }
    },
    template: `
            <div align="center" style="margin-top: 13%; margin-bottom: 14%">
                <div class="container">
                    <div class="row">
                        <div class="span12">       
                            <div id="myCarousel" class="carousel slide">
                         
                               <!-- <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                    <li data-target="#myCarousel" data-slide-to="3"></li>
                                </ol> -->
                         
                                <div class="carousel-inner">
                            
                                    <div class="item active">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in active" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>


                                    <div class="item">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in serie1" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>


                                    <div class="item">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in serie2" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>


                                    <div class="item">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in serie3" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>
                 

                            </div>

                            <a class="carousel-control-prev" href="#myCarousel" data-slide="prev" style="color: #f2f2f2; text-decoration: none;">&#10094;</a>
                            <a class="carousel-control-next" href="#myCarousel" data-slide="next" style="color: #f2f2f2; text-decoration: none;">&#10095;</a>

                        </div>
		            </div>
	            </div>
            </div>`
}
)

const Mistero = Vue.component('mistero',{
    data(){
        return{
            sezione:"Mistero",
            serie1: [                 //Questa poi sparisce per fare posto ai dati dinamici
                {
                    id:"7",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"8",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"9",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"10",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
            ],

            serie2: [
                {
                    id:"11",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"12",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"13",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"14",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
            ],

            serie3: [
                {
                    id:"15",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"16",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"17",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"18",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
            ],

            active: [
                {
                    id:"19",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"20",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"21",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"22",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
        ],
        }
    },
    template: `
            <div align="center" style="margin-top: 13%; margin-bottom: 14%">
                <div class="container">
                    <div class="row">
                        <div class="span12">       
                            <div id="myCarousel" class="carousel slide">
                         
                               <!-- <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                    <li data-target="#myCarousel" data-slide-to="3"></li>
                                </ol> -->
                         
                                <div class="carousel-inner">
                            
                                    <div class="item active">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in active" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>


                                    <div class="item">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in serie1" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>


                                    <div class="item">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in serie2" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>


                                    <div class="item">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in serie3" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>
                 

                            </div>
                 
                            <a class="carousel-control-prev" href="#myCarousel" data-slide="prev" style="color: #f2f2f2; text-decoration: none;">&#10094;</a>
                            <a class="carousel-control-next" href="#myCarousel" data-slide="next" style="color: #f2f2f2; text-decoration: none;">&#10095;</a>

                        </div>
		            </div>
	            </div>
            </div>`
}
)

const Divertente = Vue.component('divertente',{
    data(){
        return{
            sezione:"Divertente",
            serie1: [                 //Questa poi sparisce per fare posto ai dati dinamici
                {
                    id:"7",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"8",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"9",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"10",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
            ],

            serie2: [
                {
                    id:"11",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"12",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"13",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"14",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
            ],

            serie3: [
                {
                    id:"15",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"16",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"17",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"18",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
            ],

            active: [
                {
                    id:"19",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"20",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"21",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
                {
                    id:"22",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
        ],
        }
    },
    template: `
            <div align="center" style="margin-top: 13%; margin-bottom: 14%">
                <div class="container">
                    <div class="row">
                        <div class="span12">       
                            <div id="myCarousel" class="carousel slide">
                         
                               <!-- <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                    <li data-target="#myCarousel" data-slide-to="3"></li>
                                </ol> -->
                         
                                <div class="carousel-inner">
                            
                                    <div class="item active">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in active" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>


                                    <div class="item">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in serie1" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>


                                    <div class="item">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in serie2" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>


                                    <div class="item">
                                        <div class="row-fluid">
        
                                            <product-box v-for="product in serie3" :key="" :item="product"></product-box>   

                                        </div>
                                    </div>
                 

                            </div>
                 
                            <a class="carousel-control-prev" href="#myCarousel" data-slide="prev" style="color: #f2f2f2; text-decoration: none;">&#10094;</a>
                            <a class="carousel-control-next" href="#myCarousel" data-slide="next" style="color: #f2f2f2; text-decoration: none;">&#10095;</a>

                        </div>
		            </div>
	            </div>
            </div>`
}
)

const Dettaglio = Vue.component('dettaglio',{
    data(){
        return{
            sezione:"Dettaglio",

            pagina1: [                 //Questa poi sparisce per fare posto ai dati dinamici
                {
                    id:"7",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },

            ],

            pagina2: [
                {
                    id:"11",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
    
            ],

            pagina3: [
                {
                    id:"15",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },
            
            ],

            active: [
                {
                    id:"19",
                    nome:"Titolo del fumetto",
                    descrizione:"Descrizione del fumetto",
                    articolo:"Articolo del fumetto?",
                    autore:"autore del fumetto"
                },

        ],
         
        }
    },
    template: `

    <div class="slider-container">
    <span id="slider-image-1"></span>
    <span id="slider-image-2"></span>
    <span id="slider-image-3"></span>
    <span id="slider-image-4"></span>
    <div class="image-container">
        <dettaglio-box v-for="product in active" :key="" :item="product" class="slider-image"></dettaglio-box>
        <dettaglio-box v-for="product in pagina1" :key="" :item="product" class="slider-image"></dettaglio-box>
        <dettaglio-box v-for="product in pagina2" :key="" :item="product" class="slider-image"></dettaglio-box>
        <dettaglio-box v-for="product in pagina3" :key="" :item="product" class="slider-image"></dettaglio-box>
    </div>
    <div class="button-container">
        <a href="#slider-image-1" class="slider-change"></a>
        <a href="#slider-image-2" class="slider-change"></a>
        <a href="#slider-image-3" class="slider-change"></a>
        <a href="#slider-image-4" class="slider-change"></a>
    </div>
</div>

            `
}
)

Vue.component("product-box", {

    template:`
            <md-card class="card" md-with-hover style="width: 240px; 
                                                       height: 240px; 
                                                       display: inline-block; 
                                                       margin: 16px; 
                                                       padding: 0px; 
                                                       vertical-align: top;
                                                       background-color: darkgray;">

                <md-ripple>
                <router-link tag="div" to="/dettaglio">
                    <div class="card-inner">               

                        <img v-bind:src="'https://picsum.photos/240/240?image' + item.id" alt="People" style="padding: 0px;"> 
                            <div class="card-content" style="margin: 16px;">
                                <h1>{{item.nome}}</h1>
                                <p>{{item.descrizione}}</p>
                            </div>
                    </div>
                </md-ripple>
            </md-card>    
    `,
    props: ['item']
});


Vue.component("dettaglio-box", {

    template:`


                    <div>               

                        <img v-bind:src="'https://picsum.photos/240/240?image' + item.id" alt="People" style="padding: 0px;"> 
                  
                    </div>
                
           
    `,
    props: ['item']
});




const router = new VueRouter({
    routes: [
        {path: '/home', component: Home},
        {path: '/azione', component: Azione},
        {path: '/mistero', component: Mistero},
        {path: '/divertente', component: Divertente},
        {path: '/dettaglio', component: Dettaglio},
        {path: '*', component: Home}
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
        var categoria = db.collection("categorie");
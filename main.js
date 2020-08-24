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


<template>
    <div class="v-catalog" style="" >
        catalog
      <div class="filters">
          <v-select
                  :options="categories"
                  @select="sortByCategories"
                  :selected="selected"
          />
      </div>
        <router-link :to="{name: 'vLike', params: {like_data: LIKE}}">
            <div class="button_Cart">
                 {{LIKE.length}} Items
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); color: #20b2aa" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M20.756 5.345A1.003 1.003 0 0 0 20 5H6.181l-.195-1.164A1 1 0 0 0 5 3H2.75a1 1 0 1 0 0 2h1.403l1.86 11.164l.045.124l.054.151l.12.179l.095.112l.193.13l.112.065a.97.97 0 0 0 .367.075H18a1 1 0 1 0 0-2H7.847l-.166-1H19a1 1 0 0 0 .99-.858l1-7a1.002 1.002 0 0 0-.234-.797zM18.847 7l-.285 2H15V7h3.847zM14 7v2h-3V7h3zm0 3v2h-3v-2h3zm-4-3v2H7l-.148.03L6.514 7H10zm-2.986 3H10v2H7.347l-.333-2zM15 12v-2h3.418l-.285 2H15z" fill="#20b2aa"/><circle cx="8.5" cy="19.5" r="1.5" fill="#20b2aa"/><circle cx="17.5" cy="19.5" r="1.5" fill="#20b2aa"/></svg>
            </div>
        </router-link>
        <div class="range-slider">
            <label>
            <input type="range"
                           min="0"
                           max="5000"
                           step="100"
                            class="input_range1"
                           v-model.number="maxPrice"
                           @change="setRangeSlider"

                    >
                <input max="5000"
                       min="0"
                       step="100"
                       type="range"
                       class="input_range2"
                       v-model.number="minPrice"
                       @change="setRangeSlider"

                >


            </label>

        </div>
        <div class="prices">
            <p>{{minPrice}} AMD</p>
            <p>{{maxPrice}} AMD</p>
        </div>
        <div class="v-catalog_list">
            <v-catalog-item
            v-for="plant in this.filteredPlants"
            :key="plant.id"
            :plant_data="plant"
            @addToCart="addToCart"
            style="margin: 30px ;width: 450px"
            />
        </div>

    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item'
    import vSelect from './v-select'
    import {mapActions ,mapGetters} from  'vuex'


    export default {
        name: "v-catalog",
        components:{
            vCatalogItem,
            vSelect
        },
        props:{},
        data(){
            return{
                minPrice: 0,
                maxPrice: 5000,
                categories:[
                    {name: 'All', value: 'All'},
                    {name: 'Deficit Breed', value: 1},
                    {name: 'Common Breed', value: 2},
                ],
                selected: 'All',
                sortedPlants: []
            }

        },
        methods:{
            ...mapActions([
                'GET_PLANTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data){
                this.ADD_TO_CART(data)
          },
            setRangeSlider(){
                if (this.minPrice > this.maxPrice){
                    let tmp = this.maxPrice
                    this.maxPrice = this.minPrice
                    this.minPrice = tmp
                }
                this.sortByCategories()
            },
            sortByCategories(category){
                let vm = this
                this.sortedPlants = [...this.PLANTS]
                this.sortedPlants = this.sortedPlants.filter(function (item) {
                    return item.price >= vm.minPrice && item.price <= vm.maxPrice
                })
                if (category){
                        this.sortedPlants = this.sortedPlants.filter(function (e) {
                        vm.selected === category.name
                        return e.category === category.name
                    })
                }
            },

        },
        mounted() {
            this.GET_PLANTS_FROM_API()
            .then((response)=>{
                if (response.data){
                    console.log('Data arrived')
                    this.sortByCategories()

                }
            })
        },
        computed:{
            ...mapGetters([
                'PLANTS',
                'LIKE'
            ]),
            filteredPlants(){
                if (this.sortedPlants.length){
                    return this.sortedPlants
                }else{
                    return this.PLANTS
                }
            }
        }

    }
</script>

<style  scoped>
    .v-catalog {
        .v-catalog_list {
            align-items: center;
        }
    }
      /*.range-slider{*/
      /*    width: 200px;*/
      /*    margin: auto 16px;*/
      /*    text-align: center;*/
      /*    position: relative;*/

      /*}*/
    /*.range-slider{*/
    /*    top: 0px;*/
    /*    position: relative;*/

    /*}*/
    .prices{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 750px;
    }
    .range-slider svg,
    .range-slider input[type=range] {
        position: absolute;
        left:200px;
        /*bottom: 0;*/
    }

    input[type=range] {
        -webkit-appearance: none;
        width: 20%;

    }
    input[type=range]:focus {
        outline: none;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
        background: lightseagreen;
    }
    input[type=range]:focus::-ms-fill-lower {
        background: lightseagreen;

    }
    input[type=range]:focus::-ms-fill-upper {
        background: lightseagreen;
    }
    input[type=range]::-webkit-slider-runnable-track {
        width: 50%;
        height: 9px;
        cursor: pointer;
        animate: 0.2s;
        align-items: center;
        background: lightseagreen;
        border-radius: 20px;
        box-shadow: none;
        border: 0;
    }
    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0 0 0 #000;
        border: 1px solid #1da1f2;
        height: 18px;
        width: 18px;
        border-radius: 25px;
        background: #fff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -7px;
    }
    input[type=range]::-ms-fill-lower,
    input[type=range]::-ms-fill-upper {
        background: lightseagreen;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
    }
    input[type=range]::-ms-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0 0 0 #000;
        border: 1px solid lightseagreen;
        height: 18px;
        width: 18px;
        border-radius: 25px;

        background: #fff;
        cursor: pointer;
    }

</style>
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);


let store = new Vuex.Store({
    state: {
        plants: [],
        like: [],
    },
    mutations:{
        SET_PLANTS_TO_STATE:(state,  plants) => {
            state.plants = plants
        },
        SET_CART:(state, plant) => {
            if (state.like.length){
                let isProductExists = false;
                state.like.map(function (item) {
                    if (item.id === plant.id){
                        isProductExists = true;
                        item.quantity++
                    }
                })
                if(!isProductExists){
                    state.like.push(plant)
                }
            }else{
                state.like.push(plant)
            }
            console.log(1111111, state)
        },
        REMOVE_FROM_CART:(state, index)=>{
            state.like.splice(index,1)

        },
        DECREMENT:(state, index)=>{
            if(state.like[index].quantity > 1){
                state.like[index].quantity--
            }
        },
        INCREMENT:(state, index)=>{
            state.like[index].quantity++

        }
    },
    actions:{
        GET_PLANTS_FROM_API({commit}) {
            return axios('http://localhost:3000/plants',{
                method: "GET"
            })
                .then((plants) =>{
                    commit('SET_PLANTS_TO_STATE', plants.data)
                    console.log(plants.data)
                    return plants;

                })
                .catch((error)=>{
                    console.log(error)
                    return error
                })

        },
        ADD_TO_CART({commit}, plant){
            commit('SET_CART', plant)
        },
        INCREMENT_CART_ITEM({commit}, index ){
            commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM({commit}, index){
            commit('DECREMENT', index)

        },
        DELLETE_FROM_CART({commit}, index){
            commit('REMOVE_FROM_CART', index)
        }
    },
    getters:{
        PLANTS(state){
            return state.plants
        },
        LIKE(state){
            return state.like
        }
    }
});

export default store;
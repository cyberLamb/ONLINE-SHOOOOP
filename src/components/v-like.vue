<template>
    <div class="v-like">
        <router-link :to="{name: 'catalog'}">
            <div class="button_cart">
                Back to catalog
            </div>
        </router-link>
        <h2>cart</h2>
        <p v-if="!like_data.length">There are no products in cart...</p>
        <vLikeItem
            v-for="(item, index) in like_data"
            :key="item.id"
            :like_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            style="box-shadow: 0 0 8px 0 #999; padding: 16px; margin: 12px"
            @decrement="decrement(index)"
            @increment="increment(index)"
        />
    </div>
</template>

<script>
    import vLikeItem from './v-like-item'
    import {mapActions} from 'vuex'

    export default {
        name: "v-like",
        components:{
            vLikeItem
        },
        props:{
            like_data:{
                type: Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            ...mapActions([
                'DELLETE_FROM_CART',
                'INCREMENT_CART_ITEM',
                'DECREMENT_CART_ITEM'
            ]),
            increment(index){
                this.INCREMENT_CART_ITEM(index)
            },
            decrement(index){
                this.DECREMENT_CART_ITEM(index)
            },
            deleteFromCart(index){
                this.DELLETE_FROM_CART(index)
            }
        }

    }
</script>

<style scoped>

</style>
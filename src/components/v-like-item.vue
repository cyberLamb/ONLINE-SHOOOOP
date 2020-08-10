<template>
    <div class="v-like-item" style="width: 700px;display: flex;justify-content: space-between;flex-wrap: wrap;align-items: center">
        <img style="max-width: 150px ;" :src="like_item_data.url" alt="img">
        <div class="v-like-item_info">
            <p>Item {{like_item_data.cactus.type}}</p>
            <p>Price: {{like_item_data.price}} AMD</p>
        </div>
        <div class="v-like-item_quantity">
            <p>Qty:</p>
            <span class="quantity_btn" @click="decrementItem"> - </span>
            {{like_item_data.quantity}}
            <span class="quantity_btn" @click="incrementItem"> + </span>
        </div>
        <button @click="deleteFromCart" style="background-color:#fff;border: 2px solid lightseagreen ;padding: 15px;outline: none;
">Delete</button>
    </div>
</template>

<script>

    export default {
        name: "v-like-item",
        props:{
            like_item_data: {
                type: Object,
                default() {
                    return {};
                }

            }
        },
        methods:{

            deleteFromCart(){
                this.$emit('deleteFromCart')
            },
            decrementItem(){
                this.$emit('decrement')
            },
            incrementItem(){
                this.$emit('increment')

            }


        },
        mounted() {
            this.$set(this.like_item_data, 'quantity', 1)

        }
    }
</script>

<style lang="scss">
        .v-like-item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;
        }
</style>
<template>
    <div class="v-catalog-item" style="box-shadow: 0 0 8px 0 #e0e0e0;margin-bottom: 8px;padding: 16px;display: inline-block;
">
      <div class="v-catalog-item-in">
          <img style="max-width: 400px ;" :src="plant_data.url" alt="img">
          <p>breed: {{plant_data.cactus.type}}</p>
          <p>Price: {{plant_data.price}} AMD</p>
          <button @click="addToCart" class="v-catalog-item-in_button" >
              Add to Carts
          </button>

      </div>
      </div>

</template>

<script>

    export default {
        name: "v-catalog-item",
        props:{
            plant_data:{
                default(){
                    return{}
                }
            }
        },
        components:{
        },
        computed:{},
        methods:{
            addToCart(){
                this.$emit('addToCart', this.plant_data)
                console.log(this.plant_data)
            }
        }

    }
</script>

<style >

    .v-catalog-item{

    }
</style>
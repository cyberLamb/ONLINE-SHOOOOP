<template>
    <div class="v-main-wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'v-main-wrapper',

    props:{},
    data() {
        return {
            title: 'Maine Wrapper'
        }
    },
    computed: {},
    methods:{},
    watch:{},
}
</script>
<style scoped>
    .v-main-wrapper{
        max-width: 100%;
        margin: 0 auto;
        display: inline-block;
    }
</style>
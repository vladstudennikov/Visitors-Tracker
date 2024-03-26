<template>
    <input type="text" class="form-control" :placeholder="placeholder" :name="name" v-model="inputData">
</template>

<script>
    export default {
        props: {
            placeholder: { type: String },
            name: { type: String }
        },

        data(){
            return {
                inputData: ""
            }
        }
    }
</script>

<style>

</style>
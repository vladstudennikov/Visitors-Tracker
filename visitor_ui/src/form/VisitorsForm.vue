<template>
    <p class="h1 h1-main">Visitors data</p>
    <hr>

    <div v-if="this.errors" class="alert alert-danger" role="alert">
        {{err_msg}}
    </div>

    <p class="h5">General data</p>
    <div class="row">
    
        <div class="col">
            <InputField v-model="surname" placeholder="Surname" name="Surname"></InputField>
        </div>

        <div class="col">
            <InputField v-model="name" placeholder="Name" name="Name"></InputField>
        </div>

        <div class="col">
            <InputField v-model="patronym" placeholder="Patronym" name="Patronym"></InputField>
        </div>

    </div>

    <p class="h5">Address</p>
    <div class="row">

        <div class="col">
            <InputField v-model="city" placeholder="City" name="City"></InputField>
        </div>

        <div class="col">
            <InputField v-model="address" placeholder="Address" name="Address"></InputField>
        </div>

    </div>

    <p class="h5">Passport data</p>
    <div class="row">

        <div class="col">
            <InputField v-model="passport.number" placeholder="Number" name="Number"></InputField>
        </div>

        <div class="col">
            <InputField v-model="passport.issued_on" placeholder="Issued on" name="Issued_on"></InputField>
        </div>

        <div class="col">
            <InputField v-model="passport.issued_by" placeholder="Issued by" name="Issued_by"></InputField>
        </div>

    </div>

    <div id="buttons">
        <DangerButton v-on:click="clearData" image_name="images/delete.png" text="Clear" id="d-button"></DangerButton>
        <SuccessButton v-on:click="postData" image_name="images/plus.png" text="Add" id="s-button"></SuccessButton>
    </div>
</template>

<script>
    import InputField from "./components/InputField"
    import SuccessButton from "./components/SuccessButton"
    import DangerButton from "./components/DangerButton"
    import axios from "axios";

    export default {
        components: { InputField, SuccessButton, DangerButton },

        data() {
            return {
                surname: "",
                name: "",
                patronym: "",
                city: "",
                address: "",
                passport: {
                    number: "",
                    issued_by: "",
                    issued_on: ""
                },

                errors: false,
                err_msg: ""
            }
        },

        methods: {
            async postData() {
                console.log(JSON.stringify(this.$data));
                const json = JSON.stringify({ 
                    surname: this.$data.surname,
                    name: this.$data.name,
                    patronym: this.$data.patronym,
                    city: this.$data.city,
                    address: this.$data.address,
                    passport: {
                        number: this.$data.passport.number,
                        issued_by: this.$data.passport.issued_by,
                        issued_on: this.$data.passport.issued_on
                    }
                 });
                await axios.post('http://127.0.0.1:8080/visitors/post', json, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => { 
                    console.log(res);
                    this.$data.errors = false;
                    this.$data.err_msg = ""; 
                    this.$data.name = "";
                    this.$data.surname = "";
                    this.$data.patronym = "";
                    this.$data.address = "";
                    this.$data.city = "";
                    this.$data.passport.number = "";
                    this.$data.passport.issued_on = "";
                    this.$data.passport.issued_by = "";
                }).catch(err => {
                    this.$data.errors = true;
                    this.$data.err_msg = err.response.data;
                });
                this.clearData();
            },

            clearData() { 
                let s = document.getElementsByTagName("input");
                for (let i of s) {
                    i.value = "";
                } 
            }
        }
    }
</script>

<style>
    .h1{
        padding-top: 10px;
    }

    .h5{
        margin-top: 30px;
    }

    #buttons{
        float: right;
        margin-top: 30px;
    }

    #d-button{
        margin-right: 10px;
    }

    #d-button, #s-button{
        padding-right: 20px;
    }

</style>
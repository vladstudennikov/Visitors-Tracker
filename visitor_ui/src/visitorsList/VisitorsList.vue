<template>
    <div v-if="this.errors" class="alert alert-danger" role="alert">
        Cannot display data about visitors
    </div>

    <div class="visitor" v-for="v in visitors" v-bind:key="v.id">
        <p class="fullname"><strong>{{v.surname}} {{v.name}} {{v.patronym}}</strong></p>
        <p><strong>Address:</strong> {{v.city}}, {{v.address}}</p>
        <p><strong>Passport:</strong> {{v.passport.number}} (issued by {{v.passport.issued_by}} on {{v.passport.issued_on}}) </p>
        <hr>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                visitors: [],
                errors: false,
            }
        },

        mounted() {
            axios.get("http://127.0.0.1:8080/visitors/get").then(res => {
                this.visitors = res.data;
                console.log(this.visitors)
            }).catch(err => {
                if (err.response.status == 404) {
                    this.errors = true;
                }
            })
        },
    }
</script>

<style>
    p{
        padding: 0;
        margin: 0;
    }

    .visitor{
        margin-bottom: 20px;
    }

    .fullname{
        color: green;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .alert {
        margin-right: 10px;
    }
</style>
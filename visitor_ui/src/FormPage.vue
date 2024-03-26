<template>
    <SideBar></SideBar>
    <div id="form">
        <VisitorsForm style="margin-left: 300px;"></VisitorsForm>
    </div>
</template>

<script>
    import SideBar from "./menu/SideBar"
    import VisitorsForm from "./form/VisitorsForm"

    export default {
        components: { SideBar, VisitorsForm }
    }
</script>

<style>
    #form{
        margin-left: 300px;
        margin-right: 20px;
    }
</style>
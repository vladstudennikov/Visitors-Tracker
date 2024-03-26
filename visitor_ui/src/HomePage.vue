<template>
    <SideBar></SideBar>

    <div id="main">
        <p class="h1 h1-main">Visitors</p><hr>
        <VisitorsList></VisitorsList>
    </div>

</template>

<script>
    import SideBar from "./menu/SideBar"
    import VisitorsList from "./visitorsList/VisitorsList";

    export default {
        components: {SideBar, VisitorsList}
    }
</script>

<style>
    #main {
        margin-left: 320px;
    }
</style>
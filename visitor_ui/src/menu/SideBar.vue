<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark inline" style="width: 280px; height: 100vh; position: fixed; z-index: 1; ">
        <topPart style="margin-left: 16px; margin-top: 10px;" image_name="images/users.png" text="Visitors" href="/"></topPart>

        <hr>

        <MenuList></MenuList>
    </div>
</template>

<script>
    import topPart from "./components/topPart";
    import MenuList from "./components/MenuList"

    export default {
        components: {topPart, MenuList}
    }
</script>

<style>

</style>
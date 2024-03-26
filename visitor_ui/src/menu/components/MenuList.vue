<template>
    <ul class="nav nav-pills flex-column mb-auto">
        <ListOption text="List" image_name="images/home.png" href="/"></ListOption>
        <ListOption text="Add Visitor" image_name="images/user.png" href="/add_visitor"></ListOption>
        <ListOption text="About" image_name="images/info.png" href="/about"></ListOption>
    </ul>
</template>

<script>
    import ListOption from "./ListOption"

    export default {
        components: {ListOption}
    }
</script>

<style>

</style>
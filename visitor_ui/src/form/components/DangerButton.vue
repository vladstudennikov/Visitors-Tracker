<template>
    <button type="button" class="btn btn-danger" id="add-recomendation-button">
		<img :src="require('@/' + image_name + '')">
		<span>{{text}}</span>
	</button>
</template>

<script>
    export default {
        props: {
            image_name: { type: String },
            text: { type: String }
        }
    }
</script>

<style>

</style>
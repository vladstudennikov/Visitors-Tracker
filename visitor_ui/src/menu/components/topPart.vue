<template>
    <a :href="href" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
		<img :src="require('@/' + image_name + '')" alt="Logo" class="main_logo">
		<span class="fs-5">{{text}}</span>
	</a>
</template>

<script>
export default {
    props: {
        image_name: { type: String },
        text: { type: String },
        href: { type: String }
    }
}
</script>

<style>
    img {
        margin-right: 15px;
    }
</style>
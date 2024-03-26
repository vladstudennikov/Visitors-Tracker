<template>
    <li class="nav-item">
		<a :href="href" class="nav-link text-white" aria-current="page">
		<img :src="require('@/' + image_name + '')" alt="mainpage" class="logo">{{text}}
		</a>
	</li>
</template>

<script>
    export default {
        props: {
            href: { type: String },
            text: { type: String },
            image_name: { type: String }
        }
    }
</script>

<style>
    li {
        display: flex;
        align-items: flex-end;
    }

    li:hover{
        background-color: #4169E1;
    }
</style>
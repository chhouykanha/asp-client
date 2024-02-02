<template>
        <div class="text-ltc text-bts font-noto">
            <div v-if="$route.path == '/'" class="text-primary font-bold">
                ទំព័រដើម
            </div>

            <div v-if="$route.path == '/category'" class="text-primary font-bold">
                ប្រភេទអត្ថបទ
            </div>
            <div v-if="$route.path == '/post'" class="text-primary font-bold">
                អត្ថបទ
            </div>
            <div v-if="$route.path == '/media'" class="text-primary font-bold">
                បញ្ជីររូបភាព
            </div>
            <div v-if="$route.path == '/single-post'" class="text-primary font-bold">
                អានអត្ថបទ
            </div>

        </div>
</template>

<script>
export default {
    props : ['url']
}
</script>

<style>

</style>
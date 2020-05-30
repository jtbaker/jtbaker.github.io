<template>
    <v-container grid-list-xs>
        <!-- {{ aboutme }} -->
        <span>Test content</span>
    </v-container>
</template>
<script lang="js">


// declare module 'raw-loader!./resources/aboutme.txt'
// import aboutme from 'raw-loader!./resources/aboutme.txt'
// import marked from 'marked'




import Vue from 'vue'
export default Vue.extend({
    data: ()=>({
        name: "Jason",
        aboutme
    })
})
</script>
<style scoped>

</style>
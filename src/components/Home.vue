<template>
    <v-container grid-list-xs>
        {{ name }}
    </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: ()=>({
        name: "Jason"
    })
})
</script>
<style scoped>

</style>
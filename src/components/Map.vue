<template>
    <div ref="mymap" class="mymap fill-height">

    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Map
//, LngLatBounds, LngLat, Popup, NavigationControl 
} from 'mapbox-gl'
import style from './resources/mapboxstyle'

export default Vue.extend({
    data: () => ({
        map: {} as Map
    }),
    mounted() {
        const map = this.map = new Map({
            container: this.$refs.mymap as HTMLElement,
            style
            // transformRequest: function(url, resourceType){
            //     console.log(resourceType)
            //     return {
            //         url: url,
            //         // headers: {
            //         //     // "a"
            //         // }
            //     }
            // }
        })

        map.on('load', ()=>{
            console.log('loaded!')
        })
    }

})
</script>
<style lang="scss" scoped>
@import '../../node_modules/mapbox-gl/dist/mapbox-gl.css';

.mymap{
    // display: flex;
    // flex-grow: inherit;
    // width: 100%;
    // height: 100%;
}

</style>
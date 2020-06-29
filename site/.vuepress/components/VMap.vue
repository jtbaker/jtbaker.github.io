<template>
    <div ref="mymap" class="mymap"></div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Map, Style } from "mapbox-gl";
import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css'

const style = {
  version: 8,
  center: [-97, 38],
  zoom: 4,
  sources: {
    google: {
      type: "raster",
      tiles: ["https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"],
      tileSize: 256,
    },
    msas: {
        type: 'vector',
        tiles: ['https://cdn.jsdelivr.net/gh/jtbaker/data/boundaries/uscounties/{z}/{x}/{y}.pbf']
    },
    roads: {
        type: 'vector',
        tiles: ['https://cdn.jsdelivr.net/gh/jtbaker/data/boundaries/usprimaryroads/{z}/{x}/{y}.pbf']
    },
    parcels: {
        type: 'vector',
        tiles: ['https://cdn.jsdelivr.net/gh/jtbaker/data/boundaries/parcels/{z}/{x}/{y}.pbf']
    }
  },
  layers: [
    {
      id: "satellite",
      source: "google",
      type: "raster",
      layout: {
        visibility: "visible"
      }
    },
    {
        id: "msas",
        source: "msas",
        "source-layer": "uscounties",
        type: "fill",
        paint: {
            // 'fill-color': 'yellow',
            'fill-opacity': 0.1
        }
    },
    {
        id: "msa-lines",
        source: "msas",
        "source-layer": "uscounties",
        type: "line",
        paint: {
            'line-color': 'black',
            'line-width': ["interpolate", ["linear"],["zoom"], 3, 0.2, 12, 3.0]
        }
    },
    {
        id: 'parcel-fill',
        source: 'parcels',
        "source-layer": "parcels",
        type: "fill",
        paint: {
            'fill-color': 'blue',
            'fill-outline-color': 'black',
            "fill-opacity": 0.8
        }
    },
    {
        id: "roads",
        source: "roads",
        "source-layer": "usprimaryroads",
        type: "line",
        paint: {
            "line-color": ["match", ["get", "RTTYP"], "I", "blue", "U", "grey", "S", "yellow",  "black"],
            "line-width": ["interpolate", ["linear"], ["zoom"], 3, 0.2, 12, 6.0]
        }
    }
  ]
}

export default Vue.extend({
    data: ()=>({
        m: {},
        hoverFeatures: []
    }),
    mounted(){
        const m = this.$data.m = new Map({
            container: this.$refs.mymap,
            style: style
        })

        this.$emit('loadMap', this.$data.m)

        m.on('mousemove', ({ point }) => {
            this.hoverFeatures = m.queryRenderedFeatures(point)
            this.$emit('hoverFeatures', this.hoverFeatures)
        })

    }
})
</script>
<style scoped lang="scss">

.mymap{
    width: 100%;
    height: 600px;
}
</style>
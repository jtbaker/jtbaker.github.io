import { Style } from 'mapbox-gl'

export default {
    version: 8,
    center: [-97, 40],
    zoom: 4,
    sources: {
        osm: {
            type: "raster",
            tileSize: 256,
            tiles: [
                "http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
                "http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            ]
        }
    },
    layers: [
        {
            id: 'osm',
            type: 'raster',
            source: 'osm'
        }
    ]
} as Style
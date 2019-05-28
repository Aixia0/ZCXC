<template>
  <div id="map" class="map">
      <button @click="run()">{{msg}}</button>
  </div>
</template> 
<script>
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export default {
  name: "HelloWorld",
  data() {
    return {
        msg:'welcome to Your map'
    };
  },
  methods:{
     run(){
         alert('地图')
     }
  },
  mounted() {
   let myIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,     
      iconSize:     [30, 50], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [15, 50], // point of the icon which will correspond to marker's location
      shadowAnchor: [15, 64],  // the same for the shadow
      popupAnchor:  [0, -40] // point from which the popup should open relative to the iconAnchor

});


    let littleton = L.marker([39.61, -105.02],{icon: myIcon}).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99],{icon: myIcon}).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8],{icon: myIcon}).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23],{icon: myIcon}).bindPopup('This is Golden, CO.');

   let cities = L.layerGroup([littleton, denver, aurora, golden]);

   let map = L.map('map',{
      center: [39.73, -104.99],
      zoom: 6,
      layers:cities
    });
    let tileLayer = L.tileLayer(
      "http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
      {
        subdomains: ["1", "2", "3", "4"],
        attribution: "高德",
        
        
      }
    ).addTo(map);


    //let littleton = L.marker([39.61, -105.02],{icon: myIcon}).bindPopup('This is Littleton, CO.').addTo(map);

  }
};
</script> 
<style  scoped>
.map {
  width: 100%;
  height: calc(100vh);
}
</style>
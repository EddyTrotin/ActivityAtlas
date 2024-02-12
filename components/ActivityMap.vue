<script setup>
import { ref } from 'vue'
const zoom = ref(6)

</script>

<template>
  <div class="h-full">
    <LMap ref="map" :zoom="zoom" :center="[46.519699, 2.892129]">
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base" name="OpenStreetMap" />
      <LMarker :lat-lng="[46.519699, 2.892129]">
        <LPopup>Test</LPopup>
      </LMarker>

    </LMap>

  </div>
</template>


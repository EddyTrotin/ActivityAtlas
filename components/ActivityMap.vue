<script setup>
import { ref } from 'vue'
import { useActivityStore } from '@/stores/activity';
const zoom = ref(6)

const activities = useActivityStore()
// await callOnce(activities.fetch)
//        <!-- <LTooltip>{{ activity.title }}</LTooltip> -->

</script>

<template>
  <div class="h-full">
    <LMap ref="map" :zoom="zoom" :center="[46.519699, 2.892129]">
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base" name="OpenStreetMap" />
      <LMarker v-for="activity in activities.list" :lat-lng="activity.coords"
        @mouseover="activities.current = activity.id">
        <LIcon :icon-url="activities.current === activity.id ? '/red_pin.png' : 'blue_pin.png'" icon-size="38" class-name="blue-600"/>
        <LTooltip>{{ activity.title }}</LTooltip>
      </LMarker>

    </LMap>

  </div>
</template>


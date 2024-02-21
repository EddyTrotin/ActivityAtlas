<script>
import '@/assets/css/main.css'
</script>
<template>
  <div class="h-[10vh] col-span-2 flex justify-center overflow-hidden">
    <SearchBar />
  </div>
  <div class="h-[90vh] flex">
    <div class="w-1/2 pb-2">
      <ActivityList />
    </div>
    <div class="w-1/2">
      <ActivityMap />
    </div>
  </div>
</template>
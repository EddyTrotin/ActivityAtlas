<script>
import '~/assets/css/main.css'
</script>
<template>
  <div class="col-span-2 flex justify-center">
    <SearchBar />
  </div>
  <div class="flex">
    <div class="w-1/3">
      <ActivityList />
    </div>
    <div class="w-2/3">
      <ActivityMap />
    </div>
  </div>
</template>
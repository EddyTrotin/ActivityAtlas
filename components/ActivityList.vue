<script setup lang="ts">
import { ref } from 'vue';

const activities = ref([
  {
    id: '1',
    title: 'Fake activity 1',
    description: 'Fake desc 1',
  },
  {
    id: '2',
    title: 'Fake activity 2',
    description: 'Fake desc 2',
  },
  {
    id: '2',
    title: 'Fake activity 2',
    description: 'Fake desc 2',
  },
  {
    id: '2',
    title: 'Fake activity 2',
    description: 'Fake desc 2',
  },
  {
    id: '2',
    title: 'Fake activity 2',
    description: 'Fake desc 2',
  },
  {
    id: '2',
    title: 'Fake activity 2',
    description: 'Fake desc 2',
  },
  {
    id: '2',
    title: 'Fake activity 2',
    description: 'Fake desc 2',
  },
  {
    id: '2',
    title: 'Fake activity 2',
    description: 'Fake desc 2',
  },
  {
    id: '2',
    title: 'Fake activity 2',
    description: 'Fake desc 2',
  },
  {
    id: '2',
    title: 'Fake activity 2',
    description: 'Fake desc 2',
  },
  {
    id: '2',
    title: 'Fake activity 2',
    description: 'Fake desc 2',
  },
  {
    id: '2',
    title: 'Fake activity 2',
    description: 'Fake desc 2',
  },
])
</script>

<template>
  <div class="p-4">
    <h2 class="text-center">Activity List</h2>
    <div class="h-[80vh] overflow-y-scroll flex flex-wrap justify-center">
      <div class="card w-64 bg-base-100 shadow-xl image-full m-4" v-for="activity in activities">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{{ activity.title }}</h2>
          <p>{{ activity.description }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
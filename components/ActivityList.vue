<script setup lang="ts">
import { useActivityStore } from '@/stores/activity';

const activities = useActivityStore()

// await callOnce(activities.fetch)
</script>

<template>
  <div class="p-4">
    <h2 class="text-center">Activity List</h2>
    <div class="h-[80vh] overflow-y-scroll flex flex-wrap justify-center">
      <div v-for="activity in activities.list" @mouseover="activities.current = activity.id"
        class="card w-64 h-42 shadow-xl m-4"
        :class="activities.current === activity.id ? 'bg-[#FF6455]' : 'bg-gray-200'">
        <div class="card-body">
          <h2 class="card-title">{{ activity.title }}</h2>
          <p>{{ activity.desc }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
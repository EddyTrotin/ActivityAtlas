<script setup lang="ts">
import { useActivityStore } from '@/stores/activity';

const activities = useActivityStore()
const search = ref<string>('')
</script>

<template>
  <form class="flex items-center p-4">
    <input type="text" placeholder="Search by title" class="input input-bordered w-full max-w-xs mr-4" v-model="search"/>
    <button class="btn btn-circle btn-outline" @click.prevent="activities.filterByTitle(search)">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </button>
  </form>
</template>

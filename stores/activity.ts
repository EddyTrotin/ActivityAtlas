import { faker } from '@faker-js/faker';

interface IActivity {
  id: string
  title: string
  desc: string
  coords: number[]
  date: number
  categories: string[]
}

interface IActivityState {
  list: IActivity[]
  current: string
}

const categories = [
  "Animaux",
  "Arts & Culture",
  "Artisanat & Cuisine",
  "Bien être",
  "Ecologie & Environnement",
  "Education",
  "Loisirs",
  "Musique",
  "Patrimoine",
  "Réseaux pros & étudiants",
  "Santé",
  "Sciences & Technologie",
  "Solidarité & Action sociale",
  "Spiritualité",
  "Sport",
]

const gpsBox = [[43.967419, -0.096764], [49.162587, 5.521194]]

function getRandomFloat(min: number, max: number) {
  const str = (Math.random() * (max - min) + min).toFixed(6);

  return parseFloat(str);
}

function seedActivities() {
  const max = 4
  const activities: IActivity[] = []
  for (let i = 0; i < max; i++) {
    activities.push({
      id: faker.string.uuid(),
      // title: faker.lorem.lines(1),
      title: faker.commerce.productName(),
      desc: faker.lorem.words({ min: 0, max: 30 }),
      coords: [getRandomFloat(43.967419, 49.162587), getRandomFloat(-0.096764, 5.521194)],
      date: Date.now(),
      categories: getRandomCategories(),
    })
  }
  return activities
}

function getRandomCategories() {
  // const max = Math.random() * 6
  return [categories[Math.random() * categories.length + 1]]
}

export const useActivityStore = defineStore('activityStore', {
  state: (): IActivityState => ({
    list: seedActivities(),
    current: ''
  }),
  actions: {
    // async fetch() {
    //   const allAct = await $fetch('host/api/activities')
    //   this.list = allAct
    // }
  }
})

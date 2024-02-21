import { faker } from '@faker-js/faker'
import type { IActivity } from './Activity.interface'
import { categories } from './categories'

function getRandomFloat(min: number, max: number) {
  const str = (Math.random() * (max - min) + min).toFixed(6)
  return parseFloat(str)
}

function getRandomCategories() {
  return [categories[Math.floor(Math.random() * categories.length)]]
}

function seedActivities() {
  const max = 20
  const activities: IActivity[] = []
  for (let i = 0; i < max; i++) {
    activities.push({
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
      desc: faker.lorem.words({ min: 0, max: 30 }),
      coords: [
        getRandomFloat(43.967419, 49.162587),
        getRandomFloat(-0.096764, 5.521194),
      ],
      date: Date.now(),
      categories: getRandomCategories(),
    })
  }
  return activities
}

const fakeActivities = seedActivities()

export { getRandomCategories, getRandomFloat, seedActivities, fakeActivities }

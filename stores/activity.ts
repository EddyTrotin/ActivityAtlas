import { fakeActivities } from '@/utils/helpers'
import type { IActivity } from '@/utils/Activity.interface'

interface IActivityState {
  list: IActivity[]
  current: string
}
export const useActivityStore = defineStore('activityStore', {
  state: (): IActivityState => ({
    list: fakeActivities,
    current: '',
  }),
  actions: {
    filterByTitle(title: string) {
      this.$reset()
      if (title !== '')
        this.list = this.list.filter((activity) =>
          activity.title.toLowerCase().includes(title.toLowerCase())
        )
    },
  },
})

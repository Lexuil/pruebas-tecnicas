import { OhVueIcon, addIcons } from 'oh-vue-icons'

import {
  BiBookmarksFill
} from 'oh-vue-icons/icons'

export default defineNuxtPlugin((nuxtApp) => {
  addIcons(
    BiBookmarksFill
  )
  nuxtApp.vueApp.component('vi-icon', OhVueIcon)
})

import { OhVueIcon, addIcons } from 'oh-vue-icons'

import {
  BiCodeSquare
} from 'oh-vue-icons/icons'

export default defineNuxtPlugin((nuxtApp) => {
  addIcons(
    BiCodeSquare
  )
  nuxtApp.vueApp.component('vi-icon', OhVueIcon)
})

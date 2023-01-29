<script setup>
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  canCloseFromOutside: { type: Boolean, default: true },
  title: String,
  show: Boolean,
  customBody: { type: Boolean, default: false }
})

const showModal = ref(false)
const modalRef = ref(null)

const emit = defineEmits(['close'])

onClickOutside(modalRef, event => {
  if (props.canCloseFromOutside) {
    showModal.value = false
    emit('close', showModal.value)
  }
})

watch(
  () => props.show,
  show => {
    showModal.value = show

    if (showModal.value) {
      return document.body.classList.add('modal-open')
    } else {
      return document.body.classList.remove('modal-open')
    }
  }
)
</script>

<template lang="pug">
dialog(
  v-if='showModal'
  :open='showModal'
  class='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full p-0 bg-black bg-opacity-80'
)
  div(ref='modalRef' class='xs:max-w-screen-sm w-[600px] px-5 z-40')
    div(class='rounded-md overflow-hidden shadow-xl bg-primary-white')
      header(
        class='p-5 text-base xs:text-lg font-medium bg-primary text-white line-clamp-1'
      )
        h2 {{ title }}
      main(
        class='flex-1 p-3 overflow-y-auto max-h-96 text-sm xs:p-5 xs:text-base text-black bg-white'
      )
        slot(name='content')
      footer(
        class='sticky bottom-0 bg-white flex p-5 space-x-3 border-t-[1px] border-t-gray-300'
      )
        slot(name='button')
</template>

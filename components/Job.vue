<script setup>
defineProps(['company', 'role', 'time', 'logo', 'location', 'highlights'])
const isOpen = ref(false)
const toggleModal = () => {
  isOpen.value = !isOpen.value
}
</script>

<template lang="pug">
section(class="flex space-x-5 w-full")
  Logo(:logo="logo")
  div
    div(class="flex items-center gap-x-2 flex-wrap")
      h4 {{ company }}
      slot(name='website')
    p(class="text-sm font-light") {{ location }}
    div(class="flex flex-col lg:flex-row lg:items-center lg:space-x-2")
      p(class="text-sm font-medium") {{ role }}
      span(class="hidden lg:inline") •
      p(class="text-sm") {{ time }}
    button(class='border border-white py-1 px-2 mt-2 rounded-full text-xs hover:bg-white hover:bg-opacity-20 transition-all ease-in-out duration-75' @click='toggleModal') Show Highlights...
    Modal(
      :show='isOpen'
      title='Highlights'
      @close='toggleModal'
    )
      template(#content)
        ul(class='space-y-2')
          template(v-for="(highlight, index) in highlights" :key="index")
            div(class="flex space-x-2")
              span -
              li(class="")  {{ highlight  }}
      template(#button)
        button(class='py-2 px-4 w-full rounded-md border border-primary text-primary hover:bg-primary hover:bg-opacity-10 transition-all ease-in-out duration-75' @click='toggleModal') Close
</template>

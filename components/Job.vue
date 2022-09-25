<script setup>
defineProps(['company', 'role', 'time', 'logo', 'location'])
</script>

<template lang="pug">
div(class="flex items-center space-x-5 w-full")
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
</template>

<script setup>
defineProps(['school'])
</script>

<template lang="pug">
div(class="flex items-center space-x-5 w-full")
  Logo(:logo="school.logo")
  div
    div(class="flex items-center space-x-2")
      h4 {{ school.name }}
      slot(name='website')
    p(class="text-sm font-light") {{ school.degree }}
    p(class="text-sm font-medium") {{ school.year }}
</template>

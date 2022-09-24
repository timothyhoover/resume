<script setup>
defineProps(['logo'])
</script>

<template lang="pug">
div(class="flex justify-center items-center rounded-full w-20 h-20 overflow-clip border-2 border-primary flex-shrink-0")
  Component(class="w-10 h-10" :is="logo")
</template>

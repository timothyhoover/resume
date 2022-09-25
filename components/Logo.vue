<script setup>
defineProps(['logo'])
</script>

<template lang="pug">
div(class="flex justify-center items-center rounded-full w-24 h-24 overflow-clip border-2 border-primary flex-shrink-0")
  Component(class="w-12 h-12" :is="logo")
</template>

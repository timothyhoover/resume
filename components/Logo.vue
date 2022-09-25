<script setup>
defineProps(['logo'])
</script>

<template lang="pug">
div(class="flex justify-center items-center rounded-full w-16 h-16  xs:w-24  xs:h-24 overflow-clip border-2 border-primary flex-shrink-0")
  Component(class="w-8 h-8 xs:w-12 xs:h-12" :is="logo")
</template>

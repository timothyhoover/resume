<script setup>
defineProps(['src', 'link'])
</script>

<template lang="pug">
a(:href='link' target="_blank" class="flex items-center rounded-md shadow-md bg-white lg:w-80 lg:h-64 overflow-hidden")
  img(:src='src')
</template>

<script setup>
defineProps(['src', 'link'])
</script>

<template lang="pug">
a(:href='link' target="_blank" class="flex items-center rounded-md shadow-md bg-white overflow-hidden")
  img(:src='src')
</template>

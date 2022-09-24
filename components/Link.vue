<script setup>
defineProps(['link', 'linkText'])
</script>

<template lang="pug">
a(:href='link' target="_blank" class="group flex items-center gap-3 relative") 
  p(class="font-semibold hover:underline") {{ linkText }}
  ArrowUpLeft(class="transform group-hover:-translate-y-2")
</template>

<script setup>
defineProps(['link', 'linkText'])
</script>

<template lang="pug">
a(:href='link' class="group flex items-center gap-3 relative") 
  p(class="font-semibold hover:underline") {{ linkText }}
  ArrowUpLeft(class="absolute top-0 group-hover:-top-3 left-20")
</template>

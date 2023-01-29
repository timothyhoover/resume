<script setup>
defineProps(['link', 'linkText'])
</script>

<template lang="pug">
a(:href='link' target="_blank" class="group flex items-center gap-3 relative text-white") 
  p(class="font-semibold group-hover:underline text-current transition-all ease-in-out duration-100") {{ linkText }}
  ArrowUpLeft(class="transform group-hover:-translate-y-2 text-current mb-1 transition-all ease-in-out duration-100")
</template>

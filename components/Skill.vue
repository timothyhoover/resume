<script setup>
defineProps(['skill'])
</script>

<template lang="pug">
div(class="flex justify-center items-center py-2 px-6 border border-primary-white rounded-md")
  p {{ skill }}
</template>

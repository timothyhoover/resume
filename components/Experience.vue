<script setup>
import PorterLogo from '@/components/PorterLogo.vue'
import UniversalLogo from '@/components/UniversalLogo.vue'
import WordpressLogo from '@/components/WordpressLogo.vue'
</script>

<template lang="pug">
h2 Experience
div(class="grid grid-cols-1 md:grid-cols-2  gap-5 mt-5")
  Job(company='Porter' role='Software Engineer' time='2021 - Present' :logo='PorterLogo' location='Eugene, Oregon | Remote')  
    template(#website)
      a(href='https://www.orderwithporter.com' target="_blank" class="text-sm hover:underline") (orderwithporter.com)
  Job(company='Freelance' role='Wed Developer' time='2018 - 2021' :logo='WordpressLogo' location='Madrid, Spain')  
  Job(company='Universal Music / Decca Records' role='Music Programmer / Studio Engineer' time='2014 - 2017' :logo='UniversalLogo' location='Liverpool, England')  
</template>

<script setup>
import THLogo from '../assets/img/th-logo.png'
useHead({
  title: 'Tim Hoover | Software Engineer',
  meta: [
    { charset: 'utf-8' },
    {
      name: 'Tim Hoover | Software Engineer',
      content: 'Resume'
    },
    {
      name: 'og:image',
      content: THLogo
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
})
</script>

<template lang="pug">
Header
Divider
About
Divider
Experience
Divider
Education
Divider
Skills
Divider
Portfolio
Divider
Contact
Footer
</template>

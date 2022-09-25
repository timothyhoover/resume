<script setup>
import JohnMooresLogo from '@/components/JohnMooresLogo.vue'
import CodeXLogo from '@/components/CodeXLogo.vue'
</script>

<template lang="pug">
h2 Education
section(class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5")
  School(:school='{name: "CodeX Academy", year: "2021", degree: "Software Engineering", logo: CodeXLogo}' )
  School(:school='{ name: "John Moores University", year: "2011-2014", degree: "BA (Honours) Music", logo: JohnMooresLogo}')
</template>

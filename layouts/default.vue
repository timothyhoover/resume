<script setup></script>

<template lang="pug">
div(class='flex flex-col items-center h-screen overflow-x-hidden ')
  div(class='flex-1 w-full py-16 px-5 overflow-y-scroll')
    div(class="mx-auto max-w-[500px] md:max-w-screen-lg")
      slot
</template>

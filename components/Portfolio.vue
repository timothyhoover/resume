<script setup>
import Porter from '@/assets/img/porter.png'
import TopicTalk from '@/assets/img/topic-talk.png'
import Blurock from '@/assets/img/blurock.png'
import Workout from '@/assets/img/workout.png'
import Evaly from '@/assets/img/evaly.png'
import Reddit from '@/assets/img/reddit.png'
</script>

<template lang="pug">
section
  div(class="flex space-x-2 items-center justify-between text-xl mb-5")
    h2 Portfolio
    CustomLink(link='https://github.com/timothyhoover?tab=repositories' link-text='Github')
  main(class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5')
    Project(:src='Porter' link='https://www.orderwithporter.com')
    Project(:src='TopicTalk' link='https://www.topictalkingles.com')
    Project(:src='Blurock' link='https://www.blurockband.com')
    Project(:src='Workout' link='https://workout-tracker-th.netlify.app')
    Project(:src='Evaly' link='https://evaly-64cb8.web.app/')
    Project(:src='Reddit' link='https://reddit-clone-wine.vercel.app/')
</template>

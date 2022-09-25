<script setup></script>

<template lang="pug">
section
  div(class="flex space-x-2 items-center justify-between text-xl mb-5")
    h2 Portfolio
    Link(link='https://github.com/timothyhoover?tab=repositories' link-text='Github')
  main(class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5')
    Project(src='/public/img/porter.png' link='https://www.orderwithporter.com')
    Project(src='/public/img/topic-talk.png' link='https://www.topictalkingles.com')
    Project(src='/public/img/blurock.png' link='https://www.blurockband.com')
    Project(src='/public/img/workout.png' link='https://workout-tracker-th.netlify.app')
    Project(src='/public/img/evaly.png' link='https://evaly-64cb8.web.app/')
    Project(src='/public/img/reddit.png' link='https://reddit-clone-wine.vercel.app/')
</template>

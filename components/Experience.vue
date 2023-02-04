<script setup>
import PorterLogo from '@/components/PorterLogo.vue'
import UniversalLogo from '@/components/UniversalLogo.vue'
import WordpressLogo from '@/components/WordpressLogo.vue'

const jobs = [
  {
    company: 'Porter',
    role: 'Software Engineer',
    website: {
      href: 'https://orderwithporter.com',
      display: 'orderwithporter.com'
    },
    time: '2021 - Present',
    logo: PorterLogo,
    location: 'Eugene, Oregon | Remote',
    highlights: [
      'First 4 months consisted of maintaining and debugging Porter’s Vue2/Postgres/Hapi.js stack',
      'Worked hand-in-hand with the lead engineer to rebuild the core Porter ordering product with Vue3/MongoDB/Feathers.js',
      'Helped build out the Square API integration.',
      'Carried out weekly LogRocket and Sentry triage with quick follow-up fixes.',
      'Built a custom Vue QR code download and print experience for food vendors.',
      'Worked with the UX team using Framer mock-ups to build a custom tailwind HSL variable system and reusable Vue components for maximum brand flexibility and scalability. This flexibility later allowed merchants to white-label the ordering experience.',
      'Completed several full-stack business requirements for both the Vendor and Patron Porter apps.',
      'Core team member in building Porter’s data visualization application. We’re using React/Next.js 13 new app directory features with Nivo Charts (D3).',
      'Set up linting with GitHub actions to improve the developer experience.'
    ]
  },
  {
    company: 'Freelance',
    role: 'Wed Developer',
    time: '2018 - 2021',
    logo: WordpressLogo,
    location: 'Madrid, Spain',
    highlights: [
      'Carried out UX / UI strategy for high-profile social media influencers (50k+ followers) such as the Lobxs sports group led by Maigua Ojeda - lobxs.com',
      'Rebuilt real estate websites for both developers and estate agents improving their brand identity.',
      'Led the SEO strategy and implementation for peaceofmindmadrid.com',
      'Created code to improve user experience on the website',
      "Implemented design changes to improve the website's appearance",
      'Wrote code to improve website speed and performance',
      'Design / UX for www.topictalkingles.com'
    ]
  },
  {
    company: 'Universal Music / Decca Records',
    role: 'Music Programmer / Studio Engineer',
    time: '2014 - 2017',
    logo: UniversalLogo,
    location: 'Liverpool, England',
    highlights: [
      'Established a startup music development studio into a profitable business with an average of 2 new clients per month and repeat clients every 3-4 months.',
      'Planned band arrangements using cutting-edge digital instruments.',
      'Achieved label deadline goals which resulted in strong trust with the A&R department and more creative control for our team.',
      'Actively networked outside of the workplace and used mixed network-building methods, such as social media targeting and industry events, to accomplish revenue goals.',
      'Made a competitive referral scheme by paying our brand ambassadors 20% of the business they referred.',
      'Successfully pitched our clients to Universal Music and secured a deal in excess of £100,000.'
    ]
  }
]
</script>

<template lang="pug">
h2 Experience
div(class="grid grid-cols-1 md:grid-cols-2  gap-5 mt-5")
  template(v-for="(job, index) in jobs" :key="index")
    Job(:company='job.company' :role='job.role' :time='job.time' :logo='job.logo' :location='job.location' :highlights='job.highlights')  
      template(#website)
        a(:href='job?.website?.href' target="_blank" class="text-sm hover:underline") {{(job?.website?.display)}}
</template>

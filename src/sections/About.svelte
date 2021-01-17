<script lang="typescript">
  // Components
  import Job from '../components/Experience/Job.svelte'
  import SchoolDescription from '../components/Education/SchoolDescription.svelte'

  // Interfaces
  import type {
    JobDescription,
    SchoolDescription as SchoolDescriptionType,
  } from '../interfaces/index'

  const jobs: JobDescription[] = [
    {
      dateRange: 'December 2018 - today',
      description:
        'I work as a Full Stack Developer, creating a new application for the company using Graphql, Apollo, React JS, Mongo DB and Typescript. Use of AWS as Cloud Service using S3, EC2, EKS, Kubernetes, Kafka, Docker and Rabbit MQ',
      showDivider: true,
      title: 'Scalable Press',
    },
    {
      dateRange: 'May 2017 - December 2018',
      description: `Worked as a Full Stack Developer, creating applications for different clients using React JS, Express JS, Koa JS, Mongo DB, Angular JS, PostgreSQL and Dynamo DB.

        User of AWS and Google Cloud as cloud service, using Google Vision API, EC2, IAM roles, Cognito, ELB, Kubernetes, Rabbit MQ, Docker, S3, Cloudstack, Mongo Atlas, Google Storage, Google Pub/Sub.`,
      showDivider: true,
      title: 'iTexico',
    },
    {
      dateRange: '2016',
      description: `Worked as a Full Stack Developer creating an application for eCommerce using Koa JS, React JS, Mongo DB and PostgreSQL.
        
        Use of AWS as Cloud Service using S3, EC2, IAM ROLE, Cloud Cache, Elastic Search, ELB, Docker and Rabbit MQ.`,
      showDivider: true,
      title: 'Futurecommerce',
    },
    {
      dateRange: '2014 - 2016',
      description: `Lead Developer on a GERP for Mexican Government, based on PHP,
        MariaDB, Javascript and Angular JS. Usage of SQL and NoSQL databases. Lead Developer for a software for pharmacies based on PHP, MariaDB, Javascript and Angular JS.
        Developer on mobile apps based on Xamarin Framework.`,
      showDivider: true,
      title: 'Armonniza',
    },
    {
      dateRange: '2013 - 2014',
      description: `Secure Development of web and Android apps based on OWASP standards. Development of Augmented Reality apps.
        Audit source code.
        Developments based on PHP.
        Database modeling.`,
      showDivider: false,
      title: 'Bhacking',
    },
  ]

  const educationTitles: SchoolDescriptionType[] = [
    {
      carrerTitle: 'Software Development',
      dateRange: '2013 - 2015',
      degree: 'Master’s Degree',
    },
    {
      carrerTitle: 'Computer Systems Engineering',
      dateRange: '2010 - 2013',
      degree: 'Bachelor’s Degree',
    },
  ]

  const technologies: string[] = [
    'AWS',
    'Apollo',
    'Cypress',
    'Docker',
    'Express JS',
    'Google Cloud',
    'Graphql',
    'JavaScript (Vanilla)',
    'Kafka',
    'Kubernetes',
    'MongoDB',
    'PostgreSQL',
    'Rabbit MQ',
    'React JS',
    'Svelte',
    'Typescript',
    'Webpack',
  ]
</script>

<div id="about" class="bg-white text-gray-700">
  <div class="container h-full mx-auto flex flex-col flex-wrap py-12">
    <h3 class="text-center text-5xl">About Me</h3>
    <h4 class="text-center py-6 text-xl w-1/2 mx-auto">
      I have over 8 years of experience developing different types of solutions
      for the costumer's needs. I'm highly focused on delivering quality
      products that meet the needs and expectations of my clients. I am a
      proactive and self- taught person that loves to solve challenges and is
      always striving to develop his abilities as an engineer.
    </h4>

    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-6">
        <h3 class="text-3xl">Experience</h3>
        <br />
        {#each jobs as job}
          <svelte:component this={Job} jobDescription={job} />
        {/each}
      </div>
      <div class="col-span-2" />
      <div class=" col-span-4">
        <h3 class="text-3xl">Education</h3>
        <br />
        {#each educationTitles as educationTitle}
          <svelte:component
            this={SchoolDescription}
            schoolDescription={educationTitle} />
        {/each}
        <br />
        <h3 class="text-3xl">Technologies</h3>
        <br />
        <ul class="list-disc list-inside">
          {#each technologies as technology}
            <li>{technology}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>

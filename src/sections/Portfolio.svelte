<script lang="typescript">
  // Components
  import Project from '../components/Project/index.svelte'

  // Interfaces
  import type { ProjectData } from '../interfaces/index'

  const projects: ProjectData[] = [
    {
      description:
        'Description CodeX is an online compiler for various languages like Java, C++, Python, etc. Execute code in various languages on your own website for free with the CodeX API',
      name: 'Project Name',
      imagePlaceHolderData: {
        images: [
          {
            alt: 'Some Alt text',
            media: '(min-width: 800px)',
            url:
              'https://res.cloudinary.com/willsnake/image/upload/v1610750180/codigo_adf7ic.jpg',
          },
        ],
      },
      projectUrl: 'https://flexbox.help/',
      tags: ['Technology', 'React'],
    },
    {
      description:
        'Description CodeX is an online compiler for various languages like Java, C++, Python, etc. Execute code in various languages on your own website for free with the CodeX API',
      name: 'Project Name',
      imagePlaceHolderData: {
        images: [
          {
            alt: 'Some Alt text',
            media: '(min-width: 800px)',
            url:
              'https://res.cloudinary.com/willsnake/image/upload/v1610750180/codigo_adf7ic.jpg',
          },
        ],
      },
      projectUrl: 'https://flexbox.help/',
      tags: ['Technology', 'React'],
    },
    {
      description:
        'Description CodeX is an online compiler for various languages like Java, C++, Python, etc. Execute code in various languages on your own website for free with the CodeX API',
      name: 'Project Name',
      imagePlaceHolderData: {
        images: [
          {
            alt: 'Some Alt text',
            media: '(min-width: 800px)',
            url:
              'https://res.cloudinary.com/willsnake/image/upload/v1610750180/codigo_adf7ic.jpg',
          },
        ],
      },
      projectUrl: 'https://flexbox.help/',
      tags: ['Technology', 'React'],
    },
    {
      description:
        'Description CodeX is an online compiler for various languages like Java, C++, Python, etc. Execute code in various languages on your own website for free with the CodeX API',
      name: 'Project Name',
      imagePlaceHolderData: {
        images: [
          {
            alt: 'Some Alt text',
            media: '(min-width: 800px)',
            url:
              'https://res.cloudinary.com/willsnake/image/upload/v1610750180/codigo_adf7ic.jpg',
          },
        ],
      },
      projectUrl: 'https://flexbox.help/',
      tags: ['Technology', 'React'],
    },
  ]
</script>

<main id="portfolio" class="col-span-full bg-white text-gray-700 text-left">
  <article class="container mx-auto flex flex-col flex-wrap py-12">
    <h3 class="text-center text-5xl">Portfolio</h3>
    <br />
    <div class="grid grid-cols-12 gap-4">
      {#each projects as project}
        <div class="col-span-4">
          <Project projectData={project} />
        </div>
      {/each}
    </div>
  </article>
</main>

<script lang="typescript">
  // Components
  import ImagePlaceHolder from '../ImagePlaceHolder/index.svelte'
  import Tag from '../Tag/index.svelte'

  // Interfaces
  import type { ProjectData } from '../../interfaces/index'

  export let projectData: ProjectData = {
    description: 'Awesome Description',
    imagePlaceHolderData: {
      images: [],
    },
    name: 'Project Name',
    projectUrl: 'Project URL',
    tags: ['tag 1', 'tag 2'],
  }
</script>

<div>
  <ImagePlaceHolder projectData={projectData.imagePlaceHolderData} />
  <h4 class="text-lg font-bold pt-4">{projectData.name}</h4>
  <div class="flex gap-2 pt-2">
    {#each projectData.tags as tag}
      <Tag {tag} />
    {/each}
  </div>
  <p class="py-4">{projectData.description}</p>
</div>

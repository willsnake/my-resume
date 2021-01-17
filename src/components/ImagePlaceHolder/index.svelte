<script lang="typescript">
  // Interfaces
  import type { ImagePlaceHolderData } from '../../interfaces/index'

  export let projectData: ImagePlaceHolderData = {
    images: [
      {
        alt: 'Some Alt text',
        media: '(min-width: 800px)',
        url:
          'https://res.cloudinary.com/willsnake/image/upload/v1610750180/codigo_adf7ic.jpg',
      },
    ],
  }

  let mainImage = projectData.images[projectData.images.length - 1]
</script>

<div class="h-full w-full">
  <picture>
    {#each projectData.images as imageData}
      <source srcset={imageData.url} media={imageData.media} />
    {/each}
    <img class="h-full w-full" src={mainImage.url} alt={mainImage.alt} />
  </picture>
</div>

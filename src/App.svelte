<script lang="typescript">
  import Home from './sections/Home.svelte'

  // Sections of the single page app
  const sections = [{ component: Home }]
</script>

{#each sections as section}
  <svelte:component this={section.component} />
{/each}

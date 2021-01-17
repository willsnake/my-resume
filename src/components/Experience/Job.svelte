<script lang="typescript">
  // Types
  import type { JobDescription } from '../../interfaces/index'

  // Props
  export let jobDescription: JobDescription = {
    dateRange: 'From this time - To this day',
    description: 'What I did on this job',
    title: 'Name of the Company',
    showDivider: true,
  }
</script>

<div class="flex flex-col">
  <h4 class="text-2xl">{jobDescription.title}</h4>
  <h5 class="text-xl">{jobDescription.dateRange}</h5>
  <p>{jobDescription.description}</p>
  {#if jobDescription.showDivider}
    <br />
    <hr class="divide-gray-100" />
    <br />
  {/if}
</div>

<script lang="typescript">
  // Types
  import type { SchoolDescription } from '../../interfaces/index'

  // Props
  export let schoolDescription: SchoolDescription = {
    carrerTitle: 'Carrer Title',
    dateRange: 'Date Range',
    degree: 'Degree',
  }
</script>

<div class="border-l-4 border-black py-1 pl-2 mb-6">
  <h4 class="text-lg font-bold">{schoolDescription.degree}</h4>
  <h5 class="text-base">{schoolDescription.dateRange}</h5>
  <p>{schoolDescription.carrerTitle}</p>
</div>

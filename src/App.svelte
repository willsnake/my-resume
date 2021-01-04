<script lang="typescript">
  import { onMount } from 'svelte'
  let count: number = 0
  onMount(() => {
    const interval = setInterval(() => count++, 1000)
    return () => {
      clearInterval(interval)
    }
  })
</script>

<style>
  
</style>

<div class="border-4 border-black bg-gray-300 h-9/10">
  
</div>

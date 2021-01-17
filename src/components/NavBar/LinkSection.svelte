<script lang="typescript">
  import * as animateScroll from 'svelte-scrollto'
  import type { MenuElement } from '../../interfaces/index'
  export let menuElement: MenuElement
</script>

<a
  class="text-sm font-semibold bg-transparent md:mt-0 md:ml-4 border-b-4 border-opacity-0 border-white hover:border-opacity-100 focus:border-opacity-100 pt-5"
  on:click={() => animateScroll.scrollTo({
      element: `#${menuElement.value}`,
      offset: -20,
    })}>{menuElement.display}</a>

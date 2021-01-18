<script lang="typescript">
  import * as animateScroll from 'svelte-scrollto'
  import type { MenuElement } from '../../interfaces/index'
  export let menuElement: MenuElement
</script>

<style>
  a {
    letter-spacing: 0.5px;
  }
</style>

<a
  href={`#${menuElement.value}`}
  class={`font-medium bg-transparent border-b-2 border-opacity-0 border-white md:pt-5 md:mr-2 md:mt-0 md:ml-4 hover:border-opacity-100 focus:border-opacity-100`}
  on:click={() => animateScroll.scrollTo({
      element: `#${menuElement.value}`,
      offset: -20,
    })}>{menuElement.display}</a>

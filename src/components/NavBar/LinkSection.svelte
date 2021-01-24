<script lang="typescript">
  import * as svelte from 'svelte'
  import * as animateScroll from 'svelte-scrollto'
  import type { MenuElement } from '../../interfaces/index'
  export let menuElement: MenuElement

  let hover: boolean = false

  const handleMouseEnter = () => {
    hover = true
  }

  const handleMouseLeave = () => {
    hover = false
  }
</script>

<a
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  href={`#${menuElement.value}`}
  on:click={() => animateScroll.scrollTo({
      element: `#${menuElement.value}`,
      offset: -20,
    })}>
  <div
    class="inline-flex flex-col space-y-5 items-center justify-center px-4 pt-5 min-w-min bg-black">
    <p
      class={`text-sm font-medium tracking-wide ${hover ? `text-white` : `text-gray-400`}`}>
      {menuElement.display}
    </p>
    {#if hover}
      <div class="hidden md:block w-3/4 h-0.5 bg-white" />
    {/if}
  </div>
</a>

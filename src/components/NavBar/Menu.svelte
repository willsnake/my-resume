<script lang="typescript">
  // Components
  import LinkSection from './LinkSection.svelte'
  import Logo from './Logo.svelte'

  // Interfaces
  import type { MenuElement } from '../../interfaces/index'
  export let menuElements: MenuElement[] = []

  let open: boolean = false

  const toggleButton = () => {
    open = !open
  }
</script>

<div
  class="flex items-center justify-between bg-black font-mono text-white px-4"
  style="height: 60px;">
  <Logo />
  <div>
    <button
      class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
      on:click={toggleButton}>
      <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
        {#if open}
          <path
            x-show="open"
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        {:else}
          <path
            x-show="!open"
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clip-rule="evenodd" />
        {/if}
      </svg>
    </button>
    <nav
      class="flex-col flex-grow hidden pb-4 md:p-0 md:h-16 md:flex md:justify-end md:flex-row h-full w-full">
      {#each menuElements as menuElement}
        <LinkSection {menuElement} />
      {/each}
    </nav>
  </div>
</div>

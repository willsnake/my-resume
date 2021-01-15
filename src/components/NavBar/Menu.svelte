<script lang="typescript">
  // Components
  import LinkSection from './LinkSection.svelte'
  import Logo from './Logo.svelte'

  // Interfaces
  import type { MenuElement } from '../../interfaces/index'
  export let menuElements: MenuElement[] = []
</script>

<div class="fixed top-0 w-full">
  <div class="antialiased text-white bg-black">
    <div class="w-full">
      <div
        class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div class="flex flex-row items-center justify-between px-4">
          <Logo />
          <button
            class="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                x-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd" />
              <path
                x-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <nav
          class="flex-col flex-grow hidden pb-4 md:p-0 md:h-16 md:flex md:justify-end md:flex-row h-full">
          {#each menuElements as menuElement}
            <LinkSection {menuElement} />
          {/each}
        </nav>
      </div>
    </div>
  </div>
</div>

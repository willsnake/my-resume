<script lang="typescript">
  import Home from './sections/Home.svelte'
  interface MenuElement {
    display: string
    value: string
  }

  // Sections of the single page app
  const sections = [{ component: Home }]

  // Sections of the single top menu
  const menuSections: Array<MenuElement> = [
    {
      display: 'HOME',
      value: 'home',
    },
    {
      display: 'ABOUT',
      value: 'about',
    },
    {
      display: 'PROJECTS',
      value: 'projects',
    },
    {
      display: 'CONTACT',
      value: 'contact',
    },
  ]
</script>

<div class="border-4 border-black bg-gray-300 h-9/10">
  <div
    class="fixed top-0 z-10 flex justify-between w-full border-2 border-green-300 bg-black text-white">
    <div
      class="flex flex-col lg:flex-row lg:container lg:mx-auto lg:justify-between lg:items-center">
      <header class="border-2 border-white">
        <h1 class="border-2 border-red nav-logo no-underline hidden lg:block">
          WILLSNAKE
        </h1>
        <div class="border-2 border-blue nav-menu-button lg:hidden">MENU</div>
      </header>
      <nav>
        <ul class="flex list-none border-2 border-blue-500">
          {#each menuSections as menuSection}
            <li class="flex">
              <a
                class="no-underline"
                href="#{menuSection.value}">{menuSection.display}</a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
    <!-- <header class="">
      <h1></h1>
      <div>MENU</div>
    </header> -->
  </div>
  {#each sections as section}
    <svelte:component this={section.component} />
  {/each}
</div>

<!--
  <div id="nav-container">
    <header id="nav-header">
      <h1><a href="#" id="nav-logo">FlexNav</a></h1>
      <div id="nav-menu-button">MENU</div>
    </header>
    <nav>
      <ul class="nav-ul hide-ul">
        <li><a class="nav-link active-link" href="#">Home</a></li>
        <li><a class="nav-link" href="#">News</a></li>
        <li><a class="nav-link" href="#">Contact</a></li>
        <li><a class="nav-link" href="#">About</a></li>
      </ul>
    </nav>
  </div>
-->

<!--
  <div class="container mx-auto">
    <div class="border-2 border-red-500 inline-block">WILLSNAKE</div>
    <div class="border-2 border-blue-500 inline-block">
      MENU
    </div> 
      <ul class="border-2 border-blue-500">
        {#each menuSections as menuSection}
          <li class="inline mx-1">{menuSection.display}</li>
        {/each}
      </ul>
  </div>
-->

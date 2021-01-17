<script lang="typescript">
  // Sections
  import Home from './sections/Home.svelte'
  import About from './sections/About.svelte'
  import Portfolio from './sections/Portfolio.svelte'

  // Components
  import Menu from './components/NavBar/Menu.svelte'

  // Types
  import type { MenuElement } from './interfaces/index'

  // Sections of the single page app
  const sections: { component: any }[] = [
    { component: Home },
    { component: About },
    { component: Portfolio },
  ]

  // Sections of the single top menu
  const menuSections: MenuElement[] = [
    {
      display: 'HOME',
      value: 'home',
    },
    {
      display: 'ABOUT',
      value: 'about',
    },
    {
      display: 'PORTFOLIO',
      value: 'portfolio',
    },
    {
      display: 'CONTACT',
      value: 'contact',
    },
  ]
</script>

<div class="h-9/10 w-full">
  <Menu menuElements={menuSections} />
  {#each sections as section}
    <svelte:component this={section.component} />
  {/each}
</div>

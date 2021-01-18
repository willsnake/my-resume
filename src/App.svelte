<script lang="typescript">
  // Sections
  import Home from './sections/Home.svelte'
  import About from './sections/About.svelte'
  import Portfolio from './sections/Portfolio.svelte'
  import Contact from './sections/Contact.svelte'

  // Components
  import Menu from './components/NavBar/Menu.svelte'
  import Footer from './components/Footer/index.svelte'

  // Types
  import type { MenuElement } from './interfaces/index'

  // Sections of the single page app
  const sections: { component: any }[] = [
    { component: Home },
    { component: About },
    { component: Portfolio },
    { component: Contact },
  ]

  // Sections of the single top menu
  const menuSections: MenuElement[] = [
    {
      display: 'Home',
      value: 'home',
    },
    {
      display: 'About',
      value: 'about',
    },
    {
      display: 'Portfolio',
      value: 'portfolio',
    },
    {
      display: 'Contact',
      value: 'contact',
    },
  ]
</script>

<div class="h-9/10 w-full">
  <Menu menuElements={menuSections} />
  {#each sections as section}
    <svelte:component this={section.component} />
  {/each}
  <Footer />
</div>

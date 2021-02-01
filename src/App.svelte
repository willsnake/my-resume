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

<style>
  .page-wrap {
    grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr);
    grid-template-rows: min-content min-content 1fr min-content;
  }

  @media (max-width: 600px) {
    .page-wrap {
      grid-template-columns: 100%;
      grid-template-rows: auto;
    }
    .page-wrap > * {
      grid-column: 1/-1 !important;
      grid-row: auto !important;
    }
  }
</style>

<div class="page-wrap h-screen grid text-center">
  <div class="col-span-full">
    <header class="col-span-full sticky top-0">
      <Menu menuElements={menuSections} />
    </header>
    {#each sections as section}
      <svelte:component this={section.component} />
    {/each}
  </div>
  <Footer />
</div>

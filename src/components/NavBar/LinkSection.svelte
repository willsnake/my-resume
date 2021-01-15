<script lang="typescript">
  import type { MenuElement } from '../../interfaces/index'
  export let menuElement: MenuElement
</script>

<a
  class="text-sm font-semibold bg-transparent md:mt-0 md:ml-4 border-b-4 border-opacity-0 border-white hover:border-opacity-100 focus:border-opacity-100 pt-5"
  href="#{menuElement.value}">{menuElement.display}</a>

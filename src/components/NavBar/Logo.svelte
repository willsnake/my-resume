<script lang="typescript">
  // Interfaces
  import type { LogoInfo } from '../../interfaces/index'
  export let logoInfo: LogoInfo = {
    display: '/ W I L L S N A K E',
    linkTo: 'home',
  }
</script>

<a
  href="#{logoInfo.linkTo}"
  class="inline-block text-sm font-medium text-white pl-4 md:p-0">{logoInfo.display}</a>

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
  class="text-lg font-bold tracking-widest text-white uppercase rounded-lg">{logoInfo.display}</a>

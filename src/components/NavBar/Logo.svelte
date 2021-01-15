<script lang="typescript">
  // Interfaces
  import type { LogoInfo } from '../../interfaces/index'
  export let logoInfo: LogoInfo = {
    display: 'WillSnake',
    linkTo: 'home',
  }
</script>

<a
  href="#{logoInfo.linkTo}"
  class="text-lg font-bold tracking-widest text-white uppercase rounded-lg">{logoInfo.display}</a>

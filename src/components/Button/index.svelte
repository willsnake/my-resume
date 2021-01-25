<script lang="typescript">
  // Types
  import type { ButtonProps } from '../../interfaces/index'
  import { ButtonType } from '../../interfaces/index'

  // Props
  export let buttonProps: ButtonProps = {
    text: 'Submit',
    type: ButtonType.PRIMARY,
  }
</script>

{#if buttonProps.type === ButtonType.PRIMARY}
  <button
    disabled={buttonProps.disabled}
    class="px-4 h-10 bg-blue-900 rounded text-xs font-medium text-white">
    {buttonProps.text}
  </button>
{:else}
  <button
    disabled={buttonProps.disabled}
    class="px-4 h-10 border border-gray-300 rounded text-xs font-medium text-gray-300">
    {buttonProps.text}
  </button>
{/if}

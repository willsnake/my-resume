<script lang="typescript">
  // Interfaces
  import type { ButtonProps } from '../interfaces'
  import { ButtonType } from '../interfaces'

  // Components
  import Button from '../components/Button/index.svelte'

  // Buttons Data
  const contactMeButton: ButtonProps = {
    text: 'Contact me',
    type: ButtonType.PRIMARY,
  }

  const downloadResumeButton: ButtonProps = {
    text: 'Download resume',
    type: ButtonType.SECONDARY,
  }
</script>

<style>
  #home {
    height: 492px;
    background-image: url('https://res.cloudinary.com/willsnake/image/upload/v1611456206/willsnakeDev/hero-x2_onymw4.png');
    background-repeat: no-repeat;
    background-size: 100% 492px;
    background-position: 100%;
  }
</style>

<div id="home" class="flex justify-end items-center w-full mt-14">
  <div class="w-1/2 h-1/2">
    <div
      class="flex flex-col space-y-4 items-start justify-start"
      style="width: 386px; height: 196px;">
      <p
        class="text-3xl font-medium tracking-wider text-white"
        style="width: 386px;">
        Hi, I’m WillSnake
      </p>
      <p class="text-xl tracking-wider text-white" style="width: 386px;">
        a.k.a. Daniel Rodríguez
      </p>
      <p class="text-base tracking-wide text-gray-300" style="width: 386px;">
        I’m a Full-Stack Engineer … React JS (cuáles otras tecnologías usas,
        etc.)
      </p>
      <div class="inline-flex space-x-4 items-start justify-start">
        <Button buttonProps={contactMeButton} />
        <Button buttonProps={downloadResumeButton} />
      </div>
    </div>
  </div>
</div>

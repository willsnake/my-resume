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
    background-image: url('https://res.cloudinary.com/willsnake/image/upload/v1611456206/willsnakeDev/hero-x2_onymw4.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
  }
</style>

<main id="home" class="col-span-full h-screen text-left text-white">
  <article class="grid grid-cols-2 h-full">
    <div
      class="col-span-1 col-start-2 flex flex-col items-start justify-center">
      <div>
        <p class="text-3xl font-medium tracking-wider">Hi, I’m WillSnake</p>
        <p class="text-xl tracking-wider text-white">a.k.a. Daniel Rodríguez</p>
        <p class="text-base tracking-wide text-gray-300">
          I’m a Full-Stack Engineer … React JS (cuáles otras tecnologías usas,
          etc.)
        </p>
        <div>
          <Button buttonProps={contactMeButton} />
          <Button buttonProps={downloadResumeButton} />
        </div>
      </div>
    </div>
  </article>
</main>

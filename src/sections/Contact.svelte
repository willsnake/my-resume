<script lang="typescript">
  import { Twitter, Linkedin } from '@icons-pack/svelte-simple-icons'
</script>

<div id="contact" class="bg-gray-800 text-white">
  <div class="container h-full mx-auto flex flex-col flex-wrap py-12">
    <h3 class="text-left text-3xl">Contact</h3>
    <p class="pt-4">
      Questions? Business inquiries?
      <br />
      Don’t be shy, come say hi!
    </p>
    <p class="pt-4">
      Or if you prefer, shoot me an email at
      <br />
      <a href="mailto:willsnake87@gmail.com">willsnake87@gmail.com</a>
    </p>
    <hr class="divide-white divide-solid border-2 w-10 my-12" />
    <p class="font-semibold text-sm">ON SOCIAL MEDIA</p>
    <div class="pt-4">
      <a
        class="flex gap-3"
        target="_blank"
        href="https://twitter.com/willsnake87">
        <Twitter />
        @willsnake87
      </a>
    </div>
    <div class="pt-4">
      <a
        class="flex gap-3"
        target="_blank"
        href="https://www.linkedin.com/in/daniel-rodriguez-monroy-84055b33/">
        <Linkedin />
        Daniel Rodriguez Monroy
      </a>
    </div>
  </div>
</div>

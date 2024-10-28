<script lang="ts">
  import SubmitButton from "$lib/design/Buttons/SubmitButton.svelte";
  import PasswordInput from "$lib/design/TextInputs/PasswordInput.svelte";
  import EmailInput from "$lib/design/TextInputs/EmailInput.svelte";
  import toast from "svelte-french-toast";
  import { onMount } from "svelte";

  let email: string = $state("");
  let password: string = $state("");
  let loading: boolean = $state(false);

  let { data, form } = $props();

  onMount(() => {
    if (form && "description" in form) {
      toast.error(form.description);
    }
  });
</script>

<div
  class="flex min-h-full h-screen items-center justify-center py-12 px-4 -mt-12"
>
  <div class="w-full max-w-md">
    <div>
      <img
        class="mx-auto h-16 w-auto"
        src="https://i.imgur.com/ddgbcJO.png"
        alt="nhce logo"
      />
      <h2
        class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
      >
        Sign in to your GIS account
      </h2>
    </div>
    <form method="POST" class="mt-8 space-y-6">
      <div class="gap-4 flex flex-col">
        <div>
          <EmailInput bind:value={email}></EmailInput>
        </div>
        <div>
          <PasswordInput bind:value={password}></PasswordInput>
        </div>
      </div>

      <div>
        <SubmitButton {loading}></SubmitButton>
      </div>
    </form>
  </div>
</div>

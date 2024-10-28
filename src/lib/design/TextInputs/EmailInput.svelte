<script lang="ts">
  interface Props {
    value: string;
  }
  let { value = $bindable() }: Props = $props();
</script>

<div class="flex flex-col gap-2">
  <label for="email">Email</label>
  <input
    bind:value
    id="email"
    type="email"
    name="email"
    autocomplete="email"
    required
    class="input input-bordered"
    placeholder="Email address"
  />
</div>

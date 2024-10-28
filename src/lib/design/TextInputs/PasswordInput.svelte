<script lang="ts">
  interface Props {
    value: string;
  }
  let { value = $bindable() }: Props = $props();
</script>

<div class="flex flex-col gap-2">
  <label for="password">Password</label>
  <input
    bind:value
    id="password"
    name="password"
    type="password"
    required
    class="input input-bordered"
    placeholder="Password"
  />
</div>

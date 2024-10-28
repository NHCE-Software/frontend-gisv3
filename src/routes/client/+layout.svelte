<script lang="ts">
  import ClientNavbar from "$lib/components/ClientNavbar.svelte";
  const { data } = $props();
</script>

<div class="grid grid-cols-6">
  <div class="col-span-1">
    <ClientNavbar user={data.userEmail}></ClientNavbar>
  </div>
  <div class="col-span-5">
    <slot></slot>
  </div>
</div>

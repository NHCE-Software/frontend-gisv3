<script lang="ts">
  import { page } from "$app/stores";
  import LogoutButton from "$lib/design/Buttons/LogoutButton.svelte";
  import { redirect } from "@sveltejs/kit";
  const { user }: { user: string } = $props();
  if (!user) redirect(308, "/auth");
  const userName = $derived(user.split("@")[0]);

  const routes = [
    {
      route: "/client/home",
      name: "Home",
    },
    {
      route: "/client/ask",
      name: "Make Request",
    },
    {
      route: "/client/settings",
      name: "Settings",
    },
  ];
</script>

<div class="border h-screen flex flex-col">
  <div class="flex justify-center items-center flex-col my-4">
    <div><img src="https://i.imgur.com/ddgbcJO.png" class="h-16" alt="" /></div>
    <div class="text-center">
      <div class="text-xl font-semibold">Gift Inventory System</div>
      <div class="text-sm">New Horizon College of Engineering</div>
    </div>
  </div>
  <div class="divider text-sm">Navigate</div>
  <div class="flex flex-col">
    {#each routes as { name, route }}
      <a
        href={route}
        class=" transition-all cursor-pointer p-4 {$page.url.pathname == route
          ? 'bg-purple-500 text-white'
          : 'hover:bg-purple-50'}">{name}</a
      >
    {/each}
  </div>
  <div class="mt-auto">
    <div class="bg-gray-100 p-4 my-4">
      <div class="flex h-full items-center">
        <div>
          <div class="text-sm opacity-50">Logged in as</div>
          <div class="tooltip w-full" data-tip={user}>
            <div class="truncate text-left">
              {userName}
            </div>
          </div>
        </div>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <LogoutButton></LogoutButton>
      </div>
    </div>
  </div>
</div>

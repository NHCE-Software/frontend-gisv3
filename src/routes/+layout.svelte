<script>
  import "../app.css";
  import { Toaster } from "svelte-french-toast";
  import { BASEURL } from "../store/appSettingsStore";
  $BASEURL = import.meta.env.VITE_BASEURL;
</script>

<Toaster></Toaster>
<slot></slot>

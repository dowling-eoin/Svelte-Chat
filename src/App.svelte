<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<style  global lang="postcss">
  @import "../assets/global.css";
  @tailwind base;
  @tailwind components;

  @tailwind utilities;

  body {
    background-color: #dddddd;
  }
</style>

<Router {routes}/>
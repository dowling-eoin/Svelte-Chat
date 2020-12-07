<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<style  global>
  @import "../assets/global.css";
  body {
    background-color: #dddddd;
  }
</style>

<Router {routes}/>
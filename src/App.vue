<template>
  <div id="app" style="max-width: 100vw ; overflow-x: hidden; overflow-wrap: anywhere;">
    <router-view />
  </div>
</template>

<script>
import { WOW } from "wowjs";
import "animate.css";
import './stylesheets/default.css'
import './stylesheets/style.css'
import './stylesheets/responsive.css'
import 'normalize.css'
new WOW().init();

export default {
  name: "App",
};
</script>
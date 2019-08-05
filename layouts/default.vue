<template>
    <div id="wrapper" class="d-flex flex-column">
        <!-- <html prefix="og: http://ogp.me/ns#"> -->
        <header class="header-global">
              <!-- <title>TORYUMON TOKYO</title>
              <meta name="description" content="TORYUMON TOKYO"> -->
              <!-- <meta property="og:site_name" content="TORYUMON TOKYO" >
              <meta property="og:type" content="TORYUMON TOKYO" >
              <meta property="og:url" content="https://toryumon-tokyo.firebaseapp.com/" >
              <meta property="og:title" content="TORYUMON TOKYO" >
              <meta property="og:description" content="TORYUMON TOKYO" >
              <meta property="og:image" content="../static/T_tokyo_image_ogp.jpg" /> -->
            <starter-header></starter-header>
        </header>
        <main class="flex-fill position-relative">
           <nuxt />
        </main>
        <footer class="footer">
            <starter-footer></starter-footer>
        </footer>
    </div>
</template>

<script>
import StarterHeader from "~/components/argon-layout/starter/StarterHeader";
import StarterFooter from "~/components/argon-layout/starter/StarterFooter";

export default {
  components: {
    StarterHeader,
    StarterFooter
  }
};
</script>

<style>
body, #wrapper {
   min-height:100vh;
}
</style>

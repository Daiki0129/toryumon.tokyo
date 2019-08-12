<template>
    <div id="wrapper" class="d-flex flex-column">
        <!-- <html prefix="og: http://ogp.me/ns#"> -->
        <header class="header-global">
              
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

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-145396788-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-145396788-1');
</script>
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

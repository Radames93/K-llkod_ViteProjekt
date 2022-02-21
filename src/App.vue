<script>
  export default {
    data() {
      return { isHidden: false, imageSource: '../public/logotyp.png' }
    }
  }
</script>

<template>
  <header>
    <nav id="navigation-container">
      <RouterLink to="/additioner">
        <!--Länk till index.html-->
        <a><img id="logotyp" alt="logotyp" :src="imageSource" /></a>
      </RouterLink>
      <ul id="unorderlista">
        <li class="navbar-knappar">
          <RouterLink class="navbar-links" to="/subtraktioner">
            substraktioner
          </RouterLink>
        </li>
        <li class="navbar-knappar">
          <RouterLink class="navbar-links" to="/multiplikationer">
            multiplikationer
          </RouterLink>
        </li>
        <li class="navbar-knappar">
          <RouterLink class="navbar-links" to="/divisioner">
            divisioner
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
    <div v-if="!isHidden" id="centered">
      <p>I den här webbsidan du kan öva på basisk matte.</p>
      <p>
        Klicka på logo om du vill öva på addittioner eller klicka på de andra
        sidorna av menyn för att öva på andra uttrycken.
      </p>
      <input id="stäng" type="button" value="X" @click="isHidden = true" />
    </div>
  </main>
</template>

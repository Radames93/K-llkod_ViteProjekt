<script>
import UttyckList from "../components/AdderaUttryck.vue";

export default {
  components: {
    UttyckList,
  },
};
</script>
<template>
  <!DOCTYPE html>
  <html lang="sv">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Vue projekt</title>
    </head>
    <body>
      <div id="app">
        <h1>Lös det här uttrucket</h1>
        <UttyckList />
      </div>
    </body>
  </html>
</template>

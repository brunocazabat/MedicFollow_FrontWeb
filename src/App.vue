<template>
 <router-view></router-view>
 
</template>



<script>
import fakeBackend from "./helpers/fake-backend"

// Activating fake backend
fakeBackend();
export default {
  name: 'App',
  components: {
  }
}
</script>

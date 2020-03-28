<template>
  <div id="app" class="bg-gray-100">
    <nav
      class="block sm:flex items-center sm:justify-end sm:flex-wrap p-3 border border-darken-2 bg-gray-200 border-bottom"
    >
      <div class="sm:flex sm:items-center sm:flex-shrink-0 text-black">
        <span class="font-bold text-2xl">Jason Baker</span>
      </div>
      <div class="w-full-block block sm:flex sm:flex-grow sm:justify-end">
          <router-link class="nav-link" v-for="link in nav" :key="link" :to="`/${link}`" :id="link">
            <div :class="['nav-btn', `/${link}`=== activeRoute ? 'activeroute':null]" >
              <span>{{ capitalize(link) }}</span>
            </div>
          </router-link>
        <!-- <a v-for="link in nav" :key="link" :href="`#${link}`" class="text-teal-200 hover:text-white">
          <div :id="link" class="nav-btn">
            <span>{{capitalize(link)}}</span>
          </div></a
        > -->
        <!-- <a href="#link2" class="text-teal-200 hover:text-white">
          <div id="link2" class="nav-btn">
            <span>Link 2</span>
          </div>
        </a>
        <a href="#link3" class="text-teal-200 hover:text-white">
          <div id="link3" class="nav-btn">
            <span>Link 3</span>
          </div>
        </a> -->
      </div>
    </nav>
    <div id="content" class="fill-height">
      <router-view> </router-view>
    </div>
    <footer>Test Footer</footer>
  </div>
  <!-- <v-app light>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-toolbar dense>
      
        <v-toolbar-items>
          <router-link name="Home" to="/"><v-btn>Home</v-btn></router-link>
          <router-link name="Map" to="/map"><v-btn>Map</v-btn></router-link>
        </v-toolbar-items>
      </v-toolbar>


    <v-content>
      <router-view>
      </router-view>

    </v-content>
    <v-footer>
      Test footer
    </v-footer>
  </v-app> -->
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from './components/HelloWorld.vue';
export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
export default Vue.extend({
  name: "App",
  methods: {
    capitalize,
  },
  data: () => ({
    nav: ["home", "blog", "resume", "map"],
  }),
  computed: {
    activeRoute: function(): string {
      return this.$route.path;
    },
  },
});
</script>

import { createApp } from "vue"
import App from "./App.vue"

// Vuetify
import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi", // This is already the default value - only for display purposes
  },
  components,
  directives,
})

createApp(App).use(vuetify).mount("#app")

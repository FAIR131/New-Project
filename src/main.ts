import './assets/styles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";

import Button from 'primevue/button';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import DataTable from 'primevue/datatable';
import Row from 'primevue/row';  
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.component('pre-Button', Button);
app.component('pre-Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('DataTable', DataTable);
app.component('pre-Row', Row);

app.mount('#app')

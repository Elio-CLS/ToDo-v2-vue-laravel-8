require('./bootstrap');

import Vue from 'vue';
import App from './vue/app'
import ItemComponent from './vue/ItemComponent';
import FormComponent from './vue/FormComponent.vue';
// import bootstrap from 'bootstrap'
const app = new Vue({
    el: '#app',
    components: {
        App,
        ItemComponent,
        FormComponent,
    }
});
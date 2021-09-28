<template>
<div class="row justify-content-center">
    <div class="col-md-8">
    
        <form-component
            @reload="getList()">
        </form-component>

        <item-component
            v-for="item in items"
            :key="item.id"
            :item="item"    
            @reload="getList()">
        </item-component>

    </div>
</div>
</template>

<script>
import ItemComponent from './ItemComponent.vue';
import FormComponent from './FormComponent.vue';

export default {
    components: {
        ItemComponent,
        FormComponent,
    },
    data() {
        return {
            items: [],
        }
    },
    mounted() {
        console.log('App Component mounted.')
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            axios.get('api/items')
            .then(response => {
                this.items = response.data
            })
            .catch(error => {
                console.log(error);
            })
        },
    },
}
</script>
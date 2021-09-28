<template>
<div class="row justify-content-center">
    <div class="col-md-8">
    
        <form-component
            @nuevo="addPensamiento">
        </form-component>

        <!-- <form-component
            @nuevo="addPensamiento"
        /> -->

        <item-component
            v-for="(pensamiento, index) in pensamientos"
            :key="pensamiento.id"
            :pensamiento="pensamiento"
            @update="actualizarPensamiento(index, ...arguments)"
            @delete="borrarPensamiento(index)">
        </item-component>

        <!-- <item-component
            v-for="(pensamiento, index) in pensamientos"
            :key="pensamiento.id"
            :pensamiento="pensamiento"
            @update="actualizarPensamiento(index, ...arguments)"
            @delete="borrarPensamiento(index)">
        /> -->

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
            pensamientos: [{
                id: '1',
                descripcion: 'Hola buen dia',
                create_at: '27/09/2021'
            }],
        }
    },
    mounted() {
        console.log('Mi Pensamiento Component mounted.')
    },
    methods: {
        addPensamiento(pensamiento) {
            this.pensamientos.push(pensamiento);
        },
        borrarPensamiento(index) {
           this.pensamientos.splice(index, 1); 
        },
        actualizarPensamiento(index, pensamiento) {
            this.pensamientos[index] = pensamiento;
        },
    },
}
</script>
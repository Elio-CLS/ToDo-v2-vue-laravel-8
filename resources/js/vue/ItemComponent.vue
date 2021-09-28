<template>
    <div class="card mb-4">
        <div class="card-header">Publicado en {{ pensamiento.create_at }}</div>

        <div class="card-body">
            <input
                v-if="editStatus" 
                type="text" 
                class="form-control"
                v-model="pensamiento.descripcion">
        
            <p v-else>{{ pensamiento.descripcion }}</p>
        </div>

        <div class="card-footer">
            <button
                v-if="editStatus" 
                class="btn btn-success me-1" 
                @click="guardar()">
                Guardar
            </button>
            <button
                v-else 
                class="btn btn-primary me-1" 
                @click="editar()">
                Editar
            </button>

            <button
                v-if="editStatus" 
                class="btn btn-warning" 
                @click="cancelar()">
                Cancelar
            </button>
            <button
                v-else 
                class="btn btn-danger" 
                @click="borrar()">
                Borrar
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['pensamiento'],

        data() {
            return {
               editStatus: false,
            }
        },
        mounted() {
            console.log('Pensamiento Component mounted.')
        },
        methods: {
            borrar() {
                this.$emit('delete');
            },
            editar() {
                this.editStatus = true;
            },
            cancelar() {
                this.editStatus = false;
            },
            guardar() {
                this.editStatus = false;
                this.$emit('update', this.pensamiento);
            },
        },
    }
</script>
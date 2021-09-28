<template>
    <div class="card mb-4">
        <div class="card-header">Publicado en {{ item.created_at }}</div>

        <div class="card-body">
            <input
                v-if="editStatus" 
                type="text" 
                class="form-control"
                v-model="item.name">
        
            <p v-else>{{ item.name }}</p>
        </div>

        <div class="card-footer">
            <button
                v-if="editStatus" 
                class="btn btn-success me-1" 
                @click="actualizar()">
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
        props: ['item'],

        data() {
            return {
               editStatus: false, // Para el cambio de botones e input
            }
        },
        mounted() {
            console.log('Item Component mounted.')
        },
        methods: {
            borrar() {
                axios.delete('api/item/' + this.item.id)
                .then(response => {
                    if(response.status === 200) {
                    this.$emit('reload');
                    }
                })
                .catch(error => {
                console.log(error);
            })
            },
            editar() {
                this.editStatus = true;
            },
            cancelar() {
                this.editStatus = false;
            },
            actualizar() {
                axios.put('api/item/' + this.item.id, {
                    item: this.item
                })
                .then(response => {
                    if(response.status === 200) {
                        this.editStatus = false;
                        this.$emit('reload');
                    }
                })
            },
        },
    }
</script>
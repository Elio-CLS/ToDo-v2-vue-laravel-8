<template>
<div class="card mb-4">
    <div class="card-header">¿Que estas pensando?</div>

    <div class="card-body">

        <form action="" @submit.prevent="nuevoPensamiento()">
            <div class="form-group">
                <label for="pensamiento">
                    <input
                        type="text" 
                        name="pensamiento" 
                        id="" 
                        class="form-control"
                        v-model="descripcion">
                </label>
            </div>
            <button type="submit" class="btn btn-success mt-3">
                Enviar
            </button>
        </form>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            descripcion: '',
        }
    },
    mounted() {
        console.log('Form Component mounted.')
    },
    methods: {
        nuevoPensamiento() {
            const pensamiento = {
                id: 2,
                descripcion: this.descripcion,
                create_at: '27/09/2021'
            }
            this.$emit('nuevo', pensamiento);
            this.descripcion = '';
        }
    }
}
</script>
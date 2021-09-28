<template>
<div class="card mb-4">
    <div class="card-header">¿Que estas pensando?</div>

    <div class="card-body">

        <form action="" @submit.prevent="nuevoItem()">
            <div class="form-group">
                <label for="pensamiento">
                    <input
                        type="text" 
                        name="pensamiento" 
                        id="" 
                        class="form-control"
                        v-model="item.name">
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
            item: {
                name: '',
            }
        }
    },
    mounted() {
        console.log('Form Component mounted.')
    },
    methods: {
        nuevoItem() {
            // Si no hay nada escrito
            if(this.item.name == '') {
                return;
            }
            // Si hay algo escrito
            axios.post('api/item/store', {
                item: this.item
            })
            .then(response => {
                // Si es correcto el estatus 201
                if(response.status === 201) {
                    this.item.name = '';
                    this.$emit('reload');
                }
            })
        }
    }
}
</script>
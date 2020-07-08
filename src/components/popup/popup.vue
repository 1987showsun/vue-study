<template>
    <div class="popup-wrap" :data-display="display">
        <div class="popup-mask" @click="cancel"></div>
        <div class="popup-container todo-popup-form">
            <form @submit="handleSubmit">
                <input v-model="selectItem.value" />
                <button class="update" type="submit">UPDATE</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return{
            }
        },
        props : ['display','selectItem'],
        methods: {
            cancel() {
                this.$emit('onCancel', 'false');
            },
            handleSubmit() {
                this.$store.commit('update', this.selectItem);
                this.$emit('onCancel', 'false');
            }
        },
    }
</script>
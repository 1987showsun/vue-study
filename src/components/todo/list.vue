<template>
    <div class="list-wrap todo-list">
        <div class="items" v-for="(item, i) in list" :key="item.create_date_ms">
            <div class="item-col sort" :data-number="i+1"></div>
            <div class="item-col name">{{ item.value }}</div>
            <div class="item-col date">{{ item.create_date }}</div>
            <ul class="item-action">
                <li>
                    <button @click="handleRemove(item)">
                        <v-icon name="x"></v-icon>
                    </button>
                </li>
                <li>
                    <button @click="handleUpdate(item)">
                        <v-icon name="edit-2"></v-icon>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default ({
        data: function(){
            return{
            }
        },
        computed: {
            list () {
                return this.$store.state.list
            }
        },
        methods: {
            handleRemove(item) {
                this.$store.commit('remove', item.create_date_ms);
            },
            handleUpdate(item) {
                this.$emit('onUpdate', item);
            }
        },
    })
</script>
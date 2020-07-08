<template>
    <form class="todo-form" @submit="addTodoItems">
        <input v-model="name" />
        <button type="submit">ADD</button>
    </form>
</template>

<script>
    export default ({
        data: function(){
            return{
                name: ""
            }
        },

        methods: {
            addTodoItems() {
                const checkNull = this.name.trim()==''? true:false;
                if( !checkNull ){
                    this.$store.commit('add',this.name);
                    this.name = "";
                }else{
                    alert('null');
                }
            }
        },
    })
</script>
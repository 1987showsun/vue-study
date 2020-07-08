<template>
    <div class="todo-wrap">
        <Form />
        <List @onUpdate="handleSelect"/>
        <Popup :display="display" :selectItem="item" @onCancel="handleCancel" />
    </div>
</template>

<script>
    import Form       from '../components/todo/form.vue';
    import List       from '../components/todo/list.vue';
    import Popup      from '../components/popup/popup.vue';

    export default ({
        data: function(){
            return{
                list    : [],
                display : "false",
                item    : {}
            }
        },
        components: {
            Form,
            List,
            Popup
        },
        methods: {
            handleCancel( val ) {
                this.display = val;
            },
            handleSelect( val ){
                this.item    = {...val};
                this.display = "true";
            }
        },
    })
</script>
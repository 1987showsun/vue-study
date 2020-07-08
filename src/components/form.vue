<template>
    <form>
        <Input type="text"   name="name" :value="name" @onChange="onChange"/>
        <Input type="number" name="tel"  :value="tel"  @onChange="onChange"/>
        {{`${name}, ${tel}`}}
    </form>
</template>

<script>
    import Input from './input';

    export default {
        components: {
            Input
        },
        data: function() {
            return{
                name: "sun",
                tel: "0912345678"
            }
        },
        methods: {
            onChange: function(name, value) {
                this[name] = value;
            }
        },
    }
</script>
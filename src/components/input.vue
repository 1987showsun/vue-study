<template>
    <div>
        <input :type="inputType" v-model="inputValue" @input="returnVal"/>
        {{inputValue}}
    </div>
</template>

<script>
    export default {
        data: function(){
            return{
                inputType    : this.type,
                inputName    : this.name,
                inputValue   : this.value,
            }
        },

        props: {
            type: {
                type: String,
                default: ""
            },
            name: {
                type: String,
                default: ""
            },
            value: {
                type: String,
                default: ""
            },
        },

        methods: {
            returnVal() {
                this.$emit("onChange", this.inputName,  this.inputValue);
            }
        },
    }
</script>
<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/todo">Todo</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    // import '@/stylesheets/about.scss';
    import '@/stylesheets/nav.scss';
    export default ({
        data: function(){
            return{
                
            }
        }
    })
</script>
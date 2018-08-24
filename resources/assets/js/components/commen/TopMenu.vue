<template>
    <div class="container">
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <router-link to="/" class="navbar-brand">Laravel-Vue-Spa</router-link>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <router-link to="/about" tag="li">
                            <a>About</a>
                        </router-link>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {

    }
</script>

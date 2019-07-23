<template>
    <div>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Project name</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><router-link to="/">home</router-link></li>
                        <li><router-link to="/foo">about</router-link></li>
                        <li><router-link to="/foo">关于我们</router-link></li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>

        <div>
            <p>this is a test</p>
        </div>

    </div>
</template>

<script>

</script>

<style></style>
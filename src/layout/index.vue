<template>
    <div class="layout">
        <div id="app-main">
            <div class="header">
                <Logo />
                <div class="head_center">
                    123
                </div>
            </div>
            <router-view />
        </div>
    </div>
</template>
<script>
import Logo from './component/Logo'
export default {
    name: 'Layout',
    components: {
        Logo
    }
}
</script>
<style lang="scss" scoped>
.header {
    height: 80px;
    width: 100%;
    padding: 10px 20px;
}
</style>
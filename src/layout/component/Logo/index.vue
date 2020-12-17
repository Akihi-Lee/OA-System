<template>
    <div class="logo_title">
        <img v-if="logoType != 'onlyTitle'" :src="logo" alt="" :class="{'mix_logo': logoType=='mix', 'logo': logoType == 'onlyLogo'}">
        <span v-if="logoType != 'onlyLogo'">{{ title }}</span>
    </div>
</template>
<script>
export default {
    name: 'Logo',
    props: {
        logoType: {
            type: String,
            default: 'mix'
        }
    },
    data() {
        return {
            title: 1212,
            logo: require('@/assets/logo.png')
        }
    }
}
</script>
<style lang="scss" scoped>
.logo_title {
    height: 100%;
    display: flex;
    align-items: center;
    .mix_logo {
        width: 30px;
        height: 30px;
    }
    .logo {
        width: 100%;
        height: 100%;
    }
    span {
        color: #333;
        font-size: 18px;
    }
}
</style>
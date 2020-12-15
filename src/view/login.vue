<template>
    <div class="login">
        登录页
        <input v-model="account" placeholder="账号">
        <input v-model="password" placeholder="密码" type="password">
        <button @click="login">登录</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            account: '',
            password: ''
        }
    },
    mounted() {
    },
    methods: {
        login() {
            this.$store.dispatch('user/login', {
                account: this.account,
                password: this.password
            }).then(res => {
                console.log(res)
            })
        }
    }
}
</script>
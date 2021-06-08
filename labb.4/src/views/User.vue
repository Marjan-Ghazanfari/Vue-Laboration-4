<template>
    <div class="my-5 text-center">
        <div>{{ userId }}</div>
        <h4>{{ user }}</h4>
        <div>{{ user.email }}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'User',
    props: ['userId'],
    computed: {
      ...mapGetters(['user'])
    },
    methods: {
      ...mapActions(['getUser','clearUser'])
    },
    created() {
      this.getUser(this.userId)
    },
    destroyed() {
      this.clearUser()
    }
}
</script>

<style>

</style>
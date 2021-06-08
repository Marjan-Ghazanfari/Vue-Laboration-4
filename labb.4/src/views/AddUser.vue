<template>
    <div class="container shadow my-5 card text-center d-flex justify-content-center align-items-center z-depth-5" style="background-color: #e3f2fd;">
        <form class="col-6 my-4" @submit.prevent="addUser">
            <h3 class="text-center mb-5">Add User</h3>
            <div class="row mb-3">
                <input type="text" class="form-control" v-model="user.name" id="name" placeholder="User's Name...">
            </div>
            <div class="row mb-3">
                <input type="email" class="form-control" v-model="user.email" id="email" placeholder="User's Email...">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Add</button>
        </form>
    </div> 
</template>

<script>
export default {
    name: 'NewUser',
    data() {
        return {
            user: {
                name: '',
                email: ''
            }
        }
    },
    methods: {
        async add(){
            const userId = await this.$store.dispatch('addUser', {...this.user})
            console.log(userId)
            this.user = {name: '', email: ''}
        }
    }

}
</script>

<style>

</style>
<template>
  <div class="mt-5 text-center d-flex flex-column justify-content-center align-items-center">
    <router-link class="btn btn-success mb-3 col-6" :to="{ name: 'NewUser' }"><i class="fas fa-user-plus me-1"></i>Add New User</router-link>
    <div v-for="user in users" :key="user.id" class="card p-3 my-2 col-6 shadow" style="background-color: #e3f2fd;">
      <router-link :to="{ name: 'User', params: { userId: user.id } }" class="text-decoration-none text-dark">
        <h4>{{ user.name }}</h4>
        <p>{{ user.email }}</p>
      </router-link>
      <div>
        <button class="btn mt-2 col-2 ms-auto btn-danger"><i class="fas fa-user-minus me-1"></i>Delete</button>
        <router-link :to="{ name: 'EditUser' }" class="btn mt-2 col-2 me-auto btn-primary ms-1"><i class="fas fa-user-edit me-1"></i>Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Users',
  computed: {
      ...mapGetters(['users'])
    },
    methods: {
      ...mapActions(['getUsers'])
    },
    created() {
      this.getUsers()
    }

}
</script>

<style>

</style>
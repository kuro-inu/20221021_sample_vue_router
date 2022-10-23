<script setup>
import { ref } from 'vue';
import axios from "axios";

const TITLE = "User List";
let userList = ref([{ id: 1 }, { id: 2 }]);

axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        let userData = response.data;
        console.log(userData);
        userList.value = userData;
    })
    .catch(error => console.log(error));


</script>

<template>
    <h1 class="font-bold text-3xl">{{ TITLE }}</h1>

    <div class="overflow-x-auto">
        <table class="table w-full table-zebra">
            <!-- head -->
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr v-for="user in userList" class="hover">
                    <th>{{ user.id }}</th>
                    <td><router-link :to="{name: 'userpage', params: {id: user.id}}" class="link link-neutral">{{ user.name }}</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>


</template>

<style scoped>

</style>
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
    <div class="text-sm breadcrumbs">
        <ul>
            <li>
                <router-link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-home w-4 h-4 mr-2 stroke-current" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                    </svg>
                    User list
                </router-link>
            </li>
        </ul>
    </div>

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
                    <td>
                        <router-link :to="{ name: 'userpage', params: { id: user.id } }" class="link link-neutral">{{
                                user.name
                        }}</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>


</template>

<style scoped>

</style>
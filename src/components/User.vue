<script setup>
import { ref } from 'vue';
import axios from "axios";
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const TITLE = `ユーザー情報`;
let userData = ref({});
let isLoadEnd = ref(false);

axios
    .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
    .then(response => {
        let getUserData = response.data;
        console.log(getUserData);
        userData.value = getUserData;
        isLoadEnd.value = true;
    })
    .catch(error => {
        console.error(error);
        if (error.response.status === 404) {
            router.replace({
                path: "/not-found"
            });
        }
    });

</script>

<template>
    <h1 class="font-bold text-3xl">{{ TITLE }}</h1>

    <transition name="fade">
        <div v-show="!isLoadEnd" class="loading-layer inset-0">
            <div class="loading-layer-message">
                <progress class="progress w-56"></progress>
            </div>
        </div>
    </transition>

    <div v-show="isLoadEnd">
        <div class="text-sm breadcrumbs">
            <ul>
                <li>
                    <router-link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="w-4 h-4 mr-2 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                        </svg>
                        User list
                    </router-link>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="w-4 h-4 mr-2 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                    </svg>
                    {{ userData.name }}
                </li>
            </ul>
        </div>

        <div class="overflow-x-auto">
            <table class="table w-full">
                <!-- <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                </tr>
            </thead> -->
                <tbody>
                    <tr class="hover">
                        <th>Id</th>
                        <td>{{ userData.id}}</td>
                    </tr>
                    <tr class="hover">
                        <th>名前</th>
                        <td>{{ userData.name}}</td>
                    </tr>
                    <tr class="hover">
                        <th>E-Mail</th>
                        <td>{{ userData.email}}</td>
                    </tr>
                    <tr class="hover">
                        <th>電話番号</th>
                        <td>{{ userData.phone}}</td>
                    </tr>
                    <tr class="hover">
                        <th>ホームページ</th>
                        <td>{{ userData.website}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>

    <div class="flex justify-center my-4 space-x-4">
        <router-link to="/" class="btn">戻る</router-link>
        <router-link to="/" class="btn">更新</router-link>
    </div>
</template>

<style scoped>
.loading-layer {
    background-color: #fff;

    height: 100vh;
    width: 100vw;
    margin: 0;
    position: absolute;
    z-index: 10000;

    display: flex;
    justify-content: center;
    align-items: center;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
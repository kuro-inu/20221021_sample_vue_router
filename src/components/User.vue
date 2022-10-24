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
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-home w-4 h-4 mr-2 stroke-current" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                        </svg>
                        User list
                    </router-link>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-friends w-4 h-4 mr-2 stroke-current" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="7" cy="5" r="2"></circle>
                        <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5"></path>
                        <circle cx="17" cy="5" r="2"></circle>
                        <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4"></path>
                    </svg>
                    {{ userData.name }}
                </li>
            </ul>
        </div>

        <div class="content">
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
                            <td>{{ userData.id }}</td>
                        </tr>
                        <tr class="hover">
                            <th>名前</th>
                            <td>{{ userData.name }}</td>
                        </tr>
                        <tr class="hover">
                            <th>E-Mail</th>
                            <td>{{ userData.email }}</td>
                        </tr>
                        <tr class="hover">
                            <th>電話番号</th>
                            <td>{{ userData.phone }}</td>
                        </tr>
                        <tr class="hover">
                            <th>ホームページ</th>
                            <td>{{ userData.website }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="flex justify-center my-4 space-x-4">
        <router-link to="/" class="btn">戻る</router-link>
        <!-- The button to open modal -->
        <label for="my-modal-3" class="btn modal-button">更新</label>
    </div>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box relative">
            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-lg font-bold">('A`;)!!</h3>
            <p class="py-4">
                更新画面は実装していないんです…。
            </p>
        </div>
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


.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}

.content {
    width: 95%;
    margin: 0 auto;
}
</style>
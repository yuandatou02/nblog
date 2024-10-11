import {defineStore} from "pinia";
import type {UserInfo} from "@/api/user/types";

const useUserStore = defineStore("useUserStore", {
    state: (): UserInfo => ({
        user: {},
        token: "",
    }),
    actions: {
        setUserAndToken(user: any, token: string) {
            this.user = user;
            this.token = token;
        }
    },
    getters: {},
    persist: {
        enabled: true,
        storage: sessionStorage
    }
});
// 导出useUserStore
export default useUserStore;
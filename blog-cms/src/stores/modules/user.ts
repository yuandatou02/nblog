import {defineStore} from "pinia";
import type {UserInfo} from "@/api/user/types";

const useUserStore = defineStore("useUserStore", {
    state: (): UserInfo => ({
        user: {},
    }),
    actions: {
        setUser(user: any) {
            this.user = user;
        }
    },
    getters: {},
    persist: {
        storage: sessionStorage
    }
});
// 导出useUserStore
export default useUserStore;
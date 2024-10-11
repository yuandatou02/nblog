import {defineStore} from "pinia";

const useAppStore = defineStore("useAppStore", {
    state: () => ({
        sidebar: {
            opened: true,
            withoutAnimation: false
        },
        device: 'desktop'
    }),
    actions: {
        closeSideBar(withoutAnimation: boolean) {
            this.sidebar.opened = false;
            this.sidebar.withoutAnimation = withoutAnimation;
        }
    },
    getters: {}
});
// 导出
export default useAppStore;
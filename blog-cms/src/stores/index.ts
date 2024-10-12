import useAppStore from "@/stores/modules/app";
import useSettingStore from "@/stores/modules/settings";
import useUserStore from "@/stores/modules/user";

const useStore = () => ({
    app: useAppStore(),
    settings: useSettingStore(),
    user: useUserStore(),
});

// 统一导出
export default useStore;
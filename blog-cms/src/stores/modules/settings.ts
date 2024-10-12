import {defineStore} from "pinia";
import defaultSettings, {type DefaultSettings} from "@/settings";

const useSettingStore = defineStore("useSettingStore", {
    state: (): DefaultSettings => ({
        ...defaultSettings
    })
});

export default useSettingStore;
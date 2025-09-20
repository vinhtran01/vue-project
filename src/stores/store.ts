import { defineStore } from "pinia";
interface StoreState {
  user: any;
}
export const useAppStore = defineStore("app", {
  state: (): StoreState => ({
    user: null as any,
  }),
  actions: {
    updateStore(type: keyof Omit<StoreState, "updateStore">, payload: any) {
      if (type in this) {
        this[type] = payload;
      }
    },
  },
});

import {defineStore} from "pinia";

export const useAppStore = defineStore('appStore', {
    state: () => ({ myMessage: undefined } as { myMessage?: string }),
    getters: {
        myCompleteMessage: (state) => `${state.myMessage}`,
    },
    actions: {
        changeMessage(msg: string) {
            this.myMessage = msg
        },
    },
})

import {shallowMount} from "@vue/test-utils";
import {createTestingPinia} from "@pinia/testing";

const wrapperFactory = (component) => shallowMount(component, {
    global: {
        plugins: [createTestingPinia()]
    }
})

export default wrapperFactory

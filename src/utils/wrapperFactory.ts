import {ComponentMountingOptions, shallowMount} from "@vue/test-utils";
import {createTestingPinia} from "@pinia/testing";
import { merge } from 'lodash'

const wrapperFactory = <VueComponent>(component: VueComponent, options?: ComponentMountingOptions<VueComponent>) => {
    const defaultOptions: ComponentMountingOptions<VueComponent> = {
        global: {
            plugins: [createTestingPinia()],
            renderStubDefaultSlot: true
        },
    }

    return shallowMount(component, merge(options ?? {}, defaultOptions))
}

export default wrapperFactory

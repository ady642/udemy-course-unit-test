import { vi } from "vitest"
import { shallowMount } from "@vue/test-utils"
import HelloWorld from "./HelloWorld.vue";
import {createTestingPinia} from "@pinia/testing";
import {useAppStore} from "../stores/appStore";
import TitleComponent from "./TitleComponent.vue";

vi.mock('axios')

describe('HelloWorld test suites', () => {
    /*it('should make a fetch call using correct url depending on msg property', async () => {
        // Given the HelloWorld component is mounted
        const instance = shallowMount(HelloWorld)
        // When the msg property changes
        await instance.setProps({
            msg: 'test'
        })
        // Then we expect that the fetch function is called with good url
        expect(fetch).toHaveBeenNthCalledWith(1, 'https://example.com/test')
    })
    it('should call axios.get function with https://httpbin.org/get when msg property changes', async () => {
        // Given the HelloWorld component is mounted
        const instance = shallowMount(HelloWorld)
        // When the msg property changes
        await instance.setProps({
            msg: 'test'
        })
        // Then we expect that the fetch function is called with good url
        expect(axios.get).toHaveBeenNthCalledWith(1, 'https://httpbin.org/get')
    })*/
    it('should dispatch changeMessage with "test" if msg property changes as "test"', async () => {
        const wrapper = shallowMount(HelloWorld, {
            global: {
                plugins: [createTestingPinia()]
            }
        })

        const store = useAppStore()

        await wrapper.setProps({
          msg: 'test'
        })

        expect(store.changeMessage).toHaveBeenNthCalledWith(1, 'test')
    })
    it('should bind the msg property with a prefix(My Title:) to TitleComponent', () => {
        const wrapper = shallowMount(HelloWorld, {
            props: {
                msg: 'First section'
            }
        })

        const titleComponentWrapper = wrapper.findComponent(TitleComponent)

        expect(titleComponentWrapper.props('value')).toBe('My Title: First section')
    })
})

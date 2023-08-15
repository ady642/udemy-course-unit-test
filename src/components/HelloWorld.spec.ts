import {beforeEach, vi} from "vitest"
import { shallowMount } from "@vue/test-utils"
import HelloWorld, {HelloWorldProps} from "./HelloWorld.vue"
import {createTestingPinia} from "@pinia/testing";
import {useAppStore} from "../stores/appStore";
import TitleComponent from "./TitleComponent.vue";
import {create} from "axios";
import wrapperFactory from "../utils/wrapperFactory";

vi.mock('axios')

const createWrapper = (props?: HelloWorldProps) => wrapperFactory(HelloWorld, {props})

let wrapper = createWrapper()

describe('HelloWorld test suites', () => {
    beforeEach(() => {
        wrapper = createWrapper()
    })
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
    it('should increment the count when the increment button is clicked', async () => {
        const button = wrapper.find('button')
        await button.trigger('click')

        expect(button.text()).toBe('count is 1')
    })
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
    it('should not dispatch changeMessage action if msg property changes for a nullish value', async () => {
        const store = useAppStore()

        await wrapper.setProps({
            msg: ''
        })

        expect(store.changeMessage).not.toHaveBeenNthCalledWith(1, '')
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
    /*test.each([
        {msg: 'First section', titleComponentExists: true},
        {msg: undefined, titleComponentExists: false},
        {msg: '', titleComponentExists: false},
    ])('msg: $msg -> titleComponentExists: $titleComponentExists', ({ msg, titleComponentExists }) => {
        const wrapper = shallowMount(HelloWorld, {
            props: {
                msg
            }
        })

        const titleComponentWrapper = wrapper.findComponent(TitleComponent)

        expect(titleComponentWrapper.exists()).toBe(titleComponentExists)
    })*/
    test.each([
        {msg: 'First section', successClassExists: false},
        {msg: undefined, successClassExists: true},
        {msg: '', successClassExists: true},
    ])('msg: $msg -> successClassExists: $successClassExists', ({ msg, successClassExists }) => {
        const wrapper = shallowMount(HelloWorld, {
            props: {
                msg
            }
        })

        const cardElementWrapper = wrapper.find<HTMLDivElement>('.card-success')

        expect(cardElementWrapper.exists()).toBe(successClassExists)
    })
    test.each([
        {msg: 'First section', titleComponentStyle: undefined},
        {msg: undefined, titleComponentStyle: 'display: none;'},
        {msg: '', titleComponentStyle: 'display: none;'},
    ])('msg: $msg -> titleComponentStyle: $titleComponentStyle', ({ msg, titleComponentStyle }) => {
        const wrapper = shallowMount(HelloWorld, {
            props: {
                msg
            }
        })

        const titleComponentWrapper = wrapper.findComponent(TitleComponent)

        expect(titleComponentWrapper.element.attributes.getNamedItem('style')?.value).toBe(titleComponentStyle)
    })
    it('should emit card-clicked when the card is clicked', async () => {
        const wrapper = createWrapper()

        const card = wrapper.find('.card')

        await card.trigger('click')

        expect(wrapper.emitted('card-clicked')).toBeTruthy()
    })
    it('should emit up event when title component emit on-mounted event', async () => {
        const wrapper = createWrapper()

        const titleComponentWrapper = wrapper.findComponent(TitleComponent)

        titleComponentWrapper.vm.$emit('on-mounted')

        expect(wrapper.emitted('up')).toBeTruthy()
        expect(wrapper.emitted('up')).toHaveLength(1)
        expect(wrapper.emitted('up')?.[0][0]).toBe(0)
    })
})

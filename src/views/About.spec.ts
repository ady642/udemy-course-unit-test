import wrapperFactory from "../utils/wrapperFactory";
import About from "./About.vue";
import TitleComponent from "../components/TitleComponent.vue";
import {useAppStore} from "../stores/appStore";
import {beforeEach} from "vitest";

let wrapper = wrapperFactory(About)

describe('About suite tests', () => {
    beforeEach(() => {
        wrapper = wrapperFactory(About)
    })
    it('should dispatch changeMessage when TitleComponent emits on-mounted', async () => {
        const titleComponentWrapper = wrapper.findComponent(TitleComponent)

        const store = useAppStore()

        titleComponentWrapper.vm.$emit('on-mounted', 'test')

        expect(store.changeMessage).toHaveBeenCalledWith('test')
    })
    it('should change the title when the titleComponent emit click event', async () => {
        const titleComponentWrapper = wrapper.findComponent(TitleComponent)

        await titleComponentWrapper.trigger('click')

        expect(titleComponentWrapper.props('value')).toBe('About !!!')
    })
    it('should toggle TitleComponent when the button is clicked', async () => {
        const button = wrapper.find('button')
        let titleComponentWrapper = wrapper.findComponent(TitleComponent)

        await button.trigger('click')

        expect(titleComponentWrapper.exists()).toBe(false)

        await button.trigger('click')
        titleComponentWrapper = wrapper.findComponent(TitleComponent)
        expect(titleComponentWrapper.exists()).toBe(true)
    })
    it('should emit new-message event when myMessage changes', async () => {
        const store = useAppStore()

        await store.$patch({ myMessage: 'This is a new message' })

        expect(wrapper.emitted('new-message')).toBeTruthy()
        expect(wrapper.emitted('new-message')?.[0][0]).toBe('This is a new message')
        expect(wrapper.emitted('new-message')).toHaveLength(1)
    })
    it('should not emit new-message event when myMessage changes and is undefined', async () => {
        const wrapper = wrapperFactory(About)
        const store = useAppStore()

        await store.$patch({ myMessage: '' })

        expect(wrapper.emitted('new-message')).toBeFalsy()
    })
    it('should get the user on http://server.com/user with payload as { id: 123 } when the getter changes', async () => {
        const store = useAppStore()

        await store.$patch({ myMessage: 'This is a new message' })

        expect(fetch).toHaveBeenCalledWith('http://server.com/user', {
            method: 'POST',
            body: '{"id":123}'
        })
    })
})

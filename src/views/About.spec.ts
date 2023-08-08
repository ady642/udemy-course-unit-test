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
})

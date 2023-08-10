import Home from "./Home.vue";
import {beforeEach} from "vitest";
import wrapperFactory from "../utils/wrapperFactory";
import {useAppStore} from "../stores/appStore";
import {HTMLInputElement} from "happy-dom";
import TitleComponent from "../components/TitleComponent.vue";

const push = vi.fn()

vi.mock('vue-router', () => ({
    useRouter: () => ({
        push
    })
}))

let wrapper = wrapperFactory(Home)

describe('Home suite tests', () => {
    beforeEach(() => {
        wrapper = wrapperFactory(Home)
    })
    it('should go the about view when I click on "Go to About" button', async () => {
        const button = wrapper.find('button')
        await button.trigger('click')

        expect(push).toHaveBeenCalledWith('/about')
    })
    it('should dispatch changeMessage action when myCompleteMessage changes', async () => {
        const store = useAppStore()

        await store.$patch({ myMessage: 'The new value' })

        expect(store.changeMessage).toHaveBeenCalledOnce()
        expect(store.changeMessage).toHaveBeenCalledWith('Test')
    })
    it('should bind correctly the state myMessage with the value property of TitleComponent', async () => {
        const store = useAppStore()

        await store.$patch({ myMessage: 'Title' })

        const titleComponentWrapper = wrapper.findComponent(TitleComponent)


        expect(titleComponentWrapper.props('value')).toBe('Title')
    })
    test.each([
        { message: '', titleComponentExists: false },
        { message: 'test', titleComponentExists: true },
    ])('message: $message -> titleComponent exists: $titleComponentExists', async ({ message, titleComponentExists }) => {
        const store = useAppStore()

        await store.$patch({ myMessage: message })

        const titleComponentWrapper = wrapper.findComponent(TitleComponent)

        expect(titleComponentWrapper.exists()).toBe(titleComponentExists)
    })
})

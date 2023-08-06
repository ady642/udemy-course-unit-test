import wrapperFactory from "../utils/wrapperFactory";
import About from "./About.vue";
import TitleComponent from "../components/TitleComponent.vue";
import {useAppStore} from "../stores/appStore";

describe('About suite tests', () => {
    it('should dispatch changeMessage when TitleComponent emits on-mounted', async () => {
        const wrapper = wrapperFactory(About)

        const titleComponentWrapper = wrapper.findComponent(TitleComponent)

        const store = useAppStore()

        titleComponentWrapper.vm.$emit('on-mounted', 'test')

        expect(store.changeMessage).toHaveBeenCalledWith('test')
    })
})

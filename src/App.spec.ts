import {shallowMount, mount} from "@vue/test-utils";
import App from "./App.vue"
import { it, expect } from "vitest"
import wrapperFactory from "./utils/wrapperFactory";

it("should render the content of hello world", () => {
    const wrapper = shallowMount(App)

    const routerView = wrapper.find('router-view')

    expect(routerView.exists()).toBe(true)
})

it("should open new window when schema is clicked", async () => {
    const wrapper = wrapperFactory(App)
    window.open = vi.fn()

    const schema = wrapper.find('.schema')

    await schema.trigger('click')

    expect(window.open).toHaveBeenCalledWith('https://google.com', '_blank')
})

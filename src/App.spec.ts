import {shallowMount, mount} from "@vue/test-utils";
import App from "./App.vue"
import { it, expect } from "vitest"

it("should render the content of hello world", () => {
    const wrapper = shallowMount(App)

    const routerView = wrapper.find('router-view')

    expect(routerView.exists()).toBe(true)
})

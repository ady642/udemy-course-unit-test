import {shallowMount, mount} from "@vue/test-utils";
import App from "./App.vue"
import { it, expect } from "vitest"

it("should render the content of hello world", () => {
    const instance = shallowMount(App)

    console.log(instance.html())

    expect(instance.html()).toContain("official Vue")
})

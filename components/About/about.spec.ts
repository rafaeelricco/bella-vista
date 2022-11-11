// test intial
import About from './about.vue'

describe('About.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(About, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

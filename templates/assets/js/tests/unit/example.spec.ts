import { shallowMount } from '@vue/test-utils';
import HomeForm from '@/components/HomeForm.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    // @ts-ignore
    const wrapper = shallowMount(HomeForm, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

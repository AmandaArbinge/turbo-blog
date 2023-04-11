import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TurboPostForm } from './TurboPostForm'
export default {
  title: '/TurboPostForm',
  component: TurboPostForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ref: { table: { disable: true } },
  },
} as ComponentMeta<typeof TurboPostForm>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TurboPostForm> = (args) => {
  return <TurboPostForm {...args} />
}

export const ITurboPostForm = Template.bind({})
ITurboPostForm.args = {
  emptyMessage: '',
  isLoading: false,
}

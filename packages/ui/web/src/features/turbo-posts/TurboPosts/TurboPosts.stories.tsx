import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TurboPosts } from './TurboPosts'

export default {
  title: '/TurboPosts',
  component: TurboPosts,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ref: { table: { disable: true } },
  },
} as ComponentMeta<typeof TurboPosts>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TurboPosts> = (args) => {
  return <TurboPosts {...args} />
}

export const ITurboPosts = Template.bind({})

ITurboPosts.args = {
  heading: 'hej',
  content: 'lorem ipsum',
}

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TurboPost } from './TurboPost'

export default {
  title: '/TurboPosts',
  component: TurboPost,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ref: { table: { disable: true } },
  },
} as ComponentMeta<typeof TurboPost>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TurboPost> = (args) => {
  return <TurboPost {...args} />
}

export const ITurboPosts = Template.bind({})

ITurboPosts.args = {
  heading: 'hej',
  content: 'lorem ipsum',
  tags: ['fun', 'popular'],
}

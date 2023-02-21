import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TurboPostList } from './TurboPostList'
import { Postdata } from './TurboPostListData'

export default {
  title: '/TurboPostList',
  component: TurboPostList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ref: { table: { disable: true } },
  },
} as ComponentMeta<typeof TurboPostList>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TurboPostList> = (args) => {
  return <TurboPostList {...args} />
}

export const ITurboPostList = Template.bind({})

ITurboPostList.args = {
  posts: Postdata,
}

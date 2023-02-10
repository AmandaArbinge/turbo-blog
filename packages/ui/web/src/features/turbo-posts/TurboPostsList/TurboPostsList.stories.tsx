import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TurboPostsList } from './TurboPostsList'
import { Postdata } from './TurboPostsListData'

export default {
  title: '/TurboPostsList',
  component: TurboPostsList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ref: { table: { disable: true } },
  },
} as ComponentMeta<typeof TurboPostsList>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TurboPostsList> = (args) => {
  return <TurboPostsList {...args} />
}

export const ITurboPostsList = Template.bind({})

ITurboPostsList.args = {
  posts: Postdata,
}

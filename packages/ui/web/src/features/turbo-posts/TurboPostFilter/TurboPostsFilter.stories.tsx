import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TurboPostsFilter } from './TurboPostsFilter'
import React from 'react'
import { storyBook1Filter, storyBook2Filter } from './TurboPostsFilterData'

export default {
  title: 'TurboPost/TurboPostsFilter',
  component: TurboPostsFilter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ref: { table: { disable: true } },
  },
} as ComponentMeta<typeof TurboPostsFilter>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TurboPostsFilter> = (args) => {
  return <TurboPostsFilter {...args} />
}

export const FilterWithOneDisabledChip = Template.bind({})

FilterWithOneDisabledChip.args = {
  filters: storyBook1Filter,
}

export const FilterWithClearButton = Template.bind({})
FilterWithClearButton.args = {
  filters: storyBook2Filter,
}

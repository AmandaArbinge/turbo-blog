import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Chip } from './Chip'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/Chip',
  component: Chip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ref: { table: { disable: true } },
  },
} as ComponentMeta<typeof Chip>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chip> = (args) => {
  return <Chip {...args} />
}

export const Default = Template.bind({})
Default.args = {
  selected: false,
  title: 'default',
}
export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  title: 'disabled',
}

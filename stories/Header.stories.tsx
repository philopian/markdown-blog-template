import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Header from '@/components/Header'

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  className: 'text-blue-600',
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}

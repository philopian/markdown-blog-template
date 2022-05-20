import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import BlogCard from '@/components/BlogCard'
import { Post } from '@/types/index'

export default {
  title: 'Components/BlogCard',
  component: BlogCard,
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof BlogCard>

const Template: ComponentStory<typeof BlogCard> = (args) => <BlogCard {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'sdfsdfsd',
  publishedAt: '',
  summary: '...',
  image: '.',
  tags: [],
}
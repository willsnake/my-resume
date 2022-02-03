import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { COLOR_OPTIONS } from '../../ThemeProvider/types'

import { Span as LocalSpan } from './Span'

export default {
  title: 'Typography/Span',
  component: LocalSpan,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', backgroundColor: COLOR_OPTIONS['black'] }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof LocalSpan>

export const Span: ComponentStory<typeof LocalSpan> = (args) => <LocalSpan {...args}>Example</LocalSpan>

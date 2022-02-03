import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { COLOR_OPTIONS } from '../../ThemeProvider/types'

import { H1 as LocalH1 } from './H1'

export default {
  title: 'Typography/H1',
  component: LocalH1,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', backgroundColor: COLOR_OPTIONS['black'] }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof LocalH1>

export const H1: ComponentStory<typeof LocalH1> = (args) => <LocalH1 {...args}>Example</LocalH1>

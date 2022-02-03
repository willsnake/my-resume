import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { COLOR_OPTIONS } from '../../ThemeProvider/types'

import { H3 as LocalH3 } from './H3'

export default {
  title: 'Typography/H3',
  component: LocalH3,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', backgroundColor: COLOR_OPTIONS['darkGrey'] }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof LocalH3>

export const H3: ComponentStory<typeof LocalH3> = (args) => <LocalH3 {...args}>Example</LocalH3>

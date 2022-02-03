import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { COLOR_OPTIONS } from '../../ThemeProvider/types'

import { H2 as LocalH2 } from './H2'

export default {
  title: 'Typography/H2',
  component: LocalH2,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', backgroundColor: COLOR_OPTIONS['primary'] }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof LocalH2>

export const H2: ComponentStory<typeof LocalH2> = (args) => <LocalH2 {...args}>Example</LocalH2>

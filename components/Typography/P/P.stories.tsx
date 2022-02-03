import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { COLOR_OPTIONS } from '../../ThemeProvider/types'

import { P as LocalP } from './P'

export default {
  title: 'Typography/P',
  component: LocalP,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', backgroundColor: COLOR_OPTIONS['primary'] }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof LocalP>

export const P: ComponentStory<typeof LocalP> = (args) => <LocalP {...args}>Example</LocalP>

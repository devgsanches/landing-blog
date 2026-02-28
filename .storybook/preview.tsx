import type { Preview } from '@storybook/nextjs-vite'
import '../app/globals.css'
import React from 'react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      test: 'todo'
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/'
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-sidebar text-sidebar-foreground">
        <Story />
      </div>
    )
  ]
}

export default preview

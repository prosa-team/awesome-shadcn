import type { Preview } from '@storybook/react-vite'
import React from 'react'

import '../src/index.css'
import '../src/components/dotmatrix-loader.css'

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color|Color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      codePanel: true,
    },
    a11y: { test: 'todo' },
  },
  globalTypes: {
    theme: {
      description: 'Light or dark theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [
    (Story, context) => {
      const dark = context.globals.theme === 'dark'
      const docs = context.viewMode === 'docs'
      return (
        <div
          className={dark ? 'dark' : ''}
          style={{
            background: 'var(--background)',
            color: 'var(--foreground)',
            minHeight: docs ? undefined : '100vh',
          }}
        >
          <div
            className={
              docs
                ? 'flex w-full items-center justify-center p-8'
                : 'flex min-h-screen w-full items-center justify-center p-10'
            }
          >
            <Story />
          </div>
        </div>
      )
    },
  ],
}

export default preview

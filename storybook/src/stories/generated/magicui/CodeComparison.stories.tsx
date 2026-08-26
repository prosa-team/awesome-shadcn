/**
 * The pitch is "before and after our tool", and the diff itself is the argument.
 *
 * **Registry:** Magic UI — `@magicui/code-comparison` ([docs](https://magicui.design/docs/components/code-comparison))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CodeComparison } from '@/registries/magicui/ui/code-comparison'

const meta: Meta<typeof CodeComparison> = {
  title: 'Magic UI/Code Comparison',
  component: CodeComparison,
  tags: ['autodocs'],
  args: {
    beforeCode: "Sample",
    afterCode: "Sample",
    language: "tsx",
    filename: "button.tsx",
    lightTheme: "Sample",
    darkTheme: "Sample",
  },
}

export default meta
type Story = StoryObj<typeof CodeComparison>

export const Default: Story = {}

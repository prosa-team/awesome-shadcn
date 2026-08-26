/**
 * Scrollable content must fade under a sticky header or toolbar instead of being cut off hard.
 *
 * **Registry:** Magic UI — `@magicui/progressive-blur` ([docs](https://magicui.design/docs/components/progressive-blur))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProgressiveBlur } from '@/registries/magicui/ui/progressive-blur'

const meta: Meta<typeof ProgressiveBlur> = {
  title: 'Magic UI/Progressive Blur',
  component: ProgressiveBlur,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProgressiveBlur>

export const Default: Story = {}

/**
 * An Android screenshot needs a device frame so it reads as a real app rather than a floating image.
 *
 * **Registry:** Magic UI — `@magicui/android` ([docs](https://magicui.design/docs/components/android))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Android } from '@/registries/magicui/ui/android'

const meta: Meta<typeof Android> = {
  title: 'Magic UI/Android',
  component: Android,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Android>

export const Default: Story = {}

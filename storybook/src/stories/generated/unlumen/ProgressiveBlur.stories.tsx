/**
 * Content must fade under a sticky header or bottom bar instead of being clipped hard.
 *
 * **Registry:** Unlumen UI — `@unlumen/progressive-blur` ([docs](https://ui.unlumen.com/docs/ui/unlumen/progressive-blur))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProgressiveBlur } from '@/registries/unlumen/components/unlumen-ui/progressive-blur'

const meta: Meta<typeof ProgressiveBlur> = {
  title: 'Unlumen UI/Progressive Blur',
  component: ProgressiveBlur,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProgressiveBlur>

export const Default: Story = {}

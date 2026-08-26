/**
 * A label needs a light sweep for emphasis without displacing anything around it.
 *
 * **Registry:** Unlumen UI — `@unlumen/shimmering-text` ([docs](https://ui.unlumen.com/docs/ui/unlumen/shimmering-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ShimmeringText } from '@/registries/unlumen/components/unlumen-ui/shimmering-text'

const meta: Meta<typeof ShimmeringText> = {
  title: 'Unlumen UI/Shimmering Text',
  component: ShimmeringText,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ShimmeringText>

export const Default: Story = {}

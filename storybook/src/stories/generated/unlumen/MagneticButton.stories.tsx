/**
 * The primary call to action should lean toward the cursor, making it easier to hit and harder to ignore.
 *
 * **Registry:** Unlumen UI — `@unlumen/magnetic-button` ([docs](https://ui.unlumen.com/docs/ui/unlumen/magnetic-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { MagneticButton } from '@/registries/unlumen/components/unlumen-ui/magnetic-button'

const meta: Meta<typeof MagneticButton> = {
  title: 'Unlumen UI/Magnetic Button',
  component: MagneticButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MagneticButton>

export const Default: Story = {}

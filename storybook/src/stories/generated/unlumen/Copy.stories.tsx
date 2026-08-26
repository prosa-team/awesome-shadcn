/**
 * A token, command, or ID is copied often and the button must confirm and reset itself.
 *
 * **Registry:** Unlumen UI — `@unlumen/copy` ([docs](https://ui.unlumen.com/docs/ui/buttons/copy))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CopyButton } from '@/registries/unlumen/components/unlumen-ui/copy'

const meta: Meta<typeof CopyButton> = {
  title: 'Unlumen UI/Copy Button',
  component: CopyButton,
  tags: ['autodocs'],
  args: {
    content: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof CopyButton>

export const Default: Story = {}

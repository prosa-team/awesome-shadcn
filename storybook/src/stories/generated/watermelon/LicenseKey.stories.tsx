/**
 * Micro-interaction | A licence key is revealed, copied, and masked again — entry and handling in one control.
 *
 * **Registry:** Watermelon UI — `@watermelon/license-key` ([docs](https://ui.watermelon.sh/animated-components/licence-key))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import LicenceKey from '@/registries/watermelon/components/ui/license-key'

const meta: Meta<typeof LicenceKey> = {
  title: 'Watermelon UI/Licence Key',
  component: LicenceKey,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LicenceKey>

export const Default: Story = {}

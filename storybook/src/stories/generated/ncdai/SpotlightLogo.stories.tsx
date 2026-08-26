/**
 * The logomark itself is the interaction: highlight tracks the cursor, press morphs the paths, reduced motion respected.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/spotlight-logo` ([docs](https://chanhdai.com/components/spotlight-logo))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SpotlightLogo } from '@/registries/ncdai/spotlight-logo'

const meta: Meta<typeof SpotlightLogo> = {
  title: 'Chánh Đại Components/Spotlight Logo',
  component: SpotlightLogo,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SpotlightLogo>

export const Default: Story = {}

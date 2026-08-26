/**
 * One label ("New", "Pro", a loading heading) should draw the eye with a slow sweep and no layout impact.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/shimmering-text` ([docs](https://chanhdai.com/components/shimmering-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ShimmeringText } from '@/registries/ncdai/shimmering-text'

const meta: Meta<typeof ShimmeringText> = {
  title: 'Chánh Đại Components/Shimmering Text',
  component: ShimmeringText,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ShimmeringText>

export const Default: Story = {}

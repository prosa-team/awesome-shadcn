/**
 * A text strip should speed up and reverse with scroll direction, tying motion to the reader's own input.
 *
 * **Registry:** Magic UI — `@magicui/scroll-based-velocity` ([docs](https://magicui.design/docs/components/scroll-based-velocity))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ScrollVelocityContainer } from '@/registries/magicui/ui/scroll-based-velocity'

const meta: Meta<typeof ScrollVelocityContainer> = {
  title: 'Magic UI/Scroll Based Velocity',
  component: ScrollVelocityContainer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ScrollVelocityContainer>

export const Default: Story = {}

/**
 * Micro-interaction | A long list collapses into a stack and expands on demand, saving vertical space.
 *
 * **Registry:** Watermelon UI — `@watermelon/list-stack` ([docs](https://ui.watermelon.sh/animated-components/list-stack))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ListStack } from '@/registries/watermelon/components/ui/list-stack'

const meta: Meta<typeof ListStack> = {
  title: 'Watermelon UI/List Stack',
  component: ListStack,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ListStack>

export const Default: Story = {}

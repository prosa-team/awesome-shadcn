/**
 * 10 variants — complete form layouts, so field spacing and error placement are decided for you.
 *
 * **Registry:** Watermelon UI — `@watermelon/form-1` ([docs](https://ui.watermelon.sh/components/form))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import Form1 from '@/registries/watermelon/components/ui/form-1'

const meta: Meta<typeof Form1> = {
  title: 'Watermelon UI/Form',
  component: Form1,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Form1>

export const Default: Story = {}

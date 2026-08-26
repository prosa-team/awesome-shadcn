/**
 * Cards | A deploy needs environment, progress, duration, logs, and commit in one card a developer can scan.
 *
 * **Registry:** Watermelon UI — `@watermelon/deployment-card` ([docs](https://ui.watermelon.sh/animated-components/deployment-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DeploymentCard } from '@/registries/watermelon/components/ui/deployment-card'

const meta: Meta<typeof DeploymentCard> = {
  title: 'Watermelon UI/Deployment Card',
  component: DeploymentCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DeploymentCard>

export const Default: Story = {}

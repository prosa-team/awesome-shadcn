/**
 * Generation takes seconds and the layout must reserve the final image's box now, so the transcript does not jump when it resolves.
 *
 * **Registry:** AICSS — `@aicss/image-generation` ([docs](https://www.aicss.dev/components/image-generation))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ImageGeneration } from '@/registries/aicss/ImageGeneration'

const meta: Meta<typeof ImageGeneration> = {
  title: 'AICSS/Image Generation',
  component: ImageGeneration,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ImageGeneration>

export const Default: Story = {}

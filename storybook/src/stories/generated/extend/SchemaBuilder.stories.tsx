/**
 * Users define what to extract themselves, so the product does not need a developer for every new document type.
 *
 * **Registry:** Extend UI — `@extend/schema-builder` ([docs](https://ui.extend.ai/ui/docs/components/schema-builder))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SchemaBuilderPanel } from '@/registries/extend/extend/schema-builder'

const meta: Meta<typeof SchemaBuilderPanel> = {
  title: 'Extend UI/Schema Builder',
  component: SchemaBuilderPanel,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SchemaBuilderPanel>

export const Default: Story = {}

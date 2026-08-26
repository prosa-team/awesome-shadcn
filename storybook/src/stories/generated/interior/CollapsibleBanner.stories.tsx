/**
 * You need a banner that collapses to its title or dismisses entirely.
 *
 * **Registry:** interior.dev — `@interior/collapsible-banner` ([docs](https://interior.dev/docs/collapsible-banner))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CollapsibleBanner } from '@/registries/interior/components/interior/collapsible-banner'

const meta: Meta<typeof CollapsibleBanner> = {
  title: 'interior.dev/Collapsible Banner',
  component: CollapsibleBanner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CollapsibleBanner>

export const Default: Story = {}

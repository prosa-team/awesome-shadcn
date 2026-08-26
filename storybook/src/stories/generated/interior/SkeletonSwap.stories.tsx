/**
 * You need skeleton loaders that swap to content with zero layout shift.
 *
 * **Registry:** interior.dev — `@interior/skeleton-swap` ([docs](https://interior.dev/docs/skeleton-swap))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SkeletonSwap } from '@/registries/interior/components/interior/skeleton-swap'

const meta: Meta<typeof SkeletonSwap> = {
  title: 'interior.dev/Skeleton Swap',
  component: SkeletonSwap,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SkeletonSwap>

export const Default: Story = {}

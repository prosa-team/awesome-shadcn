/**
 * A loading placeholder needs to look alive so slow requests do not read as frozen.
 *
 * **Registry:** Unlumen UI — `@unlumen/shimmer-skeleton` ([docs](https://ui.unlumen.com/docs/ui/unlumen/shimmer-skeleton))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ShimmerSkeleton } from '@/registries/unlumen/components/unlumen-ui/shimmer-skeleton'

const meta: Meta<typeof ShimmerSkeleton> = {
  title: 'Unlumen UI/Shimmer Skeleton',
  component: ShimmerSkeleton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ShimmerSkeleton>

export const Default: Story = {}

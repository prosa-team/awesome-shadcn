/**
 * Pagination | Paging must stay responsive on mobile, with the active page clearly raised.
 *
 * **Registry:** Watermelon UI — `@watermelon/continuous-pagination` ([docs](https://ui.watermelon.sh/animated-components/continuous-pagination))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ContinuousPagination } from '@/registries/watermelon/components/ui/continuous-pagination'

const meta: Meta<typeof ContinuousPagination> = {
  title: 'Watermelon UI/Continuous Pagination',
  component: ContinuousPagination,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ContinuousPagination>

export const Default: Story = {}

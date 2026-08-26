import type { Meta, StoryObj } from '@storybook/react-vite'

import { GitHubStars } from '@/registries/ncdai/github-stars'
import { TooltipProvider } from '@/registries/ncdai/ui/tooltip'

/**
 * A star count linking to the repository, with the exact number in a tooltip.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/github-stars`
 * ([docs](https://chanhdai.com/components/github-stars))
 *
 * The component renders a `Tooltip` and nothing else, so it throws outside a
 * `TooltipProvider`. The provider is the decorator here rather than a prop.
 */
const meta: Meta<typeof GitHubStars> = {
  title: 'Chánh Đại Components/GitHub Stars',
  component: GitHubStars,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  args: { repo: 'shadcn-ui/ui', stargazersCount: 74321 },
}

export default meta
type Story = StoryObj<typeof GitHubStars>

/** A five-figure count, abbreviated in the label. */
export const Default: Story = {}

/** A new project, where the count is small enough to print in full. */
export const NewProject: Story = { args: { repo: 'fachwerx/awesome-shadcn', stargazersCount: 42 } }

/** German formatting, which uses a different thousands separator. */
export const GermanLocale: Story = { args: { locales: 'de-DE' } }

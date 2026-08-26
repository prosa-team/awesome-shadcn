/**
 * An open-source project page where the live star count is the social proof, fetched rather than hard-coded.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/github-stars` ([docs](https://chanhdai.com/components/github-stars))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { GitHubStars } from '@/registries/ncdai/github-stars'

const meta: Meta<typeof GitHubStars> = {
  title: 'Chánh Đại Components/GitHub Stars',
  component: GitHubStars,
  tags: ['autodocs'],
  args: {
    repo: "shadcn-ui/ui",
    stargazersCount: 1,
  },
}

export default meta
type Story = StoryObj<typeof GitHubStars>

export const Default: Story = {}

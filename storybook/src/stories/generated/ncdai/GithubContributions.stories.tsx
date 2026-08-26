/**
 * A developer profile or team page proving activity over time, using the grid everyone already knows how to read.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/github-contributions` ([docs](https://chanhdai.com/components/github-contributions))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { GitHubContributions } from '@/registries/ncdai/github-contributions'

const meta: Meta<typeof GitHubContributions> = {
  title: 'Chánh Đại Components/GitHub Contributions',
  component: GitHubContributions,
  tags: ['autodocs'],
  args: {
    githubProfileUrl: "Sample",
  },
}

export default meta
type Story = StoryObj<typeof GitHubContributions>

export const Default: Story = {}

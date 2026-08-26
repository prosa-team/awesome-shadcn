import { Suspense } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { GitHubContributions } from '@/registries/ncdai/github-contributions'
import { GitHubContributionsFallback } from '@/registries/ncdai/github-contributions'
import type { Activity } from '@/registries/ncdai/contribution-graph'
import { TooltipProvider } from '@/registries/ncdai/ui/tooltip'

/** A year of plausible activity: quiet weekends, a busy autumn. */
const year = (): Activity[] => {
  const start = new Date('2025-08-01T00:00:00Z')
  return Array.from({ length: 365 }, (_, i) => {
    const date = new Date(start.getTime() + i * 86_400_000)
    const weekend = date.getUTCDay() === 0 || date.getUTCDay() === 6
    const busy = date.getUTCMonth() >= 8 && date.getUTCMonth() <= 10
    const count = weekend ? i % 3 : (busy ? 4 : 2) + (i % 5)
    return {
      date: date.toISOString().slice(0, 10),
      count,
      level: Math.min(4, Math.ceil(count / 2)),
    }
  })
}

/**
 * The GitHub contribution grid, as a year of activity anyone can read at a glance.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/github-contributions`
 * ([docs](https://chanhdai.com/components/github-contributions))
 *
 * The component takes a `Promise<Activity[]>` and unwraps it with `use`, so it
 * has to sit inside a `Suspense` boundary. In an app that promise is the
 * GitHub API; here it is a resolved fixture, which keeps the story offline and
 * identical on every run.
 */
const meta: Meta<typeof GitHubContributions> = {
  title: 'Chánh Đại Components/GitHub Contributions',
  component: GitHubContributions,
  tags: ['autodocs'],
  args: {
    contributions: Promise.resolve(year()),
    githubProfileUrl: 'https://github.com/shadcn',
  },
  decorators: [
    // The graph puts every day in a Tooltip, so it needs the provider above it.
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  render: (args) => (
    <div className="w-[46rem] max-w-full">
      <Suspense fallback={<GitHubContributionsFallback />}>
        <GitHubContributions {...args} />
      </Suspense>
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof GitHubContributions>

/** A full year of contributions. */
export const Default: Story = {}

/** An empty profile — every cell at level zero. */
export const NoActivity: Story = {
  args: {
    contributions: Promise.resolve(
      year().map((day) => ({ ...day, count: 0, level: 0 }))
    ),
  },
}

/** The skeleton the Suspense boundary shows while the real request is in flight. */
export const Loading: Story = {
  render: () => (
    <div className="w-[46rem] max-w-full">
      <GitHubContributionsFallback />
    </div>
  ),
}

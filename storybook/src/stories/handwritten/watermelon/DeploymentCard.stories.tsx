import type { Meta, StoryObj } from '@storybook/react-vite'

import { DeploymentCard } from '@/registries/watermelon/components/ui/deployment-card'
import type { DeploymentData } from '@/registries/watermelon/components/ui/deployment-card'

const READY: DeploymentData = {
  id: 'dpl_8f21c',
  environment: 'Production',
  status: 'Ready',
  createdTime: '12 Feb 2026, 09:41',
  createdBy: { name: 'Ada Lovelace', avatar: 'https://github.com/shadcn.png' },
  duration: '1m 12s',
  lastActive: '4 minutes ago',
  domains: ['awesome-shadcn.dev', 'www.awesome-shadcn.dev'],
  branch: 'main',
  commitMessage: 'feat(storybook): add Spell UI',
  commitHash: 'a1ce357',
  steps: [
    {
      id: 'build',
      label: 'Build',
      status: 'success',
      progress: 100,
      duration: '48s',
      metrics: { files: 587, functions: 4, assets: 132, size: '4.2 MB' },
    },
    { id: 'deploy', label: 'Deploy', status: 'success', progress: 100, duration: '14s' },
    { id: 'assign', label: 'Assign domains', status: 'success', progress: 100, duration: '2s' },
  ],
}

/**
 * A deployment summary: status, commit, domains, and the steps that ran.
 *
 * **Registry:** Watermelon UI — `@watermelon/deployment-card`
 * ([docs](https://ui.watermelon.sh/animated-components/deployment-card))
 *
 * Every state worth seeing lives in `data.status` and the per-step statuses,
 * so the sample is written three times rather than once.
 */
const meta: Meta<typeof DeploymentCard> = {
  title: 'Watermelon UI/Deployment Card',
  component: DeploymentCard,
  tags: ['autodocs'],
  args: { data: READY },
  render: (args) => (
    <div className="w-[34rem] max-w-full">
      <DeploymentCard {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof DeploymentCard>

/** A finished deployment. */
export const Default: Story = {}

/** Mid-build, with one step still running. */
export const Building: Story = {
  args: {
    data: {
      ...READY,
      status: 'Building',
      steps: [
        { ...READY.steps[0], status: 'loading', progress: 62, duration: '31s' },
        { ...READY.steps[1], status: 'pending', progress: 0, duration: '—' },
        { ...READY.steps[2], status: 'pending', progress: 0, duration: '—' },
      ],
    },
  },
}

/** A failed build, with the error count the card exists to surface. */
export const Failed: Story = {
  args: {
    data: {
      ...READY,
      status: 'Error',
      steps: [
        { ...READY.steps[0], status: 'error', progress: 100, duration: '52s', errors: 3, warnings: 1 },
        { ...READY.steps[1], status: 'pending', progress: 0, duration: '—' },
        { ...READY.steps[2], status: 'pending', progress: 0, duration: '—' },
      ],
    },
  },
}

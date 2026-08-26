import type { Meta, StoryObj } from '@storybook/react-vite'

import { WorkExperience } from '@/registries/ncdai/work-experience'
import type { ExperienceItemType } from '@/registries/ncdai/work-experience'

const EXPERIENCES: ExperienceItemType[] = [
  {
    id: 'carve',
    companyName: 'Carve Studio',
    companyWebsite: 'https://example.com',
    isCurrentEmployer: true,
    positions: [
      {
        id: 'carve-lead',
        title: 'Design Engineer',
        employmentPeriod: { start: '2024', end: undefined },
        employmentType: 'Full-time',
        description:
          'Own the component layer across client projects. Curate the registries the team builds from.',
        skills: ['React', 'TypeScript', 'Tailwind', 'shadcn/ui'],
        isExpanded: true,
      },
      {
        id: 'carve-eng',
        title: 'Frontend Engineer',
        employmentPeriod: { start: '2022', end: '2024' },
        employmentType: 'Full-time',
        description: 'Built the design system and the docs site that documents it.',
        skills: ['React', 'Storybook'],
      },
    ],
  },
  {
    id: 'studio',
    companyName: 'Independent',
    positions: [
      {
        id: 'freelance',
        title: 'Freelance Developer',
        employmentPeriod: { start: '2019', end: '2022' },
        employmentType: 'Contract',
        description: 'Marketing sites and internal tools for small teams.',
        skills: ['Next.js', 'CSS'],
      },
    ],
  },
]

/**
 * A CV section of companies, each holding one or more roles that collapse.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/work-experience`
 * ([docs](https://chanhdai.com/components/work-experience-component))
 *
 * `experiences` is a nested shape — companies containing positions containing
 * periods and skills — and the nesting is the component. A flat generated
 * sample would render a list that misses the point.
 */
const meta: Meta<typeof WorkExperience> = {
  title: 'Chánh Đại Components/Work Experience',
  component: WorkExperience,
  tags: ['autodocs'],
  args: { experiences: EXPERIENCES },
  render: (args) => (
    <div className="w-[36rem] max-w-full">
      <WorkExperience {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof WorkExperience>

/** Two companies, one of them current, with the latest role expanded. */
export const Default: Story = {}

/** A single company with several roles — the promotion case the nesting exists for. */
export const OneCompany: Story = { args: { experiences: [EXPERIENCES[0]] } }

/** Everything collapsed, which is how a long CV should open. */
export const AllCollapsed: Story = {
  args: {
    experiences: EXPERIENCES.map((company) => ({
      ...company,
      positions: company.positions.map((position) => ({ ...position, isExpanded: false })),
    })),
  },
}

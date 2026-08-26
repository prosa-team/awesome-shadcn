/**
 * A CV or about page with roles, dates, and nested projects that should collapse instead of running to three screens.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/work-experience` ([docs](https://chanhdai.com/components/work-experience-component))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { WorkExperience } from '@/registries/ncdai/work-experience'

const meta: Meta<typeof WorkExperience> = {
  title: 'Chánh Đại Components/Work Experience',
  component: WorkExperience,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof WorkExperience>

export const Default: Story = {}

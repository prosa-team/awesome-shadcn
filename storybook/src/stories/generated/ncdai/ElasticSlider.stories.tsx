/**
 * A volume or intensity control that should feel rubbery at the ends, so hitting the limit is felt and not just displayed.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/elastic-slider` ([docs](https://chanhdai.com/components/elastic-slider))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ElasticSlider } from '@/registries/ncdai/elastic-slider'

const meta: Meta<typeof ElasticSlider> = {
  title: 'Chánh Đại Components/Elastic Slider',
  component: ElasticSlider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ElasticSlider>

export const Default: Story = {}

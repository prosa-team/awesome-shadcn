/**
 * A scroll container whose hard cut-off makes it look broken — the fade signals there is more without adding a scrollbar.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/scroll-fade-effect` ([docs](https://chanhdai.com/components/scroll-fade-effect))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ScrollFadeEffect } from '@/registries/ncdai/scroll-fade-effect'

const meta: Meta<typeof ScrollFadeEffect> = {
  title: 'Chánh Đại Components/Scroll Fade Effect',
  component: ScrollFadeEffect,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ScrollFadeEffect>

export const Default: Story = {}

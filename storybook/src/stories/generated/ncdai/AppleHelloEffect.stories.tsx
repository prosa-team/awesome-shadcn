/**
 * A landing or splash screen needs one memorable opening beat, and a handwritten "hello" drawing itself earns more attention than a fade-in headline.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/apple-hello-effect` ([docs](https://chanhdai.com/components/apple-hello-effect))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AppleHelloEffectEnglish } from '@/registries/ncdai/apple-hello-effect-english'

const meta: Meta<typeof AppleHelloEffectEnglish> = {
  title: 'Chánh Đại Components/Apple Hello Effect',
  component: AppleHelloEffectEnglish,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AppleHelloEffectEnglish>

export const Default: Story = {}

/**
 * A badge, seal, or scroll cue where text on a rotating circle carries the brand mark.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/spinning-circular-text` ([docs](https://chanhdai.com/components/spinning-circular-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SpinningCircularText } from '@/registries/ncdai/spinning-circular-text'

const meta: Meta<typeof SpinningCircularText> = {
  title: 'Chánh Đại Components/Spinning Circular Text',
  component: SpinningCircularText,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SpinningCircularText>

export const Default: Story = {}

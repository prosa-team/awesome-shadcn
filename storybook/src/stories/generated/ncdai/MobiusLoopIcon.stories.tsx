/**
 * A looping or "always on" concept needs a mark that morphs between circle and infinity rather than a static glyph.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/mobius-loop-icon` ([docs](https://chanhdai.com/components/mobius-loop-icon))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { MobiusLoopIcon } from '@/registries/ncdai/mobius-loop-icon'

const meta: Meta<typeof MobiusLoopIcon> = {
  title: 'Chánh Đại Components/Mobius Loop Icon',
  component: MobiusLoopIcon,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MobiusLoopIcon>

export const Default: Story = {}

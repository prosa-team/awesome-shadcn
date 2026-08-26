/**
 * You need a logo marquee that pauses when the user looks at it.
 *
 * **Registry:** interior.dev — `@interior/logo-marquee` ([docs](https://interior.dev/docs/logo-marquee))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { LogoMarquee } from '@/registries/interior/components/interior/logo-marquee'

const meta: Meta<typeof LogoMarquee> = {
  title: 'interior.dev/Logo Marquee',
  component: LogoMarquee,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LogoMarquee>

export const Default: Story = {}

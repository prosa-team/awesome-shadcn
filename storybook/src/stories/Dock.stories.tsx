import type { Meta, StoryObj } from '@storybook/react-vite'
import { Camera, Home, Mail, Music, Search, Settings } from 'lucide-react'

import { Dock, DockIcon } from '@/registries/magicui/ui/dock'

/**
 * A macOS-style dock whose icons magnify as the pointer passes them.
 *
 * **Registry:** Magic UI — `@magicui/dock`
 * ([docs](https://magicui.design/docs/components/dock))
 *
 * **Reach for it when** a small, fixed set of actions should feel like an
 * app surface rather than a toolbar.
 *
 * Magnification is driven by pointer distance, so `iconSize`,
 * `iconMagnification`, and `iconDistance` only make sense together: the last
 * one sets how far away the pointer starts pulling on an icon.
 */
const icons = [Home, Search, Music, Camera, Mail, Settings]

const meta = {
  title: 'Magic UI/Dock',
  component: Dock,
  tags: ['autodocs'],
  argTypes: {
    iconSize: {
      control: { type: 'range', min: 24, max: 80, step: 2 },
      description: 'Resting size of each icon, in pixels.',
      table: { defaultValue: { summary: '40' } },
    },
    iconMagnification: {
      control: { type: 'range', min: 40, max: 140, step: 2 },
      description: 'Size an icon reaches directly under the pointer.',
      table: { defaultValue: { summary: '60' } },
    },
    iconDistance: {
      control: { type: 'range', min: 20, max: 300, step: 10 },
      description: 'Pointer distance, in pixels, at which magnification starts.',
      table: { defaultValue: { summary: '140' } },
    },
    disableMagnification: {
      control: 'boolean',
      description: 'Freeze every icon at `iconSize`. Use for reduced-motion builds.',
      table: { defaultValue: { summary: 'false' } },
    },
    direction: {
      control: 'inline-radio',
      options: ['top', 'middle', 'bottom'],
      description: 'Which edge the icons align to as they grow.',
      table: { defaultValue: { summary: 'middle' } },
    },
    className: { control: 'text' },
    children: { control: false },
  },
  args: {
    iconSize: 40,
    iconMagnification: 60,
    iconDistance: 140,
    disableMagnification: false,
    direction: 'middle',
    children: null,
  },
  render: (args) => (
    <Dock {...args}>
      {icons.map((Icon, i) => (
        <DockIcon key={i}>
          <Icon className="size-full p-2" />
        </DockIcon>
      ))}
    </Dock>
  ),
} satisfies Meta<typeof Dock>

export default meta
type Story = StoryObj<typeof meta>

/** Registry defaults. Hover across the icons to see the falloff. */
export const Default: Story = {}

/** A dramatic dock: big lift, narrow reach. */
export const StrongMagnification: Story = {
  args: { iconMagnification: 110, iconDistance: 90 },
}

/** Wide reach makes the whole row breathe together instead of one icon popping. */
export const WideFalloff: Story = { args: { iconDistance: 280 } }

/** Bottom-aligned, the classic macOS behaviour where icons grow upward. */
export const BottomAligned: Story = { args: { direction: 'bottom', iconMagnification: 90 } }

/** Magnification off — a plain icon bar, and the honest reduced-motion fallback. */
export const NoMagnification: Story = { args: { disableMagnification: true } }

/** Compact dock for a sidebar or a toolbar strip. */
export const Small: Story = { args: { iconSize: 28, iconMagnification: 44, iconDistance: 100 } }

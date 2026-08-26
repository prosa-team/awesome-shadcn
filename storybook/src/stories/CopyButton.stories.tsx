import type { Meta, StoryObj } from '@storybook/react-vite'
import { ClipboardIcon, ThumbsUpIcon, TriangleAlertIcon } from 'lucide-react'

import { CopyButton } from '@/components/copy-button'

/**
 * A copy control that swaps its own icon to confirm the copy landed, then resets.
 *
 * **Registry:** Chánh Đại Components — `@ncdai/copy-button`
 * ([docs](https://chanhdai.com/components/copy-button))
 *
 * **Reach for it when** any copyable value — an install command, an API key,
 * a wallet address — needs feedback that the click actually did something.
 *
 * It wraps the shadcn `Button`, so every `variant` and `size` is available,
 * and it brings its own `idle → done → error` state from
 * `useCopyToClipboard`. The three icons are overridable.
 */
const meta = {
  title: 'Chanh Dai/Copy Button',
  component: CopyButton,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'The value to copy, or a function returning it.',
    },
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
      description: 'shadcn button variant.',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
      description: 'shadcn button size. Defaults to `icon` because the label is optional.',
      table: { defaultValue: { summary: 'icon' } },
    },
    children: {
      control: 'text',
      description: 'Optional label rendered next to the icon.',
    },
    disabled: { control: 'boolean' },
    className: { control: 'text' },
    idleIcon: { control: false, description: 'Icon shown before the copy.' },
    doneIcon: { control: false, description: 'Icon shown after a successful copy.' },
    errorIcon: { control: false, description: 'Icon shown when the clipboard write fails.' },
    onCopySuccess: { action: 'copied', control: false },
    onCopyError: { action: 'copy failed', control: false },
  },
  args: {
    text: 'bunx shadcn@latest add @ncdai/copy-button',
    variant: 'default',
    size: 'icon',
    disabled: false,
  },
} satisfies Meta<typeof CopyButton>

export default meta
type Story = StoryObj<typeof meta>

/** The default icon button. Click it to see the swap. */
export const Default: Story = {}

/** With a label, so the affordance survives without a tooltip. */
export const WithLabel: Story = {
  args: { size: 'default', children: 'Copy command' },
}

/** Every variant at once — the quickest way to pick one for a surface. */
export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {(['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] as const).map((v) => (
        <CopyButton key={v} {...args} variant={v} size="default">
          {v}
        </CopyButton>
      ))}
    </div>
  ),
}

/** Every size, icon-only and labelled. */
export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        {(['icon-xs', 'icon-sm', 'icon', 'icon-lg'] as const).map((s) => (
          <CopyButton key={s} {...args} size={s} variant="outline" />
        ))}
      </div>
      <div className="flex items-center gap-3">
        {(['xs', 'sm', 'default', 'lg'] as const).map((s) => (
          <CopyButton key={s} {...args} size={s} variant="outline">
            {s}
          </CopyButton>
        ))}
      </div>
    </div>
  ),
}

/** Custom icons for all three states. */
export const CustomIcons: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Copy key',
    idleIcon: <ClipboardIcon />,
    doneIcon: <ThumbsUpIcon />,
    errorIcon: <TriangleAlertIcon />,
  },
}

/** In its natural habitat: a code line with the button pinned to the end. */
export const InlineWithCode: Story = {
  render: (args) => (
    <div className="flex items-center gap-2 rounded-lg border bg-card px-3 py-2 font-mono text-sm">
      <span className="text-muted-foreground">$</span>
      <span>{String(args.text)}</span>
      <CopyButton {...args} size="icon-sm" variant="ghost" />
    </div>
  ),
}

/** Disabled, for a value that is not ready yet. */
export const Disabled: Story = { args: { disabled: true, variant: 'outline' } }

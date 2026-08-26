import { useRef } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AnimatedBeam } from '@/registries/magicui/ui/animated-beam'

/**
 * A curved beam drawn between two elements, animated along its path.
 *
 * **Registry:** Magic UI — `@magicui/animated-beam`
 * ([docs](https://magicui.design/docs/components/animated-beam))
 *
 * The beam takes three refs — the container it measures against and the two
 * endpoints — so it only exists inside a layout that already has both nodes.
 * The story builds that layout, which is why it cannot be generated.
 */
const Node = ({ label, innerRef }: { label: string; innerRef: React.Ref<HTMLDivElement> }) => (
  <div
    ref={innerRef}
    className="z-10 flex size-14 items-center justify-center rounded-full border-2 bg-card text-xs font-medium shadow-sm"
  >
    {label}
  </div>
)

/**
 * A component, not an inline render function.
 *
 * Storybook calls `render` as a plain function, so a hook called inside it is
 * not attached to a component. Development tolerates that; the production
 * build throws.
 */
const Diagram = (props: Partial<React.ComponentProps<typeof AnimatedBeam>>) => {
  const container = useRef<HTMLDivElement>(null)
  const from = useRef<HTMLDivElement>(null)
  const to = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={container}
      className="relative flex h-64 w-[32rem] items-center justify-between rounded-xl border bg-background p-10"
    >
      <Node label="App" innerRef={from} />
      <Node label="DB" innerRef={to} />
      <AnimatedBeam {...props} containerRef={container} fromRef={from} toRef={to} />
    </div>
  )
}

const meta: Meta<typeof AnimatedBeam> = {
  title: 'Magic UI/Animated Beam',
  component: AnimatedBeam,
  tags: ['autodocs'],
  render: (args) => <Diagram {...args} />,
  args: { duration: 4 },
}

export default meta
type Story = StoryObj<typeof AnimatedBeam>

/** A single beam, left to right. */
export const Default: Story = {}

/** Reversed, for the return leg of a request. */
export const Reverse: Story = { args: { reverse: true } }

/** A pronounced curve, which is what stops two parallel beams overlapping. */
export const Curved: Story = { args: { curvature: 75 } }

/** Branded gradient and a thicker path. */
export const Branded: Story = {
  args: {
    pathWidth: 3,
    gradientStartColor: '#40c9ff',
    gradientStopColor: '#e81cff',
    duration: 2.5,
  },
}

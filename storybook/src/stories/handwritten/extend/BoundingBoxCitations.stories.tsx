import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  HumanReviewPanel,
  REVIEW_FIELDS,
} from '@/registries/extend/extend/bounding-box-citations'

/**
 * The review panel beside a document: every extracted field, with what was expected.
 *
 * **Registry:** Extend UI — `@extend/bounding-box-citations`
 * ([docs](https://ui.extend.ai/ui/blocks#bounding-box-citations))
 *
 * The registry ships `REVIEW_FIELDS`, a bank-statement extraction with its
 * mismatches intact, and `HumanReviewPanel` defaults to it. The panel is the
 * half of the block that stands alone; its partner overlay needs a rendered
 * PDF underneath to point at.
 */
const meta: Meta<typeof HumanReviewPanel> = {
  title: 'Extend UI/Bounding Box Citations',
  component: HumanReviewPanel,
  tags: ['autodocs'],
  render: (args) => (
    <div className="h-[32rem] w-[26rem] max-w-full">
      <HumanReviewPanel {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof HumanReviewPanel>

/** The registry's own extraction fixture. */
export const Default: Story = {}

/** Without the expected column, for a review that only shows what was found. */
export const ActualOnly: Story = { args: { showExpected: false } }

/** A field focused, as it is when the reader clicks its citation in the document. */
export const FieldFocused: Story = { args: { activeFieldKey: REVIEW_FIELDS[0]?.key } }

/** The dark theme the panel ships. */
export const Dark: Story = { args: { theme: 'dark' } }

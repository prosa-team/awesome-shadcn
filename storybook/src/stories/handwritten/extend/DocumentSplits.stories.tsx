import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DocumentSplits, createInitialSplits } from '@/registries/extend/extend/document-splits'

/**
 * Split review for a scanned batch: confirm where each logical document starts.
 *
 * **Registry:** Extend UI — `@extend/document-splits`
 * ([docs](https://ui.extend.ai/ui/docs/components/document-splits))
 *
 * The registry exports `createInitialSplits(pageCount)`, which builds the one
 * split that covers the whole batch — the state every review starts from before
 * a human draws the boundaries.
 */
/**
 * Splits are the component's state, not a static prop: dragging a boundary
 * calls `onSplitsChange` and the caller owns the result. A story that discards
 * it would show boundaries that snap back on every drop.
 */
const Reviewable = ({ pageCount }: { pageCount: number }) => {
  const [splits, setSplits] = useState(() => createInitialSplits(pageCount))

  return (
    <div className="h-[32rem] w-[52rem] max-w-full">
      <DocumentSplits
        splits={splits}
        onSplitsChange={setSplits}
        onSelectPage={() => {}}
      />
    </div>
  )
}

const meta: Meta<typeof DocumentSplits> = {
  title: 'Extend UI/Document Splits',
  component: DocumentSplits,
  tags: ['autodocs'],
  render: () => <Reviewable pageCount={8} />,
}

export default meta
type Story = StoryObj<typeof DocumentSplits>

/** Eight pages, one document: the batch before anyone has split it. */
export const Default: Story = {}

/** A longer batch, where scrolling the page strip is part of the job. */
export const LongBatch: Story = { render: () => <Reviewable pageCount={24} /> }

/** A single page, which cannot be split further. */
export const SinglePage: Story = { render: () => <Reviewable pageCount={1} /> }

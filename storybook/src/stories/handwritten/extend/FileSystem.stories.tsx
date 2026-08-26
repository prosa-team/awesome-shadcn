import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileSystem } from '@/registries/extend/extend/file-system'
import type { FileSystemItem } from '@/registries/extend/extend/file-system'

/**
 * A flat manifest. Folders are inferred from the paths, which is the part of
 * this component's contract a generated sample would miss.
 */
const ITEMS: FileSystemItem[] = [
  {
    kind: 'file',
    path: 'invoices/2026-01/acme-0142.pdf',
    contentType: 'application/pdf',
    size: 184_320,
    updatedAt: '2026-01-14T09:12:00Z',
  },
  {
    kind: 'file',
    path: 'invoices/2026-01/globex-0143.pdf',
    contentType: 'application/pdf',
    size: 205_112,
    updatedAt: '2026-01-19T15:40:00Z',
  },
  {
    kind: 'file',
    path: 'invoices/2026-02/acme-0151.pdf',
    contentType: 'application/pdf',
    size: 192_004,
    updatedAt: '2026-02-03T11:02:00Z',
  },
  {
    kind: 'file',
    path: 'contracts/msa-2026.docx',
    contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    size: 88_410,
    updatedAt: '2026-01-02T08:00:00Z',
  },
  {
    kind: 'file',
    path: 'reports/q4-figures.xlsx',
    contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    size: 512_900,
    updatedAt: '2026-01-31T17:25:00Z',
  },
  { kind: 'file', path: 'README.md', contentType: 'text/markdown', size: 2_140 },
]

/**
 * A file browser over an object store, with list and grid views.
 *
 * **Registry:** Extend UI — `@extend/file-system`
 * ([docs](https://ui.extend.ai/ui/docs/components/file-system))
 *
 * `items` is a flat manifest of object keys; the folder tree is derived from
 * the paths rather than declared. The component renders no documents itself,
 * so previews come from `previewImageUrl` or `renderFilePreview`.
 */
const meta: Meta<typeof FileSystem> = {
  title: 'Extend UI/File System',
  component: FileSystem,
  tags: ['autodocs'],
  args: { items: ITEMS, title: 'Documents' },
  render: (args) => (
    <div className="h-[30rem] w-[46rem] max-w-full">
      <FileSystem {...args} />
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof FileSystem>

/** The root, with folders inferred from the paths. */
export const Default: Story = {}

/** Opening inside a folder, the deep-link case. */
export const InsideFolder: Story = { args: { defaultPath: 'invoices/2026-01/' } }

/** Gallery view, for a store that is mostly scans and images. */
export const Gallery: Story = { args: { defaultView: 'gallery' } }

/** Columns, the Finder-style view for a deep tree. */
export const Columns: Story = { args: { defaultView: 'columns' } }

/** An empty store — the state a new customer sees first. */
export const Empty: Story = { args: { items: [] } }

import type { Meta, StoryObj } from '@storybook/react-vite'

import { File, Folder, Tree } from '@/registries/magicui/ui/file-tree'

/**
 * A collapsible file tree with selection and keyboard navigation.
 *
 * **Registry:** Magic UI — `@magicui/file-tree`
 * ([docs](https://magicui.design/docs/components/file-tree))
 *
 * `Tree` is the provider; `Folder` and `File` only work inside it. A story on
 * any of them alone throws `useTree must be used within a TreeProvider`, so the
 * composition is the component.
 */
const meta: Meta<typeof Tree> = {
  title: 'Magic UI/File Tree',
  component: Tree,
  subcomponents: { Folder, File },
  tags: ['autodocs'],
  args: { initialExpandedItems: ['registries', 'magicui'] },
  render: (args) => (
    <Tree {...args} className="h-72 w-72 rounded-lg border p-2">
      <Folder element="src" value="src">
        <Folder element="registries" value="registries">
          <Folder element="magicui" value="magicui">
            <File value="border-beam">border-beam.tsx</File>
            <File value="marquee">marquee.tsx</File>
            <File value="file-tree">file-tree.tsx</File>
          </Folder>
          <Folder element="dotmatrix" value="dotmatrix">
            <File value="dotm-square-1">dotm-square-1.tsx</File>
          </Folder>
        </Folder>
        <Folder element="stories" value="stories">
          <File value="introduction">Introduction.mdx</File>
        </Folder>
      </Folder>
    </Tree>
  ),
}

export default meta
type Story = StoryObj<typeof Tree>

/** Two folders open, the rest collapsed. */
export const Default: Story = {}

/** Fully collapsed, the state a deep tree should open in. */
export const Collapsed: Story = { args: { initialExpandedItems: [] } }

/** Without the indent guides. */
export const NoIndicator: Story = { args: { indicator: false } }

/** A file selected on mount, for a tree that reflects the open editor tab. */
export const WithSelection: Story = { args: { initialSelectedId: 'marquee' } }

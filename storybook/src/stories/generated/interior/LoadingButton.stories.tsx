/**
 * You need a submit button that shows a loading state without resizing.
 *
 * **Registry:** interior.dev — `@interior/loading-button` ([docs](https://interior.dev/docs/loading-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { LoadingButton } from '@/registries/interior/components/interior/loading-button'

const meta: Meta<typeof LoadingButton> = {
  title: 'interior.dev/Loading Button',
  component: LoadingButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LoadingButton>

export const Default: Story = {}

import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { EditProfile } from '@/registries/watermelon/components/ui/edit-profile'
import type { ProfileData } from '@/registries/watermelon/components/ui/edit-profile'

const PROFILE: ProfileData = {
  fullName: 'Ada Lovelace',
  email: 'ada@example.com',
  timezone: 'Europe/Berlin',
  workingHours: '09:00 – 17:00',
  title: 'Design Engineer',
  avatarUrl: 'https://github.com/shadcn.png',
  lastUpdated: '12 Feb 2026',
}

/**
 * A profile dialog that edits a record and hands it back on save.
 *
 * **Registry:** Watermelon UI — `@watermelon/edit-profile`
 * ([docs](https://ui.watermelon.sh/animated-components/edit-profile))
 *
 * `isOpen` is controlled from outside, so the story owns it — a dialog whose
 * close button does nothing is not the component.
 */
const Dialog = ({ startOpen }: { startOpen: boolean }) => {
  const [isOpen, setIsOpen] = useState(startOpen)

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-md border px-3 py-1.5 text-sm"
      >
        Edit profile
      </button>
      <EditProfile
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialData={PROFILE}
        onSave={() => setIsOpen(false)}
      />
    </div>
  )
}

const meta: Meta<typeof EditProfile> = {
  title: 'Watermelon UI/Edit Profile',
  component: EditProfile,
  tags: ['autodocs'],
  render: () => <Dialog startOpen />,
}

export default meta
type Story = StoryObj<typeof EditProfile>

/** Open, which is the state worth looking at. */
export const Default: Story = {}

/** Closed, so the trigger and the open transition can be seen. */
export const Closed: Story = { render: () => <Dialog startOpen={false} /> }

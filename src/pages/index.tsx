import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [filterStatus, setFilterStatus] = useState<
    'all' | 'pending' | 'completed'
  >('all')
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root
          defaultValue="all"
          value={filterStatus}
          onValueChange={(value) =>
            setFilterStatus(value as 'all' | 'pending' | 'completed')
          }
          className="mt-8 flex w-full justify-center gap-6 border-b border-gray-300"
        >
          <Tabs.List aria-label="Filter todos">
            <Tabs.Trigger
              value="all"
              className="px-4 py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 data-[state=active]:font-semibold"
            >
              All
            </Tabs.Trigger>

            <Tabs.Trigger
              value="pending"
              className="px-4 py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 data-[state=active]:font-semibold"
            >
              Pending
            </Tabs.Trigger>

            <Tabs.Trigger
              value="completed"
              className="px-4 py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 data-[state=active]:font-semibold"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>

        <div className="pt-10">
          <TodoList filterStatus={filterStatus} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index

'use client'
import ActionsPanel from '@/components/actions-panel'
import FlowChartCanvas from '@/components/flow'
import React from 'react'

export default function Home() {
  return (
    <section className='flex flex-row items-start justify-start h-[100vh] w-full'>
      <main className='w-full'>
        <FlowChartCanvas />
      </main>
      <aside className='h-full min-w-[33%] w-1/3'>
        <ActionsPanel />
      </aside>
    </section>
  )
}
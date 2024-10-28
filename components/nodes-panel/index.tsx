import Select from '@/components/select'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Form, FormItem, FormLabel, FormControl, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAppDispatch } from '@/store/dispatch'
import { useGlobalState } from '@/store/useState'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  label: z.string(),
  value: z.string() || z.number(),
})

const NodesPanel = () => {
  const dispatch = useAppDispatch()
  const state = useGlobalState((state) => state.NodesPanel)

  return (
    <Card className='rounded-none h-full w-full'>
      <CardHeader className='border-b-[1px]'>
        <h3>Actions</h3>
      </CardHeader>
      <CardContent className='pt-8'>
        <h4 className='font-bold mb-6'>
          {state.data.name}
        </h4>
        <p className='mb-4'>
          Lorem ipsum sit dolor amet conseuat amet conseuat ipsum sit dolor
        </p>
        {renderForm()}
      </CardContent>
    </Card>
  )
}

export default NodesPanel
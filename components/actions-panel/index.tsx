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

const ActionsPanel = () => {
  const dispatch = useAppDispatch()
  const state = useGlobalState((state) => state.actionsPanel)

  // const form = useForm<z.infer<typeof FormSchema>>({
  //   resolver: zodResolver(FormSchema),
  //   defaultValues: {
  //     label: '',
  //     value: '',
  //   },
  // })

  // const initFormState = () => {
  //   // dispatch(setFormData({
  //   //   name: '',
  //   //   organization: '',
  //   //   slug: '',
  //   //   status: '',
  //   // }))
  // }

  // const onSubmit = (data: z.infer<typeof FormSchema>) => {
  //   console.log(data)
  // }

  // const handleInputData = (e) => {
  //   dispatch(setFormDataByKey({
  //     key: e.target.name,
  //     data: e.target.value
  //   }))
  // }

  // const handleSelectData = (e, name) => {
  //   dispatch(setFormDataByKey({
  //     key: name,
  //     data: e
  //   }))
  // }

  const handleChangeSelect = (e) => {
    console.log('handleChangeSelect', e)
  }

  const renderInputField = ({ name, id, field, value }) => {
    console.log(field)
    return (
      <FormItem>
        <FormLabel>{name}</FormLabel>
        <FormControl onChange={((e) => console.log('e', e))}>
          <Input id={id} value={value} {...field} />
        </FormControl>
      </FormItem>
    )
  }

  const renderSelectField = ({ name, id, field, value }) => {
    console.log(field)
    return (
      <FormItem>
        <FormLabel>
          {name}
        </FormLabel>
        <FormControl>
          <Select id={id} value={value} onChange={handleChangeSelect} {...field} />
        </FormControl>
      </FormItem>
    )
  }

  const renderForm = () => {
    return (
      <pre>form</pre>
      // <Form {...form}>
      //   <FormField
      //     control={form.control}
      //     name='label'
      //     render={({ field }) => renderInputField({
      //       field,
      //       id: 'input-label',
      //       name: 'label',
      //       value: state.data.label,
      //     })}
      //   />
      //   <FormField
      //     control={form.control}
      //     name='value'
      //     render={({ field }) => renderInputField({
      //       field,
      //       id: 'input-value',
      //       name: 'value',
      //       value: state.data.value,
      //     })}
      //   />
      // </Form>
    )
  }

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

export default ActionsPanel
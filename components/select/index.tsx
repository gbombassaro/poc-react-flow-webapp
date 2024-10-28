import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React from 'react'

const SelectComponent = ({ defaultValue, onSelect, options=[] }) => {
  return (
    <Select onValueChange={onSelect} value={defaultValue}>
      <SelectTrigger className='[&_svg]:hidden'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt: any, k) => (
          <SelectItem value={opt.value} key={`${opt.value}-${k}`}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectComponent
import { Button } from '@/components/ui/button'
import { Handle, Position } from '@xyflow/react'

const EndNode = () => {
  return (
    <>
      <Handle
        type='target'
        position={Position.Top}
      />
      <Button variant='outline' className='flex flex-col items-start justify-start rounded-md bg-slate-300'>
        <p className='font-sans'>End</p>
      </Button>
    </>
  )
}

export default EndNode
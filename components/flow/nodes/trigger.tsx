import { Button } from '@/components/ui/button'
import { Handle, Position } from '@xyflow/react'
import { Play } from 'lucide-react'

const TriggerNode = () => {
  return (
    <>
      {/* <Handle
        type='target'
        position={Position.Top}
      /> */}
      <Button
        className='flex flex-col items-start justify-start p-4 rounded-sm h-full w-full active:ring-2 hover:ring-1 hover:bg-white'
        // onClick={handleClick}
        variant='outline'
      >
        <Play />
        <div>
          <h3 className='font-sans font-bold'>Trigger</h3>
        </div>
        <p className='font-sans'>Select a trigger</p>
      </Button>
      <Handle
        id='a'
        position={Position.Bottom}
        type='source'
      />
    </>
  )
}

export default TriggerNode
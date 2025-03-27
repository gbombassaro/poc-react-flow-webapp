import { Button } from '@/components/ui/button'
import { Handle, Position, NodeProps } from '@xyflow/react'
import { NodeTrigger } from './index'
import { Play } from 'lucide-react'

type TriggerNodeProps = NodeProps<NodeTrigger>

const TriggerNode: React.FC<TriggerNodeProps> = ({ data }) => {
    return (
        <>
            <Button
                className='flex flex-col items-start justify-start p-4 rounded-sm h-full w-full active:ring-2 hover:ring-1 hover:bg-white'
                // onClick={handleClick}
                variant='outline'
            >
                <Play />
                <div>
                    <h3 className='font-sans font-bold'>{data.name}</h3>
                </div>
                <p className='font-sans'>{data.description || 'Select a trigger to continue'}</p>
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
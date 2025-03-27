'use client'
import { BIRTHDAY_FLOW } from '@/components/flow/models/birthday'
import ActionNode from '@/components/flow/nodes/action'
import ConditionNode from '@/components/flow/nodes/condition'
import EndNode from '@/components/flow/nodes/end'
import TriggerNode from '@/components/flow/nodes/trigger'
import { setNodeActions } from '@/containers/actions-panel/reducer'
import { useAppDispatch } from '@/store/dispatch'
import { ReactFlow, Controls, MiniMap, Background, useNodesState, useEdgesState, useReactFlow, addEdge } from '@xyflow/react'
import React, { useMemo } from 'react'
import { SquarePlus } from 'lucide-react'

let id = 1
const getId = () => `${id++}`
const nodeOrigin: any = [-1.5, -1.5]

const FlowChartCanvas = () => {
    const dispatch = useAppDispatch()
    const [nodes, setNodes, onNodesChange] = useNodesState<any>(BIRTHDAY_FLOW)
    const [edges, setEdges, onEdgesChange] = useEdgesState<any>([])
    console.log(nodes, edges);

    const { screenToFlowPosition } = useReactFlow()

    const onConnect = (params) => {
        setEdges((eds) => addEdge(params, eds))
    }

    const onConnectEnd = (event, connectionState) => {
        console.log(event, connectionState);
        if (!connectionState.isValid) {
            const id = getId()
            const { clientX, clientY } = 'changedTouches' in event ? event.changedTouches[0] : event
            const newNode: any = {
                id,
                position: screenToFlowPosition({ x: clientX, y: clientY }),
                data: { label: `Node ${id}` },
                origin: [-1.5, -1.5],
            }
            setNodes((nds) => nds.concat(newNode))
            setEdges((eds) => eds.concat({ id, source: connectionState.fromNode.id, target: id }))
        }
    }

    const onNodeClick = (event, node) => {
        dispatch(setNodeActions({
            id: node.id,
            name: node.name,
        }))
    }

    const onNodeDoubleClick = (event, node) => {
        dispatch(setNodeActions({
            id: node.id,
            name: node.name,
        }))
    }

    const onNodeAdd = (e) => {
        const id = getId()
        console.log(e, id)
        // const newNode: any = {
        //   id,
        //   position: { x: 0, y: 0 },
        //   data: { label: `Node ${id}` },
        //   origin: [-1.5, -1.5],
        // }
        // setNodes((nds) => nds.concat(newNode))
    }

    const nodeTypes = useMemo(() => ({
        action: ActionNode,
        condition: ConditionNode,
        end: EndNode,
        trigger: TriggerNode
    }), [])

    // console.log('nodes', nodes)
    // console.log('edges', edges)

    return (
        <div className='h-[100vh] w-full' style={{ border: '1px solid black' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onConnectEnd={onConnectEnd}
                onNodeClick={onNodeClick}
                onNodeDoubleClick={onNodeDoubleClick}
                nodeOrigin={nodeOrigin}
            >
                <Controls />
                {/* <MiniMap /> */}
                <Background gap={12} size={1} />
                <div className='absolute bottom-2 right-0 z-10'>
                    <button className='m-4' onClick={onNodeAdd}>
                        <SquarePlus size={32} />
                    </button>
                </div>
            </ReactFlow>
        </div>
    )
}

export default FlowChartCanvas
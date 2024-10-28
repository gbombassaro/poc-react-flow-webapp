// # Node Types #
// Trigger
// Condition
// Action
// End

// # Node Type Actions #
// Trigger -> Select a trigger (subscribe newsletter, first purchase, purchase)
// Condition -> Select a conditinal mode (segmentation, split segmentation, time)
// Action -> Take an action (send email, send message)
// End -> End the flow

export type Node = {
  id: string;
  name: string;
  position: { x: number; y: number; };
  type: 'trigger' | 'condition' | 'action' | 'end';
}

export type NodeEnd = Node & {
  type: 'end';
}

export type NodeTrigger = Node & {
  type: 'trigger';
  form: { triggers: Array<any>; selected: string; };
}

export type NodeCondition = Node & {
  type: 'condition';
  form: { conditions: Array<any>; selected: string; };
}

export type NodeAction = Node & {
  type: 'action';
  form: { actions: Array<any>; selected: string; };
}

export type InitialNodes = Array<NodeTrigger | NodeCondition | NodeAction | NodeEnd>;

export type InitialEdges = Array<any>;

export const initialNodes: InitialNodes = [
  {
    id: 'node-0',
    name: 'End',
    position: { x: 0, y: 120 },
    type: 'end',
  },
  {
    id: 'node-1',
    name: 'Trigger',
    position: { x: 0, y: 0 },
    type: 'trigger',
    form: { triggers: ['subscribe newsletter', 'first purchase', 'purchase'], selected: 'subscribe newsletter' },
  },
  {
    id: 'node-2',
    name: 'Condition',
    position: { x: 0, y: 220 },
    type: 'condition',
    form: { conditions: ['segmentation', 'split segmentation', 'time'], selected: 'segmentation' },
  },
  {
    id: 'node-3',
    name: 'Action',
    position: { x: 0, y: 320 },
    type: 'action',
    form: { actions: ['send email', 'send message'], selected: 'send email' },
  },
]

export const initialEdges = [
  // {
  //   id: 'e0-1',
  //   source: 'node-0',
  //   target: 'node-1'
  // }
]
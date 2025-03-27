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
    position: { x: number; y: number; };
    type: 'trigger' | 'condition' | 'action' | 'end';
    data: {
        name: string;
        description: string;
        form?: {
            triggers?: Array<any>;
            conditions?: Array<any>;
            actions?: Array<any>;
            selected?: string;
        };
    };
}

export type NodeAction = Node & {
    type: 'action';
    data: {
        name: string;
        description: string;
        form: { actions: Array<any>; selected: string; };
    };
}

export type NodeCondition = Node & {
    type: 'condition';
    data: {
        name: string;
        description: string;
        form: { conditions: Array<any>; selected: string; };
    };
}

export type NodeTrigger = Node & {
    type: 'trigger';
    data: {
        name: string;
        description: string;
        form: { triggers: Array<any>; selected: string; };
    };
}

export type NodeEnd = Node & {
    type: 'end';
}

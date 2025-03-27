import { Node } from '@/components/flow/nodes'

export const BIRTHDAY_FLOW: Array<Node> = [
    {
        id: 'trigger-birthday',
        position: { x: -100, y: 0 },
        type: 'trigger',
        data: {
            name: 'Início do Fluxo',
            description: 'Baseado em data de aniversário'
        }
    }
]
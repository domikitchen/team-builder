import { v4 as uuid } from 'uuid';

export const InitalTeamMembers = [
    {
        id: uuid(),
        gameTag: 'dommi',
        winRate: '5',
        role: 'Bot',
        main: 'Vayne',
        class: 'Marksman'
    },
    {
        id: uuid(),
        gameTag: 'swifter',
        winRate: '93',
        role: 'Mid',
        main: 'Ahri',
        class: 'Mage'
    },
]
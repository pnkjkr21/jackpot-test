import FeaturedGamesIcon from '@/components/Icons/feature-icon'
import JackpotOriginalIcon from '@/components/Icons/jackpot-original-icon'
import SlotsIcon from '@/components/Icons/slots-icon'
import TableGamesIcon from '@/components/Icons/table-games-icon'
import GameShowsIcon from '@/components/Icons/game-show-icon'
import NewGamesIcon from '@/components/Icons/new-games-icon'


export const baseUrl = 'https://jpapi-staging.jackpot.bet'

export const EMPTY_GAME_IMAGE = 'https://cdn.prod.website-files.com/5d4bc52e7ec3666956bd3bf1/64f8600dac4d6ff134531794_thumbnail.webp'

// we are setting the limit to 13 to check if there are cards more than 12 if that is the case 
// then we are showing last card with view all card
export const SECTIONS = [
    {
        id: 'featured',
        title: 'Featured Games',
        params: {
            sort: 'featuredPriority',
            limit: 13,
        },
        Icon: FeaturedGamesIcon
    },
    {
        id: 'jackpotOriginals',
        title: 'Jackpot Originals',
        params: {
            vendor: 'JackpotOriginal',
            limit: 13,
        },
        Icon: JackpotOriginalIcon
    },
    {
        id: 'slots',
        title: 'Slots',
        params: {
            category: 'VIDEOSLOTS',
            limit: 13,
        },
        Icon: SlotsIcon
    },
    {
        id: 'tableGames',
        title: 'Table Games',
        params: {
            category: 'TABLEGAMES',
            limit: 13,
        },
        Icon: TableGamesIcon
    },
    {
        id: 'gameshows',
        title: 'Game Shows',
        params: {
            category: 'GAMESHOWS',
            limit: 13,
        },
        Icon: GameShowsIcon
    },
    {
        id: 'newGames',
        title: 'New Games',
        params: {
            sort: 'createdAt',
            limit: 13,
        },
        Icon: NewGamesIcon
    },
    
    
]

export const ACTION_BUTTONS = [
    {
        id: 'jackpotOriginals',
        title: 'Jackpot Originals',
    },
    {
        id : 'newGames',
        title: 'New Games',
    },
    {
        id: 'slots',
        title: 'Slots',
    },
    {
        id: 'featured',
        title: 'Featured Games',
    },
    {
        id: 'liveDealers',
        title: 'Live Dealer',
    },
    {
        id: 'gameshows',
        title: 'Game Shows',
    },
    {
        id: 'tableGames',
        title: 'Table Games',  
    },
    
]

export const PARAMS_FOR_ACTION_BUTTONS = {
    jackpotOriginals: {
        vendor: 'JackpotOriginal',
        limit: 48,
        sort: 'popularity',
        order: 'desc',
    },
    newGames: {
        sort: 'createdAt',
        order: 'desc',
        limit: 48,
    },
    slots: {
        category: 'VIDEOSLOTS',
        sort: 'popularity',
        order: 'desc',
        limit: 48,
    },
    tableGames: {
        category: 'TABLEGAMES',
        sort: 'popularity',
        order: 'desc',
        limit: 48,
    },
    gameshows: {
        category: 'GAMESHOWS',
        sort: 'popularity',
        order: 'desc',
        limit: 48,
    },
    liveDealers: {
        category: 'LIVEDEALER',
        sort: 'popularity',
        order: 'desc',
        limit: 48,
    },
    featured: {
        sort: 'featuredPriority',
        order: 'desc',
        limit: 48,
    },
}
//PragmaticPlay, EvolutionGaming, JackpotOriginal, Play'nGo, RelaxGaming.
export const VENDORS = [
    {
        id: 'PragmaticPlay',
        title: 'Pragmatic Play',
    },
    {
        id: 'EvolutionGaming',
        title: 'Evolution Gaming',
    },
    {
        id: 'JackpotOriginal',
        title: 'Jackpot Original',
    },
    {
        id: 'PlaynGo',
        title: 'PlaynGo',
    },
    {
        id: 'RelaxGaming',
        title: 'Relax Gaming',
    },
]
import * as Types from './../contants/ActionTypes';

export const filterGroup = (group) => {
    return {
        type: Types.FILTER_GROUP,
        group
    }
}

export const filterTeam1 = (team1) => {
    return {
        type: Types.FILTER_TEAM1,
        team1
    }
}

export const filterTeam2 = (team2) => {
    return {
        type: Types.FILTER_TEAM2,
        team2
    }
}

export const filterStadium = (stadium) => {
    return {
        type: Types.FILTER_STADIUM,
        stadium
    }
}

import { createStore } from 'redux'
const initialState = {
    groups: [{
        id: 1,
        mater: "Lenguajes y Automatas II",
        teacher: 'Villa García Amparo Isabeth',
        roomClass: "6S2",
        schedule: "Lunes: 14-16  |  Martes: 11-13  |  Jueves:13-14"
    }, {
        id: 2,
        teacher: 'Eslava Gabriel ',
        roomClass: "6S3",
        schedule: "Lunes: 14-16  |  Martes: 11-13  |  Jueves:13-14"
    }, {
        id: 3,
        teacher: 'Garfias Lorena',
        roomClass: "6S1",
        schedule: "Lunes: 14-16  |  Martes: 11-13  | Jueves:13-14"
    }, {
        id: 4,
        teacher: 'Franco Noriega Margarita',
        roomClass: "6S4",
        schedule: "Lunes: 14-16,  Martes: 11-13, Jueves:13-14"
    }],
    groupsSelected: [],
}

const reducerGroups = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SELECCIONAR_MATERIA":
            return {
                ...state,
                groupsSelected: state.groupsSelected.concat(action.materias)
            }   
        default:
            return state
    }
}


export default createStore(reducerGroups)
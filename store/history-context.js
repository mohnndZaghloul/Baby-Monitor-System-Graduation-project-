import { createContext, useReducer } from "react";

const obj = [
    {id:'1',childState:'Awake',time:'20 Min',clock:'9:00 PM'},
    {id:'2',childState:'Light',time:'40 Min',clock:'9:20 PM'},
    {id:'3',childState:'Deep',time:'40 Min',clock:'10:00 PM'},
    {id:'4',childState:'Awake',time:'10 Min',clock:'10:40 PM'},
    {id:'5',childState:'Light',time:'30 Min',clock:'10:50 PM'},
    {id:'6',childState:'Deep',time:'40 Min',clock:'10:00 PM'},
    {id:'7',childState:'Awake',time:'10 Min',clock:'10:40 PM'},
    {id:'8',childState:'unkwon',time:'30 Min',clock:'10:50 PM'},
    {id:'9',childState:'Awake',time:'20 Min',clock:'9:00 PM'},
    {id:'10',childState:'Light',time:'40 Min',clock:'9:20 PM'},
    {id:'11',childState:'Deep',time:'40 Min',clock:'10:00 PM'},
    {id:'12',childState:'Awake',time:'10 Min',clock:'10:40 PM'},
    {id:'13',childState:'Light',time:'30 Min',clock:'10:50 PM'},
    {id:'14',childState:'Deep',time:'40 Min',clock:'10:00 PM'},
    {id:'15',childState:'Awake',time:'10 Min',clock:'10:40 PM'},
    {id:'16',childState:'Light',time:'30 Min',clock:'10:50 PM'},
    {id:'17',childState:'Awake',time:'20 Min',clock:'9:00 PM'},
    {id:'18',childState:'Light',time:'40 Min',clock:'9:20 PM'},
    {id:'19',childState:'Deep',time:'40 Min',clock:'10:00 PM'},
    {id:'20',childState:'Awake',time:'10 Min',clock:'10:40 PM'},
    {id:'21',childState:'Light',time:'30 Min',clock:'10:50 PM'},
    {id:'22',childState:'Deep',time:'40 Min',clock:'10:00 PM'},
    {id:'23',childState:'Awake',time:'10 Min',clock:'10:40 PM'},
    {id:'24',childState:'unkwon',time:'30 Min',clock:'12:50 PM'},
];

export const HistoryContext = createContext({
    data: [],
    addState: ({id, childState, time, clock}) => {},
    setStatus: (data) => {},
});

function HistoryReducer(state, action) {
    switch(action.type) {
        case 'ADD':
            return [action.payload, ...state];
        case 'SET':
            const inverted = action.payload.reverse();
            return inverted;
        default:
            return state;
    }
}

export default function HistoryDataProvider({children}) {
    const [historyStatus, dispatch] = useReducer(HistoryReducer,obj);

    function addState(childState) {
        dispatch({ type: 'ADD', payload: childState});
    }

    function setStatus(data) {
        dispatch({ type: 'SET', payload: data});
    }

    const value = {
        data: historyStatus,
        addState: addState,
        setStatus: setStatus,
    };

    return <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
};
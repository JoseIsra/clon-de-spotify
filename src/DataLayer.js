import React,
{useContext, useReducer} from 'react';

export const DataLayerContext = React.createContext();

export const DataLayer = ({estadoInicial, reducer, children})=>(
    <DataLayerContext.Provider value={useReducer(reducer,estadoInicial)} >
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = ()=>useContext(DataLayerContext);
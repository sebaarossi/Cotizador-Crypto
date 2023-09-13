import React from 'react'

const useSelectMonedas = () => {
    
    const SelectMonedas = (label) => {
        return (
            <>
                <label>{label}</label>
            </>
        )
    }
    return [SelectMonedas]
}

export default useSelectMonedas

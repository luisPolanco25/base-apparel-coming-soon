import React, { useEffect, useState } from 'react';
import { Template } from './components/design/Template';
import { screenContext } from './context/ScreenContext';

export const ComingSoonApp = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const updateWidth = () => {
        setScreenWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, [])

    
    return (
        <screenContext.Provider value={screenWidth}>
            <Template />
        </screenContext.Provider>
    )
}

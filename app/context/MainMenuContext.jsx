"use client"

import React, { useState } from 'react'
import { createContext } from 'react';


export const MenuContext = createContext()

const MainMenuContext  = ( {children} ) => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
        alert("Menu is open")
        console.log(open)
    }

  return (
    <MenuContext.Provider value={{open, toggleMenu}}>
        {children}
    </MenuContext.Provider>
  )
}

export default MainMenuContext;
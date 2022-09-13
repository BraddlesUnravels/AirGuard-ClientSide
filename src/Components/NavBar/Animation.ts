import React from 'react'

export const pageVariants = {
    initial: {
        opacity: 0,
        x: "100vw",
        scale: 0.8,
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1,
    },
    out: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8,
    }
}

export const pageTrans = {
    transition: "linear",
    duration: 0.6
} 

export const pageStyle = {
    position: "relative",
    margin: 0
} as React.CSSProperties
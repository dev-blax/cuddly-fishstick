import React from 'react';

import { animated, useSpring } from '@react-spring/web';

export default function SpringTest() {

    const [springs, api ] = useSpring(()=>({
        from: { x: 0 },
    }));

    const handleClick = ()=>{
        api.start({
            from: {
                x: 0
            },
            to: {
                x: 100
            }
        })
    }

  return (
    <animated.div
        onClick={handleClick}
        style={{
            height: 80,
            width: 80,
            background: '#ff6d6d',
            borderRadius: 8,
            ...springs
        }}
    />

  )
}

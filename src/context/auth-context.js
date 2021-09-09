import React from 'react';

const context=React.createContext({
    authenticated:false,
    login:()=>{}
});

export default context;
import React, {createContext, useContext, useMemo, useState, useCallback} from 'react';

const MessageContext = createContext();

export function MessageProvider(props) {
    const [message, setMessage] = useState("");
    console.log({message});

    const clearMessage = useCallback(() => {
        setMessage("")
    }, []);

    const api = useMemo(() => ({
        message,
        setMessage,
        clearMessage,
    }), [message, setMessage]);

    return <MessageContext.Provider value={api}>
        {props.children}
    </MessageContext.Provider>
}

export const useMessageContext = () => useContext(MessageContext);


import { useEffect, useState } from 'react'

const PREFIX = 'codepen-cloning-'

function useLocalStorage(key, IntialValue) {
    const prefixKey = PREFIX + key
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixKey)
        if (jsonValue != null) return JSON.parse(jsonValue)


        if (typeof IntialValue == 'function') {
            return IntialValue()
        } else {
            return IntialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixKey, JSON.stringify(value))
    }, [prefixKey, value])
    return [value, setValue]
}

export default useLocalStorage

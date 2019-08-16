export const DECREMENT_COUNT = 'DECREMENT_COUNT';
export const incrementCounter = (id) => {
    return {
        type: "INCREMENT_COUNT"
    }
}

export const decrementCounter = (id) => {
    return {
        type: DECREMENT_COUNT
    }
}
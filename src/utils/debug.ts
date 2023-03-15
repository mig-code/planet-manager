export const consoleDebug = (...info: Array<unknown>) => {
    // In the browser (process not defined)
    // or in Node in development (NODE_ENV === 'development')
    // console messages are displayed

    try {
        if (!process.env) throw info;
        if (process.env.NODE_ENV === 'development') {
            console.log(...info);
        }
    } catch (error) {
        console.log(...info);
    }
};

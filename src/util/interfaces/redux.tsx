export declare type ReduxDispatcher<T> = (data: {type: string, payload: T}) => {
    type: string;
    payload: T;
};

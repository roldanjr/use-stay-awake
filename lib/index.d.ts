declare const useStayAwake: () => {
    canSleep: boolean;
    preventSleeping: () => void;
    allowSleeping: () => void;
};
export default useStayAwake;

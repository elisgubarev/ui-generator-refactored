export const returnStateIfValid = (stateValue: any, maxState: number) => {
    if (stateValue) {
        for (let i = 0; i <= maxState; i++) {
            if (parseInt(stateValue) === i) {
                return parseInt(stateValue);
            }
        }
    }
    return 0;
}
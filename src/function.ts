
export const Function = () => {
    const getAgeFred = () => {
        var today = new Date();
        var birthDate = new Date("2002-04-21");
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age.toString();
    };

    const getCurrentDate = () => {
        var today = new Date();
        var date =
            today.getDate() +
            "/" +
            (today.getMonth() + 1) +
            "/" +
            today.getFullYear() +
            " " +
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();
        return date.toString();
    };

    return {
        getAgeFred,
        getCurrentDate
    }
}
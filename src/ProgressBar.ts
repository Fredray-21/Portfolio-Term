const ProgressBars = (progress: number) => {
    const barStart = "[";
    const barProgress = "＝";
    const barEmpty = "　";
    const barEnd = "] ";
    const barLengthCaracter = 10;
    const barLength = barLengthCaracter - 2;
    const barProgressLength = Math.round((progress / 100) * barLength);
    const barEmptyLength = barLength - barProgressLength;
    const barProgressString = barProgress.repeat(barProgressLength);
    const barEmptyString = barEmpty.repeat(barEmptyLength);
    const progressNumber =
        progress + "%" + " ".repeat(progress.toString().length === 3 ? 1 : 3);
    const bar =
        progressNumber + barStart + barProgressString + barEmptyString + barEnd;
    return bar;
};

export default ProgressBars;
function substring(string, startIndex, count) {
    let substring = string
        .substring(startIndex, startIndex + count);

    console.log(substring);
}
substring('ASentence', 1, 8)
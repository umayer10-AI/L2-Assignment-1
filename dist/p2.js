const processInput = (value) => {
    if (typeof value === "string")
        return `"${value.trim().toLowerCase()}"`;
    else if (typeof value === "number")
        return value * 10;
    else if (typeof value === "boolean") {
        if (value)
            return `"Active"`;
        else if (value === false)
            return `"Inactive"`;
    }
};
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
export {};

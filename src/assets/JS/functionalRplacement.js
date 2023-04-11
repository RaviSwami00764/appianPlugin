let getFunctionalReplacement = (str, actionTypeId) => {
    const regexPatterns = {
        matchVal2: /(?<=\=\>\$\m)\.\w+\,\w+\!\w+\.\w+\.\w+/,
        matchVal1: /(?<=\=\>\$\m\,)\w+\!\w+\.\w+\.\w+/,
        iconVal: /(?<=\=\>)\$icons\.[\w\-]+\.[\w\-]+/,
        widthVal: /(?<=\=\>)\d*\w*x{0,1}/
    };

    const regexReplacements = {
        matchVal2: /\=\>\$\m\.\w+\,\w+\!\w+\.\w+\.\w+/,
        matchVal1: /\=\>\$\m\,\w+\!\w+\.\w+\.\w+/,
        iconVal: /\=\>\$\icons\.[\w\-]+\.[\w\-]+/,
        widthVal: /\=\>\d*\w*x{0,1}/
    };

    let { matchVal2, matchVal, iconVal, widthVal } = regexPatterns;

    let valueToSet = "";
    let width = widthVal.exec(str) ? widthVal.exec(str)[0] : "auto";
    str = str.replace(regexReplacements.widthVal, "");

    let a = str.split(',');
    if (actionTypeId == 1) {
        if (matchVal2.length > 1) {
            valueToSet = `$match${matchVal2} fv!item.${a[0]}`;
        } else if (matchVal.length > 1) {
            valueToSet = `$match ${matchVal} fv!item.${a[0]}`;
        } else if (iconVal.length > 1) {
            valueToSet = `${iconVal} fv!item.${a[0]}`;
        } else {
            valueToSet = `$ fv!item.${a[0]}`;
        }
    } else if (actionTypeId == 2) {
        if (matchVal2.length > 1) {
            valueToSet = `$match${matchVal2} ${gridLayoutData}.${a[0]}`;
        } else if (matchVal.length > 1) {
            valueToSet = `$match ${matchVal} ${gridLayoutData}.${a[0]}`;
        } else if (iconVal.length > 1) {
            valueToSet = `${iconVal} ${gridLayoutData}.${a[0]}`;
        } else {
            valueToSet = `$ ${gridLayoutData}.${a[0]}`;
        }
    } else if (actionTypeId == 3) {
        if (matchVal2.length > 1) {
            valueToSet = `$match${matchVal2} fv!row.${a[0]}`;
        } else if (matchVal.length > 1) {
            valueToSet = `$match ${matchVal} fv!row.${a[0]}`;
        } else if (iconVal.length > 1) {
            valueToSet = `${iconVal} fv!row.${a[0]}`;
        } else {
            valueToSet = `$ fv!row.${a[0]}`;
        }
    } else if (actionTypeId == 4) {
        if (matchVal2.length > 1) {
            valueToSet = `$match${matchVal2} ${gridLayoutData}['${recordObj[a[0]]}']`;
        } else if (matchVal.length > 1) {
            valueToSet = `$match ${matchVal} ${gridLayoutData}['${recordObj[a[0]]}']`;
        } else if (iconVal.length > 1) {
            valueToSet = `${iconVal} ${gridLayoutData}['${recordObj[a[0]]}']`;
        } else {
            valueToSet = `${gridLayoutData}['${recordObj[a[0]]}']`;
        }
    } else if (actionTypeId == 5) {
        if (matchVal2.length > 1) {
            valueToSet = `$match${matchVal2} fv!item['${recordObj[a[0]]}']`;
        } else if (matchVal.length > 1) {
            valueToSet = `$match ${matchVal} fv!item['${recordObj[a[0]]}']`;
        } else if (iconVal.length > 1) {
            valueToSet = `${iconVal} fv!item['${recordObj[a[0]]}']`;
        } else {
            valueToSet = `fv!item['${recordObj[a[0]]}']`;
        }
    }

    return { a, valueToSet, width};
}
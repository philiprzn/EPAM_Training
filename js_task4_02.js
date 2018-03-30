function upFrstLtr(str) {
    if (!str) return str;
    var trimedstr = str.trim();

    // return trimedstr[0].toUpperCase() + trimedstr.slice(1);

    // для разнообразия
    return trimedstr.charAt(0).toUpperCase() + trimedstr.slice(1);
}


console.log(upFrstLtr(' hello'));
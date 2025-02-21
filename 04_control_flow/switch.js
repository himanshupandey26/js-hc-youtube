// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// ek bar koi case match ho gya uske baad cases check nhi hoge, match case se sara code execute hoga, except default case

const month = "march"

switch (month) {
    case "jan": // case value => number, string
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
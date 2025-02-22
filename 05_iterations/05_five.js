const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function name(){ } )      # for each need a CallBack function => Its don't have name

coding.forEach( function (val){
    // console.log(val);
} )

coding.forEach( (item) => { // arrow function
    // console.log(item);
} )


function printMe(item){
    console.log(item);
}

// coding.forEach(printMe) // Only function ka Reference dena h : functionName, Lekin  execute nhi karna h: functionName() 

coding.forEach( (item, index, arr)=> { // value, index, arrayList
    console.log(item, index, arr);
} )
// PRINT:
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

slugger = (...args) => {
    let result = args.join("-");
return result
    console.log(result)
}


module.exports =  { slugger };
// slugger('aaa','bbb')
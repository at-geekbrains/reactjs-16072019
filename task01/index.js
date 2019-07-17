const times = 5;
const callback = count => console.log(count);
const loop = (times = 0, callback = null) => {    
    (typeof callback === 'function')?[...Array(times)].map((value,index) => callback(index+1)):console.log('Callback is undefined!');
};

loop(times, callback);
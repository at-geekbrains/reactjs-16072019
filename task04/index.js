const count = 10;
const url = 'https://jsonplaceholder.typicode.com/users/';

function status(response) {  
    if (response.status >= 200 && response.status < 300) {  
      return Promise.resolve(response)  
    } else {  
      return Promise.reject(new Error(response.statusText))  
    }  
}
  
function json(response) {  
    return response.json()  
}
  
function getUser(url, index) {
    url = url + (index + 1).toString();
    fetch(url)  
        .then(status)  
        .then(json)  
        .then(function(data) {              
            users.push(data);
            //users.push(JSON.stringify(data, null, 2).split('\n').join());            //replace(/\/n/gi, '')
        }).catch(function(error) {  
            console.log('Request failed', error);  
        });
}

// Стандартный вариант
//const users = [];
//for(index = 0; index < count; index++) getUser(url,index);

// Другой вариант
//const users = [...Array(count)].map((value,index) => getUser(url,index)).filter(item => item !== undefined);
const users = [...Array(count)].map((value,index) => getUser(url,index)).filter(Boolean);

console.info(users);

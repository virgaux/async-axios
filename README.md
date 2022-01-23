# async-axios
Asynchronous method for axios using bluebird promise module. 

```js
const asyAx = require('async-axios')

var data = asyAx.getData(path,config) 
    // result will be response.data
    // console.log(data)

var data = asyAx.get(path,config) 

    // same as this function.
    // var data = new Promise(async (resolve, reject) => {
    //        await axios.get(path, config).then(
    //            (response) => {
    //                resolve(response);
    //            },
    //                (error) => {
    //                reject(error);
    //            }
    //        );
    //    });

var data = asyAx.delete(path,config)  

var data = asyAx.head(path, config)

var data = asyAx.options(path, config)

var data = asyAx.request(config)

var data = asyAx.put(path, data, config)

var data = asyAx.post(path, data, config)

var data = asyAx.patch(path, data, config)

```
const axios = require('axios');
const Promise = require('bluebird');

exports.getData = async function (path,config) {
    return new Promise(async (resolve, reject) => {
        await axios.get(path, config).then(
            (response) => {
                resolve(response.data);
            },
                (error) => {
                reject(error);
            }
        );
    });
  }
  
exports.get= async function (path,config) {
    return new Promise(async (resolve, reject) => {
        await axios.get(path, config).then(
            (response) => {
                resolve(response);
            },
                (error) => {
                reject(error);
            }
        );
    });
  }     
  
exports.getRaw= async function (config) {
    return new Promise(async (resolve, reject) => {
        await axios.request(config).then(
            (response) => {
                resolve(response);
            },
                (error) => {
                reject(error);
            }
        );
    });
  }   
  
exports.delete= async function (path,config) {
    return new Promise(async (resolve, reject) => {
        await axios.delete(path, config).then(
            (response) => {
                resolve(response);
            },
                (error) => {
                reject(error);
            }
        );
    });
  } 
  exports.head= async function (path,config) {
    return new Promise(async (resolve, reject) => {
        await axios.head(path, config).then(
            (response) => {
                resolve(response);
            },
                (error) => {
                reject(error);
            }
        );
    });
  } 

  exports.options= async function (path,config) {
    return new Promise(async (resolve, reject) => {
        await axios.options(path, config).then(
            (response) => {
                resolve(response);
            },
                (error) => {
                reject(error);
            }
        );
    });
  } 

  exports.post= async function (path, data, config) {
    return new Promise(async (resolve, reject) => {
        await axios.post(path, data, config).then(
            (response) => {
                resolve(response);
            },
                (error) => {
                reject(error);
            }
        );
    });
  } 

  exports.put= async function (path, data, config) {
    return new Promise(async (resolve, reject) => {
        await axios.put(path, data, config).then(
            (response) => {
                resolve(response);
            },
                (error) => {
                reject(error);
            }
        );
    });
  }

  exports.patch= async function (path, data, config) {
    return new Promise(async (resolve, reject) => {
        await axios.patch(path, data, config).then(
            (response) => {
                resolve(response);
            },
                (error) => {
                reject(error);
            }
        );
    });
  }


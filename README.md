# handle-it-lite ( error handling package )
A simple error catching an handling application. On error application will log an save in a error-log folder, error messages formatted in the date and time of error.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.  

> For development environment only


## Prerequisites
What dependences you need to install the software and how to install them as followed for MacOS   

1. **NodeJS** - As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.
   - Learn more : https://nodejs.org/en/about/
2. **Npm** - npm makes it easy for JavaScript developers to share and reuse code, and makes it easy to update the code that you’re sharing, so you can build amazing things.
   - Learn more : https://www.npmjs.com/get-npm
3. **Homebrew** - Homebrew installs packages to their own directory and then symlinks their files into /usr/local.
   - Learn more - https://brew.sh

* Recommended install with **brew**.
   - past the following into your Terminal  
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

**Install nodeJS & npm with brew** : past the following into your terminal
```
$ brew install node
```
* After install is complete check install using the following in your terminal.  
For **node** - ```node -v``` this will print out a version number like this ```v10.6.0```.  
Now do the same for **npm** as followed ```npm -v``` output will look something like this ```6.2.0```.

> To learn more please visit - [node & npm install.](http://blog.teamtreehouse.com/install-node-js-npm-mac)

___

## Installing
A step by step series of examples that tell you how to get a development env running  
1. Step one  
  In your project root dir ***('./')*** use the following command in your terminal.
```
$ npm i bthis-handle-it-lite --save-dev
```

___

#### Example && Demo of usage.

1. Example One.
``` js
var handleErr = require('handle-it-lite');

var error = handleErr.error('User defined error message.', errStack);

console.error(error);
// === Output === //
// User defined error message. Please check error logs for more details, "./error-logs/MM-DD-YYYY.log"
```

2. Example Two.
``` js
var handleErr = require('handle-it-lite');

var error = (errorMessage, errStack) => {
  return handleErr.error(errorMessage, errStack);
}

console.error(error('User defined error message.', errStack));
// === Output === //
// User defined error message. Please check error logs for more details, "./error-logs/MM-DD-YYYY.log"
```

3. Example three.
``` js
const handleIt = require('./handle-it');

var err = {
  readWrite: 'File corrupt or unable to save file.',
  notFound: 404 + ' Not Found.',
  standard: 'Error :  please see log file.'
};
var error = ((errMessage, stackTrace) => {
      return handleIt.error(errMessage, stackTrace);
});

error(err.notFound, 'stackTrace');
// === Output === //
// 404 Not Found. --> Please check error logs for more details, "./error-logs/7-17-2018.log"
```
____

#### Syntax

| Option | Description |
| ------ | ----------- |
| errMessage   | String |
| errStack | Default error stack \|\| String |

___

> All error messages will be logged in project root dir ***('./')*** called ***'error-logs/mm-dd-yyyy.log'***     
Full path will look like : ```'./error-logs/7-20/2018.log'```

___

### Deployment
This product is for development testing only.

___

## Built With
**[NodeJS](https://nodejs.org/dist/latest-v10.x/docs/api/)** - An asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.

**[FS](https://nodejs.org/api/fs.html#fs_file_system)** - Node.js as a File Server. The Node.js file system module allows you to work with the file system on your computer.

___

## Authors
* **Brandon VanCamp** - [WebSite](https://csdevs.io/)

___

## License
![MIT](https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667)  

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.  
Yay Free software!

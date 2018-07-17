var fs = require('fs');

const handleIt = (errMsg, err) => {
  this.errMsg = errMsg;
  this.err = err;
    //  get todays date.
  const today =  new Date();
    //  ========= NOTE: Config options ==================== //
  var config = {
        //  //  /// Creating date format ///  //  //
      createDateFormat: () => {
        const date = {
          dd: today.getDate(),
          mm: today.getMonth()+1, //HACK:  January is 0!
          yyyy: today.getFullYear()
        };
          // return function;
        return (type) => {
            // !Return correct date format selector.
          if (type === 'mm-dd-yyyy') {
             mmddyyyy = `${date.mm}-${date.dd}-${date.yyyy}`;
            return mmddyyyy;
          } else if (type === 'yyyy-mm-dd') {
              yyyymmdd = `${date.yyyy}-${date.mm}-${date.dd}`;
              return yyyymmdd;
          } else if (type === 'full-today') {
            return today;
          } else if (!type) {
              return today;
          } else if (null) {
              return null + 'Please select a date format';
          } else {
              return 'Please select a date format';
          }
        }
      }, //<------- End of dateFormat;
     msg: { // User message && default messages;
       userMsg: `${errMsg} -->`,
       errorMsg: `${today} --> ${errMsg}, \n stack : ${err} \n \n`,
       errLogLocation: `Please check error logs for more details, "./error-logs/`,
       defaultErr: 'Error ! ----> ;'
     },
     mkDirErrLog: './error-logs' // File dir for making dir.
  };

    // NOTE: Handle error stacks.
  function errorMsg (userMsg, fileLocation, error, err) {
        // // NOTE: Console log user error && file log location;
      (errMsg.length > 20) // // HACK: if message is longer then 10 letters, log to error log.
      ? console.error(config.msg.defaultErr, fileLocation)
      : console.error(userMsg, fileLocation);

      //  //  /// Create file if file does not exist ///  //  //
    if (!fs.existsSync(config.mkDirErrLog)){
      fs.mkdirSync(config.mkDirErrLog);
    }
      // =========== Write passed date for file ============= //
    fs.appendFile(`${config.mkDirErrLog}/${dateFormat('mm-dd-yyyy')}.log`, config.msg.errorMsg, 'utf8', function (err) {
      if (err) {
        console.log('Error creating or writing to file.', err);
      }
    });
  }
    // date format call.
  const dateFormat = config.createDateFormat();
    // NOTE:  Format as : functionCall (user error message, error log location && name, other error message stack.);
  errorMsg(config.msg.userMsg, config.msg.errLogLocation + `${dateFormat('mm-dd-yyyy')}.log"`, err);
};


module.exports.error = handleIt;

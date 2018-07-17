var fs = require('fs');

const errorHandling = (errMsg, err) => {
  this.errMsg = errMsg;
  this.err = err;
  var today = {
    today: new Date(),
  };
  var config = {
      today: new Date(),
      format: {
          dd: today.today.getDate(),
          mm: today.today.getMonth()+1, //January is 0!
          yyyy: today.today.getFullYear(),
      },
      dateFormat: (type) => {
        var today = config.today; // get todays date.
         // Return correct date format selector.
        if (type === 'mm-dd-yyyy') {
          mmddyyyy = `${config.format.mm}-${config.format.dd}-${config.format.yyyy}`;
          return mmddyyyy;
        } else if (type === 'yyyy-mm-dd') {
            yyyymmdd = `${config.format.yyyy}-${config.format.mm}-${config.format.dd}`;
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
      }, // End of dateFormat;
     msg: { // User message && default messages;
       userMsg: errMsg,
       errorMsg: `${today.today} --> ${errMsg}, \n ${err}`,
       errLogLocation: `Please check error logs for more details, "./error-logs/`
     },
     mkDirErrLog: './error-logs' // File dir for making dir.
  };

  // NOTE: Handle error stacks.
  function errorMsg (userMsg, fileLocation, error, err) {
    // // NOTE: Console log error stack message;
    console.error(userMsg, fileLocation);

    if (!fs.existsSync(config.mkDirErrLog)){
      fs.mkdirSync(config.mkDirErrLog);
    }
    fs.writeFile(`${config.mkDirErrLog}/${config.dateFormat('mm-dd-yyyy')}.log`, config.msg.errorMsg, 'utf8', function (err) {
      if (err) {
        console.log('Error creating or writing to file.', err);
      }
    });
  }
  // NOTE:  Format as : functionCall (user error message, error log location && name, other error message stack.);
  errorMsg(config.msg.userMsg, config.msg.errLogLocation + `${config.dateFormat('mm-dd-yyyy')}.log"`, err);
};

module.exports.error = errorHandling;

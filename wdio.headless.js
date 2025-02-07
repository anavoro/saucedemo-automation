const {config: mainConfig} = require ("./wdio.conf.js");

exports.config = {
    ...mainConfig,
    ...{
      capabilities: [
        {
         browserName: "chrome",
         "goog:chromeOptions": {
           args: [
            "--headless", 
            "--disable-gpu",
            ],
                },
             },
         ],  
    },
};
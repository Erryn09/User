var serialport = require('serialport');
const ByteLength = require('@serialport/parser-byte-length');
var sp = new serialport('COM6', {autoOpen:false,baudRate:9600,parser: new serialport.parsers.ByteLength({length: 8})});

class Reader{
    constructor(opened) {
        this.opened = opened;
    }

    closeReader() {
        console.log('Reader closed.');
    }

    getReaderDateTime() {
        console.log('Reader Date Time');
    }

    // openReader() {
    //     sp.open(function(err){
    //         if(err){
    //             console.log(err,"Failed to open port.");
    //         }
    //         else{
    //             console.log("Reader Opened Successfully!");
    //             return true;
    //         }
        
    //     });
    // }

    openReader() {
        sp.open(new Promise((resolve, reject) => {
            resolve("Port opened successfully!");
            reject(new Error("Failed to open port."));
        }).then(
            // sp.on('data', function(data) {
            //     console.log('data received: ' + String(data));
            //     io.emit('scanData',String(data));
            // })
            res => {
                this.opened = true;
                console.log(res);
            },
            err => console.log(err)
        ));
        // new Promise((resolve, reject) => {
        //     resolve();
        //     reject(new Error("Failed to open port."));
        // }).then(
        //     res => {
        //         this.opened = true;
        //         console.log(res, "Port opened successfully!")
        //     },
        //     err => console.log(err)
        // )
    }

    readData() {
        sp.on('data', function(data) {
            console.log('data received: ');
        })
    }

    resetReader() {
        console.log('Reader reset');
    }
}

module.exports = Reader;
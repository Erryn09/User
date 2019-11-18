var serialport = require('serialport');
var Reader = require('./Reader');
var tempReader = new Reader(false);
// var SerialPort = serialport.SerialPort;
// tempReader.openReader();
var Readline = serialport.parsers.Readline;
var portName = process.argv[2];
var result, opened;

async function openPort() {
    await tempReader.openReader();
    console.log(tempReader.opened);
    tempReader.readData();
}

openPort();

// switch (comboBox1.SelectedIndex)
// {
//     case 0:
//         linkType = 2;
//         linkString = textBox1.Text;
//         break;

//     case 1:
//         linkType = 3;
//         linkString = "";
//         break;

//     default:
//         linkType = 1;
//         linkString = comboBox1.Text;
//         break;
// }


// var sp = new serialport('\\\\.\\COM7', {
//     baudRate: 9600,
//     parser: new serialport.parsers.Readline("\r\n")
// });

// var sp = new serialport('COM7', {autoOpen:false,baudRate:9600,parser: new serialport.parsers.Readline("\r\n")});

// sp.open(function(err){
//     if(err){
//         console.log(err,"Failed to open port.");
//     }
//     else{
//         console.log("COM7 Is Open");
//         sp.on('data', function(data) {
//             console.log('data received: ' + string(data));
            // console.log('data received: ' + data);
//         });
//     }

// });
// sp.on('open', onOpen);
// sp.on('data', onData);

// function onOpen() {
//     console.log("Open connection");
// }

// function onData(data) {
//     console.log("Open Data", data);
// }

const {format}= require('timeago.js');

const helpers={};

helpers.timeago=(timestamp)=>{
    console.log(timestamp)
    return {format}.format(timestamp);
};
module.exports=helpers;
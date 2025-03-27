const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "325yVCSJ#CXQX3Q0_Ekcl-2vx6m7Ir3ahYRNWVaLGvlgOB1V7fMo",
};

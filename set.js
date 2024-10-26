 
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;


///////////////////


module.exports = { session: process.env.SESSION_ID || 'Byte;;;',

////////////////////////////////



    PREFIXE: process.env.PREFIX || ".",



///////////////////////////
    A_REACT : process.env.AUTO_REACTION || 'on',
    CHATBOT: process.env.CHAT_BOT || "off",
    OWNER_NAME: process.env.OWNER_NAME || "TALKDROVE",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "923072380380",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'BYTE-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || 'ANDBAD-BOT;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib09MeFFxa0R4cjF1MFo0aE1IbjNUVitBdTdpM3B6by9ZeWJHdDhuN29Ybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWNsZCtlakdDTzN1Y3JDa011QlJHTk5ra1R4L0d4enNsazdYV3Q5a0VCcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRTBSVGZKdHZXVUVCUHQwczJTbld3Z28vMXdULzJ6YmhGMFVySE9hTUdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsd2s3VmhWRTVNbnJpTGFreGZPL0h5Q1ViT2RYQmhINGJaTHJ2a0tPMVJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9BRUpyNUdKQ1pGNTllWklFUXZwSEc1RWpjalR3RkhYd0RsVisrN3ByMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJaMDltZUdzbU8vTWN2N1dmb2VtLzl4K2ZhSTA3VXo1ajdiYkR4Mjd1Z2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0Rld3JSbk55Tnh3RlNtdkkyRFJlQ2RFMkFmMi93cERpQzczREtseTBIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1RWcTVKNS9vN3IxY0w3bThNN1FrRVQ1NFdOZHlmL3l1SmF1K1FPakZXaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRVU0Q2VDVqZjFmRzhNekxHdUJqdHZaSFp3djRES1h6cjdvalRhOVhXN1ptS3pRSU9uMzJPOHVzMXdLTlZ0eng4UlBscW1ZQlVJZ3RGUzd1ckZXZkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTExLCJhZHZTZWNyZXRLZXkiOiJWWVFoOGNNbjlmcFJaMHRRa2JFKzVSQWl4RVRPS0ZkT1R4SHlmZUh2NE1NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJb3FQbHE4LVJmLWpxVFJTcGQxc2JnIiwicGhvbmVJZCI6IjE0MmE5Mzk5LTJlNzUtNGRlNi05YjgyLWMxYTUyNTQyODhlMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzak5pWnVxUDlscjVHNnVzdGgvMXFva05pYmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjJwL1pULzVRWUhWTlJlaklPajlNbUttMjdJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpGNVpEWEdWIiwibWUiOnsiaWQiOiIyNTU3NjkxNDc3MTY6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2FsYW11IEJ1c2luZXNzIEFnZW5jeSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3pTdlVJUTY4dnp1QVlZQkNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidU1NRjluQU5KNmRMcHlyRDdHdGsvTlhFZDBvcWZ4UGhIdnRYVGY4d0p4dz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZWVBbFl0aEh0NklMVEk1NW85cUtPVXM2bjRRR3ljendVTGhOSzNtejcycTQ4ZzBZbGc5REUrb29CNnN4OVVxUkFTbytGempLbWpYYWE4Tk96YXQ3QUE9PSIsImRldmljZVNpZ25hdHVyZSI6IldHR1JlZGxnckdmSUE1ajljcHl6ZGlHMjUxSFRUU0lqZHNYRGxKdFpXQ1NxV29OQzMySmJzdzNKRmZldEs0V0t6UDdjUWFKZVRpWmN0OEVCcVZhTkF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NzY5MTQ3NzE2OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJqREJmWndEU2VuUzZjcXcreHJaUHpWeEhkS0tuOFQ0Ujc3VjAzL01DY2MifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjk5NDcxMzAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ2ZMIn0=',
    URL : process.env.BOT_MENU_LINKS || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Update ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

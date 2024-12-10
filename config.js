const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_45_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMCxcbiAgICAgICAgNixcbiAgICAgICAgMjU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDczLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDksXG4gICAgICAgIDI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMwLFxuICAgICAgICA3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NixcbiAgICAgICAgODIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM2LFxuICAgICAgICAzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxODksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU5LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidWxFYjlGSzZwRjBwODMxS0o5UlZDbkREU0cyTHdVS3RVTlF2SnhjYVVRYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUm5BS25qc1NTLTJGQUJUZmJzZTRaQVwiLFxuICBcInBob25lSWRcIjogXCJiYzk0OWNmMC0xZjI4LTRlODMtOGZiZi1mNTY2MmUyYTBmNTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgMTczLFxuICAgICAgMTA0LFxuICAgICAgNTEsXG4gICAgICA4NixcbiAgICAgIDE5NyxcbiAgICAgIDExMCxcbiAgICAgIDYxLFxuICAgICAgMzYsXG4gICAgICAyMTgsXG4gICAgICAxMjQsXG4gICAgICAxMTgsXG4gICAgICAxNDYsXG4gICAgICAyNDcsXG4gICAgICAyMTYsXG4gICAgICAxNDIsXG4gICAgICAxMzksXG4gICAgICA3NixcbiAgICAgIDE2OSxcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjcsXG4gICAgICAxMDEsXG4gICAgICAyMTksXG4gICAgICA2LFxuICAgICAgOTQsXG4gICAgICA3MyxcbiAgICAgIDcxLFxuICAgICAgMTI0LFxuICAgICAgMjM2LFxuICAgICAgMTI0LFxuICAgICAgMzQsXG4gICAgICAxLFxuICAgICAgMjIsXG4gICAgICA3MCxcbiAgICAgIDk2LFxuICAgICAgMjM5LFxuICAgICAgMTEyLFxuICAgICAgMjIxLFxuICAgICAgMSxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTMzlNUkE3R1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzMxMDA0MjUwOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSG1tXCIsXG4gICAgXCJsaWRcIjogXCIxMzMzODA3MTI3MjI0Nzc6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWVudEp3QkVOU08zN29HR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwMm5zbGs0YVpoekRJNlA5dEwxYnhBTDYyRTg3OHQ1QjlEVWl0Nm9tMkNRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFaT3dhL1Mzd3E0OEpWQ0lhNVFONnM3OW00UW9taE80U1JNdmRRc1hma0w0SlJQOTR0U05YTC83d3EzemhOdmQ2QURRZXNyOXBUYnZ4QjNrOGdPNUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhTbjllM25jVFlvZ0xMYVVXRXc3ZWhJUWlQTkY0dk1EaHV1MGs0SWhMTXdDSXgxUHdsanpMdkg3VlR5Z2hNUUJqTDcwaW1xQTZQaGwvVmtkZEdrbWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDczMTAwNDI1MDoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM4MDU5MTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPb1pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9vWi5qc29uIjogIntcImtleURhdGFcIjpcInozdFpScHV6WGkrWEI5dmtpalJGN2wxRnpnM1dONnluMVAyb0cyaGFvTXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzI4MDEyNzQzLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxLDQsNV19LFwidGltZXN0YW1wXCI6XCIxNzMzODA1ODk1NzA0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Mint-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ZERO_TWO"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = prss.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

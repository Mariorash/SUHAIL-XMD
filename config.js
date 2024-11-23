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
global.website=process.env.GURL || "null" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254780513271";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_26_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTEzLFxuICAgICAgICA1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgODEsXG4gICAgICAgIDM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDcwLFxuICAgICAgICA2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDgxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk1LFxuICAgICAgICA3NCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDU4LFxuICAgICAgICA5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI4LFxuICAgICAgICA2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NixcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NixcbiAgICAgICAgODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0eVQvUFFnaWJOWU90T1dqRlZPSFNJckpPVVA1MVhjcEpMZEpoVTFOZk80PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfMjZjb3h6Z1N0Ml95QmJHTVFkcnNRXCIsXG4gIFwicGhvbmVJZFwiOiBcImE3ZDU2NDRmLTc3MGEtNGViYy1iMDFjLTE1MTg1M2YyYjg0NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAyMSxcbiAgICAgIDE3MCxcbiAgICAgIDE5NyxcbiAgICAgIDE2OCxcbiAgICAgIDE4NixcbiAgICAgIDE1NixcbiAgICAgIDEwOCxcbiAgICAgIDY4LFxuICAgICAgOTcsXG4gICAgICAxMjUsXG4gICAgICAxMzcsXG4gICAgICAxMTcsXG4gICAgICAxODEsXG4gICAgICAyMixcbiAgICAgIDYsXG4gICAgICAyMTcsXG4gICAgICAxOCxcbiAgICAgIDMzLFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgNDIsXG4gICAgICAyNDIsXG4gICAgICAxOTIsXG4gICAgICA2NSxcbiAgICAgIDExLFxuICAgICAgNjEsXG4gICAgICAxNjcsXG4gICAgICAxNDQsXG4gICAgICA5NSxcbiAgICAgIDQ5LFxuICAgICAgMTU4LFxuICAgICAgMTIsXG4gICAgICAxNzIsXG4gICAgICAxOCxcbiAgICAgIDIzMSxcbiAgICAgIDE4OSxcbiAgICAgIDI4LFxuICAgICAgMTU4LFxuICAgICAgOTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiREtBSjJGMjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc4MDUxMzI3MTo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM4NzMxNjk3MTExMjIzOjY2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0o3WmxDQVFuWWVHdWdZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTkRndGtDc0pMUmNoUHVxb1N4WitBZFNDUm1sL28xQVhqdlN1NlNNYkdoND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpVnRVekdVN0tnSXhycyt4aVlUempESnZKenc0dVdOR0F6SWlKMXQvd2FyaEVvSUdyZk1SOEh2UVVwOWxFNjJtWU9KY2V1SXYxTlNxbyswZEo3NVdDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuZEZrZU1UWkNFNVlxaElIbzhGYkpJclF3OHVkTjV3ZXZBNUJReUZ4dS92MEZRWmFpTmtMN2Q5VW9sUlpUV0ZIRGFQc1pBZ0RLYUhvVWx3cTVpbXlCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3ODA1MTMyNzE6NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIzNDY3ODZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Mint sticker",
  packname: process.env.PACK_NAME || "Mint",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Mint",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "PARKER"  ).toUpperCase(),



};



global.ELEVENLAB_API_KErocess.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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

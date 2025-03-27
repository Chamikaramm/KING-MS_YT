const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0VGbXgvOENTcEcveFJhS2VSYkZqUUZlMS9JLzArOXB4Zk9wdTB0bVdtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFRXMy9naCtGNTRvNjFTbkxZU25GZGZJV05mQ3BQMC9qTWV1SnB5eXlCVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SjBDMjRTQ2IxSmpYNlExZUNBRXhDdGFYYVQ5ZVFCZFVjUUNnVm9iSEdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRZWtYSDkxVjRLNWpRc2NiWHFjLytOTnJMcldiM2dQVUhTdUNZL05pV3k4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFDbGJCeTFocTdvNFB0SWFQWDlpOWhzMFE3UHdMVFlZODZxVVgvUjFsazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii8vbXJ2UFh5Z0xqOEdEQWFLSlJEOVlDRi9KaW5aUlZobW8xTVdaVG02UTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ZQbHg3L1ZYWWJiSngwOHhUa2JaUmxIM0hyZDhUYXhwSVVCOVZIQlpIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjFqNThQRCs2M3Yyd252eDdrcjB4MnFMRVNDZGRqVXZjL1h6dkRhcEwyTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iko0b2NqZ3VQTHhBU1cwTnc4UWJZeC8rQlJjL0Z4NGJ6TkxBZ1JkNVhpaE5jTHRra1FPMWVjRWtzZXIwSEY3bDRrc0dPUFEvNlVQMDdCUWdqRXg3aWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiWjAwdG5MaEYzZC9JdklMSFZsNHBSdTNaKzRTTnh4Vkl5MklIeWhmcDVzND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc2Nzg2MTU5NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNzFGMTEzN0EyNDhEOTdFNzIyNzgyQjhDOEI2MkJBQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQzMDQ2NDgwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuY1l5bFYxNFRLS1NzeGl4bXBoaTlRIiwicGhvbmVJZCI6IjUyNmU1NjcwLWI1ZTctNGRmOS1hMTQ0LTUyMGNjMjg5NDViZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGZUV6WEVBQVRZckJHTU9qRjRWanFZdmV6ZHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTURMTnJFNkRTbDN6dzZrUEE5RUxLZWcvT2JzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhOVzVUODNZIiwibWUiOnsiaWQiOiI5NDc2Nzg2MTU5NDozN0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXpIZ2ZJR0VNQ09rNzhHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZGpjb3Z5NkIvUTlDYmVPcERsZU1vbHJ2eXB6anVpZEZTbGdRSFVTWU54Yz0iLCJhY2NvdW50U2lnbmF0dXJlIjoidXh4ZXU5ZzFib1BhNFhOWXp1QzNGMGR2VjZsVGdKRG1SbkIrS3NFTDd3V0l1eVdDSTl1MkI4OWdIeHQ1b2dwdnhYU3VLaEFRSWNmSm04R3VON05XRFE9PSIsImRldmljZVNpZ25hdHVyZSI6InFadjVQOE00Z2s5RXdwL21QWXhGK2c5MHhPUG43S25uSzY0UUR1T2lseUc2cTZmdUl3Z29nQUk5UHhhNElxYkIzc2xwT0ZWVG1COFpCb0VRV21uSWdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Njc4NjE1OTQ6MzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWFkzS0w4dWdmMFBRbTNqcVE1WGpLSmE3OHFjNDdvblJVcFlFQjFFbURjWCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MzA0NjQ3NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHRS8ifQ==",
};

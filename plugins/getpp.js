const axios = require('axios');

// 🔹 Owner Number Define කරන්න
const ownerNumber = ['94712345678']; // 👉 ඔබේ WhatsApp අංකය (+94 සමඟ)

// 🔹 Function: Owner/Admin Check
function isOwner(m) {
    return ownerNumber.includes(m.sender.split('@')[0]); 
}

async function isAdmin(m, sock) {
    try {
        let groupMetadata = await sock.groupMetadata(m.chat);
        let admins = groupMetadata.participants
            .filter(p => p.admin)
            .map(p => p.id.split('@')[0]);
        return admins.includes(m.sender.split('@')[0]) || isOwner(m);
    } catch {
        return false;
    }
}

// 🔹 Get WhatsApp DP Command
async function getWhatsappDP(m, sock) {
    if (!(await isAdmin(m, sock))) {
        return sock.sendMessage(m.chat, { 
            text: "⚠️ *Only the bot owner or a group admin can use this command!*" 
        }, { quoted: m });
    }

    let args = m.body.split(" ");
    if (args.length < 2) {
        return sock.sendMessage(m.chat, { 
            text: "⚠️ *Please enter a phone number!*\n\n*Example:* !getpp +94712345678" 
        }, { quoted: m });
    }

    let phoneNumber = args[1].replace(/[^0-9+]/g, ''); // Clean phone number

    if (!phoneNumber.startsWith('+94') || phoneNumber.length < 10) {
        return sock.sendMessage(m.chat, { 
            text: "⚠️ *Invalid phone number!*\n\n*Use correct format: +947XXXXXXXX*" 
        }, { quoted: m });
    }

    let apiUrl = `https://toolzin.com/tools/whatsapp-dp-downloader/?phone=${phoneNumber}`;
    
    try {
        let response = await axios.get(apiUrl);
        let imageUrl = response.data.image;

        if (imageUrl) {
            await sock.sendMessage(m.chat, { text: `🔍 Fetching DP for *${phoneNumber}*...` }, { quoted: m });
            await sock.sendMessage(m.chat, { 
                image: { url: imageUrl }, 
                caption: `🔥 Profile Picture of *${phoneNumber}*` 
            }, { quoted: m });
        } else {
            await sock.sendMessage(m.chat, { 
                text: `😔 Could not fetch profile picture for *${phoneNumber}*. Try again!` 
            }, { quoted: m });
        }
    } catch (err) {
        console.error(err);
        await sock.sendMessage(m.chat, { 
            text: "⚠️ Error fetching profile picture!" 
        }, { quoted: m });
    }
}

module.exports = { getWhatsappDP };

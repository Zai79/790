// index.js

// استدعاء المكتبات
const { Client } = require("discord.js-selfbot-v13");
const { joinVoiceChannel } = require("@discordjs/voice");

// إنشاء الكلاينت (حساب شخصي للتعلم فقط)
const client = new Client();

// ⚠️ التوكن الآن من القفل (Environment Variable)
const TOKEN = process.env.TOKEN;

// معرف السيرفر والروم الصوتي (تكتبهم كأرقام ID)
const GUILD_ID = process.env.GUILD_ID;
const VOICE_ID = process.env.VOICE_ID;

client.on("ready", async () => {
  console.log(`${client.user.username} ✅ الحساب شغال`);

  try {
    const guild = await client.guilds.fetch(GUILD_ID);

    // دخول الروم الصوتي
    joinVoiceChannel({
      channelId: VOICE_ID,
      guildId: GUILD_ID,
      adapterCreator: guild.voiceAdapterCreator,
      selfDeaf: false,
      selfMute: true
    });

    console.log("🎧 الحساب دخل الروم الصوتي!");
  } catch (err) {
    console.error("❌ خطأ:", err);
  }
});

// تسجيل الدخول بالحساب (من القفل)
client.login(TOKEN);

import { Client, Intents } from "discord.js";

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const token = "TU_TOKEN";
client.once("ready", () => {
  console.log(`Conectado como ${client.user.tag}`);
});

// Evento que se ejecuta cuando el bot recibe un mensaje
client.on("messageCreate", (message) => {
  // Comprueba si el mensaje es "!enviarMensaje" y si proviene de un administrador
  if (message.content === "!enviarMensaje" && message.member.permissions.has("ADMINISTRATOR")) {
    const canal = message.guild.channels.cache.get("ID_DEL_CANAL");

    if (canal) {
      canal.send("¡Este es un mensaje de prueba!");
    } else {
      console.log("No se pudo encontrar el canal.");
    }
  }
});

client.login(token);

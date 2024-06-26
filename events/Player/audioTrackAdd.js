const { EmbedBuilder } = require('discord.js');
const { Translate } = require("../../translate");

module.exports = (queue, track) => {
    if (!client.config.app.extraMessages) return;

    (async () => {
        const embed = new EmbedBuilder()
        .setAuthor({ name: await Translate(`Track <${track.title}> added in the queue <✅>`), iconURL: track.thumbnail })
        .setColor('#2f3136');

        queue.metadata.channel.send({ embeds: [embed] });
    })()
}
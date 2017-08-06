const Telegraf = require('telegraf');
 
const app = new Telegraf('415745162:AAFyy9mq-h3quRSUW_7fhyf_RICe_qf2aLM');
app.command('start', (ctx) => {
    console.log(ctx.update.message.from);
    return ctx.reply(`Welcome Dear ${ctx.update.message.from.first_name} ${ctx.update.message.from.last_name}. please upload your media file! ;)`);
});

app.on('video', (ctx) => {
    console.log(ctx.update.message.video);
    return ctx.reply("<code>" +JSON.stringify(ctx.update.message.video) + "</code>", {parse_mode: "HTML"});
});

app.on('photo', (ctx) => {
    console.log(ctx.update.message.photo);
    return ctx.reply("<code>" +JSON.stringify(ctx.update.message.photo) + "</code>", {parse_mode: "HTML"});
});

app.on('document', (ctx) => {
    console.log(ctx.update.message.document);
    return ctx.reply("<code>" +JSON.stringify(ctx.update.message.document) + "</code>", {parse_mode: "HTML"});
});

app.startPolling();
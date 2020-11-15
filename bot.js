console.log('Beep Beep!');

const config = require('./config.json');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(config.Token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', gotMessage);

const kuzco_replies = [
  'YOU THREW OFF MY GROOVE!',
  'Yay. I\'m a llama again!',
  'Okay, why does she even ***have*** that lever?',
  'Will you take a look at that? Pretty pathetic, huh? Well, you\'ll never believe this, but that llama you\'re looking at was once a human being. And not just any human being. That guy was an emperor. A rich, powerful ball of charisma. Oh, yeah! This is his story. Well, actually, my story. That\'s right... I\'m that llama. The name is Kuzco... Emperor Kuzco. I was the world\'s nicest guy and they ruined my life for no reason. Oh, is that hard to believe? Look, I\'ll tell you what. You go back a ways, you know, before I was a llama, and this will all make sense. ',
  'My face! My beautiful, beautiful face! I\'m an ugly, stinky llama! Wah-hah-hah! Llama face!',
  'Hey, Kronk, can you top me off, pal, be a friend?'
]

const kronk_replies = [
  '**Oh**, right. The poison. The poison for Kuzco, the poison chosen especially to kill Kuzco, Kuzco\'s poison. That poison?',
  'Three oinkers wearing pants, plate of hot air, basket of Grandma\'s breakfast and change the bull to a gill, got it. ',
  'I was a junior chipmunk, uh, and I had to be versed in all the woodland creatures. ',
]

function gotMessage(msg) {
  //console.log(msg.content);
  if (msg.content === 'pasta') {
    msg.reply('hongri 🍝');
  }
  if (/*msg.channel.id == 'CHANNEL_ID_HERE &&*/ msg.content === 'kuzco') {
    const index = Math.floor(Math.random() * kuzco_replies.length);
    msg.channel.send(kuzco_replies[index]);
  }
  if (msg.content === 'pull the lever kronk') {
    msg.channel.send('http://25.media.tumblr.com/tumblr_lsxk1ndn7W1r2vs7so2_r1_250.gif');
  } else if (msg.content === 'kronk') {
    const index = Math.floor(Math.random() * kronk_replies.length);
    msg.channel.send(kuzco_replies[index]);
  }
}
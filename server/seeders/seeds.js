const userSeeds = require('./userSeed.json');
const postSeeds = require('./postSeed.json');
const db = require('../config/connection');
const { Post, User } = require('../models');

db.once("open", async () => {
  await User.deleteMany();
  await Post.deleteMany()

  await User.create({
    username : "LargeRifle777", 
    email : "largeandcharged@hotmail.com", 
    password : "kGjRfUNWUIRwfS_", 
    // rank: "Gold",
    // platform: "PS5",
    // hours: "PM",
    // voiceChat: "Yes",
    posts : [],
    friends : []
  });

  await User.create({
    username : "ChokeMeLoba", 
    email : "lobaisqueen332@gmail.com", 
    password : "otK5YtXpcalD1cm", 
    // rank: "Platinum",
    // platform: "Xbox",
    // hours: "PM",
    // voiceChat: "Yes",
    posts : [],
    friends : []
  });

  await User.create({
    username : "xXYoungPredatorXx", 
    email : "apexpredator32@hotmail.com", 
    password : "AP3EUTRZoxzsiHn", 
    // rank: "Silver",
    // platform: "Xbox",
    // hours: "AM",
    // voiceChat: "No",
    posts : [],
    friends : []
  });

  await User.create({
    username : "KillaCastle", 
    email : "castlecage424@hotmail.com", 
    password : "sm0bZJCUaWqQs8k", 
    // rank: "Arenas",
    // platform: "PC",
    // hours: "AM",
    // voiceChat: "No",
    posts : [],
    friends : []
  });

  await User.create({
    username : "DropmeanR3", 
    email : "dredagod9045@hotmail.com", 
    password : "lPyRtzle1LjkjIe", 
    // rank: "Predator",
    // platform: "PC",
    // hours: "PM",
    // voiceChat: "Yes",
    posts : [],
    friends : []
  });

  await User.create({
    username : "CriptoRepresent", 
    email : "crippledcrypto32@hotmail.com", 
    password : "gKbsfF3M9jeBRcH", 
    // rank: "Gold",
    // platform: "PS4",
    // hours: "PM",
    // voiceChat: "Yes",
    posts : [],
    friends : []
  });

  await User.create({
    username : "GibbysDumper", 
    email : "thiccsamoanboi444@hotmail.com", 
    password : "Jo3EsnsZoSURiHn", 
    posts : [],
    friends : []
  });

  await User.create({
    username : "Heartbreaker23", 
    email : "hoiboi34@hotmail.com", 
    password : "HirEsnsZofejhHn", 
    posts : [],
    friends : []
  });

  const posts = await Post.insertMany([
      {
          rank: "Gold",
          platform: "PS5",
          hours: "PM",
          voiceChat: "Yes",
          username : "LargeRifle777", 
          comments : [ 
              {
                  commentBody : "Lets play gun game at 8", 
                  username : "DropmeanR3"
              } 
          ] 
      },
      {
          rank: "Platinum",
          platform: "Xbox",
          hours: "PM",
          voiceChat: "Yes",
          username : "ChokeMeLoba", 
          comments : [] 
      },
      {         
          rank: "Silver",
          platform: "Xbox",
          hours: "AM",
          voiceChat: "No",
          username : "xXYoungPredatorXx", 
          comments : [ 
              {
                  commentBody : "Wanna play at like 9AM? I don't have to work", 
                  username : "CryppledbyGod" 
              }
       ] 
      },
      {
          rank: "Gold",
          platform: "PS4",
          hours: "PM",
          voiceChat: "Yes",         
          username : "CriptoRepresent", 
          comments : [ ] 
      },
      {
          rank: "Predator",
          platform: "PC",
          hours: "PM",
          voiceChat: "Yes",   
          username : "DropmeanR3", 
          comments : [ ] 
      },
      {
          rank: "Platinum",
          platform: "PC",
          hours: "AM",
          voiceChat: "No",
          username : "KillaCastle", 
          comments : [ 
              {
                  commentBody : "facilis et ipsum", 
                  username : "DropmeanR3" 
              },
              {
                  commentBody : "qui non aut nam porro cum repellendus a et ab laboriosam autem error ut ex incidunt sed consequatur autem", 
                  username : "ChokeMeLoba" 
              }
          ]
      },
      {
        rank: "Predator",
        platform: "PS4",
        hours: "AM",
        voiceChat: "Yes",
        username : "GibbysDumper", 
        comments : [] 
      },
      {
        rank: "Silver",
        platform: "PS5",
        hours: "AM",
        voiceChat: "No",
        username : "Heartbreaker23", 
        comments : [] 
      }
  ]);

  console.log("all done!");

  process.exit();
});
const db = require('../config/connection');
const { Card, User, CardInfo } = require('../models');

db.once('open', async () => {
    await Card.deleteMany({});
    await User.deleteMany({});
    await CardInfo.deleteMany({});

    await User.create({
      username : "LargeRifle777", 
      email : "largeandcharged@hotmail.com", 
      password : "kGjRfUNWUIRwfS_", 
    });
  
    await User.create({
      username : "ChokeMeLoba", 
      email : "lobaisqueen332@gmail.com", 
      password : "otK5YtXpcalD1cm", 
    });
  
    await User.create({
      username : "xXYoungPredatorXx", 
      email : "apexpredator32@hotmail.com", 
      password : "AP3EUTRZoxzsiHn", 
    });
  
    await User.create({
      username : "KillaCastle", 
      email : "castlecage424@hotmail.com", 
      password : "sm0bZJCUaWqQs8k", 
    });

    await User.create({
      username : "DropmeanR3", 
      email : "dredagod9045@hotmail.com", 
      password : "lPyRtzle1LjkjIe", 
    });
  
    await User.create({
      username : "CriptoRepresent", 
      email : "crippledcrypto32@hotmail.com", 
      password : "gKbsfF3M9jeBRcH", 
    });

    await Card.create({
      username : "LargeRifle777"
    });
  
    await Card.create({
      username : "ChokeMeLoba"
    });
  
    await Card.create({
      username : "xXYoungPredatorXx"
    });
  
    await Card.create({
      username : "KillaCastle"
    });

    await Card.create({
      username : "DropmeanR3"
    });
  
    await Card.create({
      username : "CriptoRepresent"
    });

    await CardInfo.create({
      username : "LargeRifle777", 
      rank : "Gold", 
      platform : "PS5", 
      hours: "PM",
      voiceChat: "Yes"
    });
  
    await CardInfo.create({
      username : "ChokeMeLoba", 
      rank : "Platinum", 
      platform : "Xbox", 
      hours: "PM",
      voiceChat: "No"
    });
  
    await CardInfo.create({
      username : "xXYoungPredatorXx", 
      rank : "Silver", 
      platform : "Xbox", 
      hours: "AM",
      voiceChat: "Yes"
    });
  
    await CardInfo.create({
      username : "KillaCastle", 
      rank : "Predator", 
      platform : "Xbox", 
      hours: "AM",
      voiceChat: "Yes"
    });

    await CardInfo.create({
      username : "DropmeanR3", 
      rank : "Master", 
      platform : "PC", 
      hours: "PM",
      voiceChat: "No"
    });
  
    await CardInfo.create({
      username : "CriptoRepresent", 
      rank : "Gold", 
      platform : "PC", 
      hours: "AM",
      voiceChat: "Yes"
    });

  

  console.log('all done!');
  process.exit(0);
});
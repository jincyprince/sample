module.exports = {
    mongoURI: 'mongodb://jincy:jincy123@ds245661.mlab.com:45661/astrolab',
  secret:'12233jhjk'
  };
  module.exports = {
    mongoURI: process.env.MONGO_URI,
    secret:process.env.SECRET
  };
  
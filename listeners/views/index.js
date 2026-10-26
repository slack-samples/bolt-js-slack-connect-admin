// Register our view callbacks
const { inviteSubmittedCallback } = require('./invite_submitted');
const { disconnectChannelCallback } = require('./disconnect_channel');

module.exports.register = (app) => {
  app.view('invite_submitted_callback', inviteSubmittedCallback);
  app.view('disconnect_channel_callback', disconnectChannelCallback);
};

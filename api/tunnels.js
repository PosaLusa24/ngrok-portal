var tunnelData = require('../data.json')
module.exports = (req, res) => {
  res.send(tunnelData)
}

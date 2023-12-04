const express = require('express');
const moment = require('moment-timezone');
const app = express();
const port = process.env.PORT || 3000;

app.get('/:date', (req, res) => {
  const requestedDate = req.params.date;
  const timeZone = 'Asia/Manila'; // Set your desired timezone

  // Calculate the number of days until the requested date, considering the time of the day
  const currentDate = moment().tz(timeZone);
  const endOfDay = moment().tz(timeZone).endOf('day');
  const daysUntil = moment(requestedDate).tz(timeZone).endOf('day').diff(currentDate, 'days');

  // Send only the numeric value in the response
  res.send(String(daysUntil));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

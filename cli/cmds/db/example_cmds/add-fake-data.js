const mongoose = require('mongoose');
const User = require('../../../../collections/User');

exports.command =
  'add-fake-data <connectionString> <fakeDataNumber>';
exports.desc = 'Add fake data';
exports.builder = {};
exports.handler = async function ({
  connectionString,
  fakeDataNumber,
}) {
  console.log(`connectionString: ${connectionString}`);
  console.log(`fakeDataNumber: ${fakeDataNumber}`);

  await mongoose.connect(connectionString);

  const user = new User({
    writerName: 'test name',
    writerSurname: 'test surname',
    writerEmail: 'test email',
  });

  await user.save();
  await mongoose.disconnect();

  console.log('User has been successfully saved');
}
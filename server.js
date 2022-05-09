const init = require('./utils/userChoices');
const db = require('./db/connection');

const PORT = process.env.PORT || 3001;

// start server after db connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

init();
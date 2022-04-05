const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const io = require('socket.io')(3005) //for messaging

io.on('connection', socket => {
    socket.emit('chat-message', 'Welcome to Handy Helper Chat') //for messaging
})

const routes = require('./controllers')

const app = express();
const PORT = process.env.PORT || 3005;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const http = require('http')

const routes = require('./controllers')

const app = express();
const PORT = process.env.PORT || 3001;

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

const server = http.createServer(app)
const io = require('socket.io')(server) //for messaging
const messaging = require('./controllers/messaging-route')
const homepage = require('./controllers/dashboard-routes')

const sessionMiddleware = session(sess)
app.use(sessionMiddleware);

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(__dirname + "/public"));
// app.use(express.static(path.join(__dirname, 'public')));


app.use('/', messaging)
// app.use('*', homepage)

app.use(routes);

<<<<<<< HEAD
sequelize.sync({ force: true }).then(() => {
  server.listen(PORT, () => console.log('Now listening'));
});

//for messaging
const users = {}
io.use((socket, next) => {
  sessionMiddleware(socket.request, {}, next)
})


io.on('connection', socket => {   
  const session = socket.request.session
  session.connections++
  session.save()  
  socket.on('new-user', name => {
    console.log(session)
    users[socket.id] = name
    socket.broadcast.emit('user-connected', name)
  })
  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', { 
      message: message,
      name: users[socket.id] })
    })
    socket.on('disconnecting', (name) => {
      socket.broadcast.emit('user-disconnected', users[socket.id])
      users[socket.id] = name
      socket.broadcast.emit('user-connected', name)
  })
})



=======
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
>>>>>>> f4874035cfa754e539706cf7d61b2e5de7107d4a

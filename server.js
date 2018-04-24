const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.use(cookieParser());

    server.get('/login', (req, res) => {
      if(req.cookies.token) {
        res.redirect('/');
      } else {
        return app.render(req, res, '/login', req.query);
      }
    });

    server.get('/signup', (req, res) => {
      if(req.cookies.token) {
        res.redirect('/');
      } else {
        return app.render(req, res, '/signup', req.query);
      }
    });

    server.get('/welcome/:persistence_token', (req, res) => {
      const actualPath = '/welcome';
      const queryParams = { persistence_token: req.params.persistence_token };
      app.render(req, res, actualPath, queryParams);
    });

    server.get('/email_confirm/:persistence_token', (req, res) => {
      const actualPath = '/email_confirm';
      const queryParams = { persistence_token: req.params.persistence_token };
      app.render(req, res, actualPath, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
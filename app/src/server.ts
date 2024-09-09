// app/src/server.ts
import express, { Request, Response, NextFunction } from 'express';
import nunjucks from 'nunjucks';
import path from 'path';

const app = express();

// Middleware to set the client on res.locals
app.use((req: Request, res: Response, next: NextFunction) => {
  const client = req.headers['x-client'] as string || 'power';
  res.locals.client = client; // Set the client in res.locals
  next();
});

// Configure Nunjucks
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true,  // Automatically recompile templates on change
});

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Route to handle the home page
app.get('/', (req: Request, res: Response) => {
  const client = res.locals.client;
  res.render(`${client}/index.njk`, { css: `${client}/style.css` });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

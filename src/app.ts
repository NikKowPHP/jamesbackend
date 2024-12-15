import './alias';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from '@/config';
import routes from '@/routes';
import { errorHandler } from '@/middleware/errorHandler';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

export default app;
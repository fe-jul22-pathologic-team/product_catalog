'use strict';

import { createServer } from './server.js'
import { getAll } from './services/products.js';

const PORT = process.env.PORT || 3000;

createServer()
  .listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });

import { server } from './server';
import { dbConnect } from './database';
import 'dotenv';

dbConnect();
server();
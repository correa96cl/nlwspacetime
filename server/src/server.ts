import fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';
import { memoriesRoutes } from './routes/memories';

const app = fastify();

app.register(cors, {
    origin: true,
})
app.register(memoriesRoutes);


app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running on port 3333')
});
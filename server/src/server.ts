import fastify from 'fastify';

const app = fastify();

app.get('/hello', () => {

    return 'PORRRAAA';
});

app.listen({
    port: 3333,
}).then( () => {
    console.log('HTTP server running on port 3333')
});
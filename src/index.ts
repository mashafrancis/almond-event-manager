import EventManager from "rabbitmq-event-manager";

function start() {
  const eventManager = new EventManager({
    url: 'amqp://localhost',
    application: 'almond-user'
  })
  eventManager.on('USER_REGISTERED', (payload: any) => {
    console.log(`MICRO APP micro-user-registered`);
    console.log('payload :', payload);
  })
}

start();

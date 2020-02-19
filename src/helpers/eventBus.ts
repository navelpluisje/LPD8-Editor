const subscriptions: Record<string, Record<number, Function>> = {};
const getNextUniqueId = getIdGenerator();

function subscribe(eventType: string, callback: Function): object {
  const id = getNextUniqueId()  // create new entry for eventType

  if(!subscriptions[eventType]) {
    subscriptions[eventType] = { };  // the callback is registered
  }

  subscriptions[eventType][id] = callback;

  return {
    unsubscribe: () => {
      delete subscriptions[eventType][id];

      if (Object.keys(subscriptions[eventType]).length === 0) {
        delete subscriptions[eventType];
      }
    }
  };
};

function publish(eventType: string, arg:any) {
  if (!subscriptions[eventType]) {
    return
  }

  Object.keys(subscriptions[eventType])
    .forEach((id: any) => subscriptions[eventType][id](arg));
}

function getIdGenerator() {
  let lastId = 0

  return function getNextUniqueId() {
      lastId += 1;
      return lastId;
  }
}

export const EventBus = {
  subscribe,
  publish,
};

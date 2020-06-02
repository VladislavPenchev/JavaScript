class EventEmitter {

    constructor(){
        this.subscriptions = {};
    }

    on(eventName, cb){
        this.subscriptions[eventName] = (this.subscriptions[eventName] || []).concat(cb);

        const cbIndex = this.subscriptions[eventName].length - 1;
        return () => {
            this.subscriptions[eventName] = [
                ...this.subscriptions[eventName].slice(0, cbIndex),
                ...this.subscriptions[eventName].slice(cbIndex + 1),
            ];
        }
    }

    once(eventName, cb) {
        const unsub = this.on(eventName, data => {
            cb(data);
            unsub();
        })
    }

    emit(eventName, data) {
        (this.subscriptions[eventName] || []).forEach(cb => {
            cb(data);
        });
    }
}

const emitter = new EventEmitter();

//const unsub = emitter.on('getData', console.log);
emitter.on('getData', console.log);
emitter.on('getData', console.log);

emitter.emit('getData', 'Testing...');
// unsub();
// console.log('--------------');
emitter.once('getData', console.log);
emitter.emit('getData', 'Testing...');
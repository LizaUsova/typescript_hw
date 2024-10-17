class EventManager {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    off(eventName, callback) {
        if (!this.events[eventName]) return;

        this.events[eventName] = this.events[eventName].filter(
            (cb) => cb !== callback
        );
    }

    trigger(eventName, ...args) {
        if (!this.events[eventName]) return;
        this.events[eventName].forEach((callback) => {
            callback.apply(this, args);
        });
    }
}

const manager = new EventManager();

function onUserLogin(user) {
    console.log(`${user} logged in!`, this);
}

function onUserLogout(user) {
    console.log(`${user} logged out!`, this);
}

manager.on("login", onUserLogin);
manager.on("logout", onUserLogout);
manager.trigger("login", "Liza");
manager.trigger("logout", "Liza");
manager.off("logout", onUserLogout);
manager.trigger("logout", "Liza");

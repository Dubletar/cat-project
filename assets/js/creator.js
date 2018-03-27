function Creator () {
    var self = this;

    this.containers = {};
    this.kitties = {};

    this.init = function () {
        this.addContainer();
    }

    this.addContainer = function () {
        var container = new Container();
        var id = container.getId();
        self.containers[id] = container;
        this.getMasterContainer().appendChild(container.getMarkup());
        container.addInitialRow();
    }

    this.createKitty = function () {
        var kitty = new Cat();
        var containerKeys = Object.keys(this.containers);
        if (containerKeys.length === 1) {
            if (this.containers[containerKeys[0]].addKitty(kitty)) {
                this.kitties[kitty.getId()] = kitty;
            }
        }
    }

    this.getMasterContainer = function () { return document.getElementById("containers") }

    this.init();
}

var creator = new Creator();
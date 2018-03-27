function Container () {

    var self = this;

    this.id = null;
    this.kitties = {};
    this.rows = {};
    this.catsPerRow = 8;
    this.markup = null;

    this.init = function () {
        this.setId(utility.createId());
        this.setMarkup();
    }

    this.setMarkup = function () {
        var div = document.createElement("div");
        div.id = this.id;
        this.markup = div;
    }

    this.addInitialRow = function () {
        var rowId = utility.createId();
        var row = document.createElement("div");
        row.className = "container-row";
        row.id = rowId;
        this.addToContainer(row);
        this.rows[rowId] = row;
    }

    this.addRow = function () {
        var rowId = utility.createId();
        var row = document.createElement("div");
        row.className = "container-row";
        row.id = rowId;
        this.addToContainer(row);
        this.rows[rowId] = row;
    }

    this.addKitty = function (kitty) {
        this.kitties[kitty.getId()] = kitty;

        return this.addKittyMarkup(kitty);
    }

    this.addKittyMarkup = function (kitty) {
        var row = null;

        if (this.count(this.kitties) === 1) {
            row = this.getRow(0);

            if (row.appendChild(kitty.getMarkup())) {
                return true;
            }
        } else {
            if ((this.catsPerRow / (this.count(this.kitties) - ((this.count(this.rows) - 1) * this.catsPerRow))) < 1) {
                this.addRow();
            }
            row = this.getRow(Object.keys(this.rows).length - 1);

            if (row.appendChild(kitty.getMarkup())) {
                return true;
            }
        }

        return false;
    }

    this.addToContainer = function (markup) {
        var container = this.getContainer();
        container.appendChild(markup);
    }

    this.getRow = function (num) {
        var rowKeys = Object.keys(this.rows);
        return document.getElementById(rowKeys[num]);
    }

    this.getMarkup = function () { return this.markup }

    this.getContainer = function () { return document.getElementById(this.id) }

    this.count = function (object) { return Object.keys(object).length }

    this.setId = function (id) { this.id = id }

    this.getId = function () { return this.id }

    this.init();
}
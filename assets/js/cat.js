function Cat () {

    var self = this;

    this.id = null;
    this.imagePath = null;
    this.markup = '';
    this.gender = null;
    this.name = null;

    this.init = function () {
        this.setId(utility.createId());
        this.setDetails();
        this.setImagePath(
            "images/cats/cat" + (Math.floor(Math.random() * 9) + 1) + ".png"
        );
        this.createMarkup();
    }

    this.createMarkup = function () {
        var wrapper = document.createElement("div");
        wrapper.id = this.id;
        wrapper.className = "kitty-wrapper";

        var innerWrapper = document.createElement("div");
        innerWrapper.className = "kitty-inner kitty-well " + (this.gender === "male" ? "male-kitty" : "female-kitty");

        var image = document.createElement("img");
        image.className = "kitty-image";
        image.src = this.imagePath;
        innerWrapper.appendChild(image);
        wrapper.appendChild(innerWrapper);

        var kittyInfo = document.createElement("div");
        kittyInfo.className = "kitty-info";
        kittyInfo.innerHTML = this.name;
        wrapper.appendChild(kittyInfo);

        this.markup = wrapper;
    }

    this.setDetails = function () {
        var test = Math.floor(Math.random() * 10) + 1; // between 1 and 10
        var gender = test >= 6 ? 'male' : 'female';
        var catName = catNames[gender][Math.floor(Math.random() * catNames[gender].length)];

        this.gender = gender;
        this.name = catName;
    }

    this.getMarkup = function () { return this.markup }

    this.setImagePath = function (path) { this.imagePath = path }

    this.setId = function (id) { this.id = id }

    this.getId = function () { return this.id }

    this.init();
}
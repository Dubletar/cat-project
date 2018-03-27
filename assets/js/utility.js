function Utility () {

    this.createId = function () {
        var d = new Date();
        var t = d.getTime();
        return t + Math.random();
    }
}

var utility = new Utility();
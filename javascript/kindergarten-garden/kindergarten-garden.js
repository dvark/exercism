const flowers = {
    V: 'violets',
    G: 'grass',
    R: 'radishes',
    C: 'clover'
}

function Garden(garden, students) {

    this.garden = garden.split('\n');
    if(students) {
        this.students = students.sort().map((student) => student.toLowerCase());
    }

    var handler = {
        get: function(target, name){
            var number = target.numberFromName(name);
            return target.getFlowersFromNumber(number);
        }
    }

    return new Proxy(this, handler);
};

Garden.prototype.numberFromName = function(name){
    if (!this.students) {
        return name.charCodeAt(0) - 97;
    }
    return this.students.indexOf(name);
}

Garden.prototype.getFlowersFromNumber = function(number) {
    result = this.garden[0].slice(number*2, number*2+2);
    result += this.garden[1].slice(number*2, number*2+2); 
    return result.split('').map((letter) => flowers[letter]);
}

module.exports = Garden;
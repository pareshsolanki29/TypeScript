var Generator = /** @class */ (function () {
    function Generator() {
    }
    return Generator;
}());
function create(name) {
    username: string;
    var temp = [];
    var a = 1;
    var name = "peter";
    for (var i = 0; i <= results.length - 1; i++) {
        if (results[i].includes(name)) {
            var re = (results[i].split(/(\d+)/).filter(Boolean));
            temp.push(re[1]);
        }
    }
    temp.sort(function (a, b) { return a - b; });
    for (var k = 0; k <= temp.length - 1; k++) {
        if (a == temp[k]) {
            a++;
        }
        else {
            break;
        }
    }
    name = name + a;
    constructor(name, string);
    {
        this.name = username;
    }
    ;
}
function () { }
delete (name);
{
    for (var i in results) {
        if (name == i) {
            results.splice(i, 1);
        }
    }
}
function usernameGenerator(queries) {
    var generator = new Generator();
    var results = [];
    queries.forEach(function (query) {
        var _a = query.split(' '), action = _a[0], name = _a[1];
        if (action === 'create') {
            results.push(generator.create(name));
        }
        else if (action === 'delete') {
            generator["delete"](name);
        }
    });
    return results;
}

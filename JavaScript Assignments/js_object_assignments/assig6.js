var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = eval("(" + text + ")");
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);
console.log(obj.employees[2].firstName + " " + obj.employees[2].lastName);

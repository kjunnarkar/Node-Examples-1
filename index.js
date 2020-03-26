const rect = require('./rectangle');

const solveRect = (l, b) => {
    console.log('solving for rect with l = ' + l + ' and b = ' + b);

   rect(l, b,(err, rectangle) => {
       if (err) {
           console.log('error', err.message);
       }
       else {
           console.log('The area of the rectangle of dimensions l = ' + l + ' and b = ' + b + ' is ' + rectangle.area());
           console.log('The perimeter of the rectangle of dimensions l = ' + l + ' and b = ' + b + ' is ' + rectangle.perimeter());
       }
   });
   console.log('this is after the call to rect');
};

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);

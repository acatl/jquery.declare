# jQuery Declare

## Usage

Declaring some variable:

    $.declare("com.myapp.myVariable", "#FFCC00");
    console.log(com.myapp.myVariable);

Declaring an object:

    $.declare("com.myapp.myLib", {
      addNumbers: function (a,b) {
        return a+b;
      },

      localVariable: 23,
      getLocalVariable: function () {
        return this.localVariable;
      }
    });

    var myLib = com.myapp.myLib;

    myLib.addNumbers(1,2);
    myLib.getLocalVariable();

Declaring a simple function:

    $.declare("com.myapp.myFunction", function (a) {
      // do something
      return a;
    });

    var result = com.myapp.myFunction(123);
    console.log(result);

Using the Module Pattern

    $.declare("com.myapp.myObject", (function () {
      var privateVar = "my name is: ";
      return {
        hello: function (name) {
          return privateVar + name;
        }
      }
    })()
    );

    var myObject = com.myapp.myObject;
    myObject.hello("acatl");

Adding a function using Module Pattern

    $.declare("com.myapp.myClass", function () {
      var privateVar = "my name is: ";
      return {
        hello: function (name) {
          return privateVar + name;
        }
      }
    });

    var MyClass = new com.myapp.myClass();
    MyClass.hello("acatl");

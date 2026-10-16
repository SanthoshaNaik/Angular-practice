"use strict";
function SampleFun() {
    let Colors;
    (function (Colors) {
        Colors[Colors["Red"] = 5698] = "Red";
        Colors[Colors["Green"] = 4699] = "Green";
        Colors[Colors["Black"] = 4444] = "Black";
        Colors[Colors["yellow"] = 4494] = "yellow";
    })(Colors || (Colors = {}));
    console.log(Colors.Black);
    console.log(Colors[4494]);
    // Array
    let Cources = ['C#', 'java', 'javascript', 'TypeScript'];
    //for
    // for(var i=0; i<Cources.length;i++)
    // {
    //     console.log(Cources[i])
    // }
    //while
    // var i=0;
    // while(i<Cources.length)
    // {
    //     console.log(Cources[i]);
    //     i++;
    // }
    // for in 
    // for(var item in Cources)
    // {
    //     console.log(item);
    // }
    //for of
    for (var item of Cources) {
        console.log(item);
    }
    // Tuple 
    let dob = [12, "Mar", 2002];
    for (var d of dob) {
        console.log(d);
    }
    //object
    let emp = {
        empId: 101,
        ename: "santhu",
        esalary: 65656,
        cources: ["c#", "Java", "Python", "typescript"],
        ratings: {
            Java: 8,
            Python: 9,
        }
    };
    console.log(emp.ename);
    for (let e of emp.cources) {
        console.log(e);
    }
    console.log(emp.ratings.Java);
}
SampleFun();

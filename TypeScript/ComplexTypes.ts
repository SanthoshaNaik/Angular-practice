function SampleFun()
{
    enum Colors
    {
        Red=5698,
        Green=4699,
        Black=4444,
        yellow=4494
    }
    console.log(Colors.Black);
    console.log(Colors[4494]);


    // Array
    let Cources:string[]=['C#','java','javascript','TypeScript'];
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
    for(var item of Cources)
    {
        console.log(item)
    }

    // Tuple 
    let dob:[number,string,number]=[12,"Mar",2002];
    for(var d of dob)
    {
        console.log(d)
    }

    //object
    let emp={
        empId:101,
        ename:"santhu",
        esalary:65656,
        cources:["c#","Java","Python","typescript"],
        ratings:{
            Java:8,
            Python:9,

        }
    };

    console.log(emp.ename);
    for(let e of emp.cources)
    {
        console.log(e);
    }

    console.log(emp.ratings.Java);

}

SampleFun();
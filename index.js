const express = require('express'); 
console.log("Calculating...");

const app = express();

app.get("/", ( req, res)=>{
    res.json(
        [
            {
                id: 1,
                employeeName: "Codewithutkrisht",
                employeeSalary: 70000
            },
            {
                id: 2,
                employeeName: "utkrisht",
                employeeSalary: 60000
            },
             {
                id: 3,
                employeeName: "kapil",
                employeeSalary: 50000
            },
             {
                id: 4,
                employeeName: "Ayush",
                employeeSalary: 40000
            },
             {
                id: 5,
                employeeName: "Atul",
                employeeSalary: 30000
            },
             {
                id: 6,
                employeeName: "Shreya",
                employeeSalary: 20000
            },
        ]
    )

})

app.listen(4000, () =>{
    console.log("App is running on Port No: 4000") 
})
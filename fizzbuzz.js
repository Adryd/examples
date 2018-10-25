/* First iteration
   The first solution that came to mind 
   */
for (let i=0; i <= 100; i++) {
    let toPrint = ""
    let fizz=false,
        buzz=false

    if (i % 3 == 0) {
        fizz = true
    }
    if (i % 5 == 0) {
        buzz = true
    }
    if (!fizz && !buzz) {
        toPrint = i
    }
    toPrint += fizz ? "fizz" : ""
    toPrint += buzz ? "buzz" : ""
    console.log(toPrint)
}

/* Second iteration
   After I realised I could've simplified this by using conditional strings and avoiding the if statements.
   Note that it is close to one of the examples seen on http://wiki.c2.com/?FizzBuzzTest but it was not coppied from there
   */
for (let i=0; i <= 100; i++) {
    let toPrint = ""
    toPrint += i % 3 == 0 ? "fizz" : ""
    toPrint += i % 5 == 0 ? "buzz" : ""
    if (toPrint === "") {
        toPrint = i
    }
    console.log(toPrint)
}

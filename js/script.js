var outputList = document.getElementById("outputList");

for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0)
        outputList.innerHTML+= "<li>FizzBuzz</li>"
    else if (i % 3 == 0)
        outputList.innerHTML+= "<li>Fizz</li>"
    else if (i % 5 == 0)
        outputList.innerHTML+= "<li>Buzz</li>"
    else
        outputList.innerHTML+= "<li>"+i+"</li>"
}

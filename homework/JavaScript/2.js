function fuctions(n)
{
    var a = 1;
    while (n > 1) 
    {
        a = a * n;
        n -= 1;
    }
    return a;
}
console.log(factorial(10));

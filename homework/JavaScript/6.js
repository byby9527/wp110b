
function factor(n)
{
    var array=[];
    var i =2;
    while(n>1)
    {
        if(n%i ==0)
        {
            array.push(i);
            n=n/i;
            continue;
        }
        i=i+1;
    }
    return array;
}
console.log(factor(45));

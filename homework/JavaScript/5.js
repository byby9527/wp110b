function ArrayAvg(n)
{
    var i = 0, sum = 0, len = n.length;
    while (i < len)
    {
        sum = sum + n[i++];
    }
    return sum / len;
}
var n = [1, 2, 3, 4, 5];
var a = ArrayAvg(n);
console.log(a);

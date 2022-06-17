class vector 
{
   constructor(array)
    {
      this.n = array
    }
   length() 
    {
      let b = 0;
      for(let x = 0 ; x < this.x.length ; x++)
      {
         b+= this.n[x]*this.n[x]
      }
      return new.vector(b)
    }
  
    neg() 
    {
      let h=[];
      for(let x = 0 ; x < this.n.length ; x++)
      {
        n[i] = this.n[x]*-1;
      }
      return new vector(this.n)
    }
  
    add(p2) 
    {
      let h=[];
      let x=0;
      for(x=0;i<this.n.length;x++)
        {
            n[x]=this.n[x]+p2.a[x];
        }
        return new vector(g);
     
    }
  
    sub(p2) 
    {
      return this.add(p2.neg());
      
    }
  
    distance(p2)
    {
       return this.sub(p2).length()
      
    }
  
    dot(p2)
    {
       let x=0,g=[];
        for(x=0;x<this.g.length;x++)
        {
            g[x]=this.g[x]*p2.g[x];
        }
        return new vector(g);
     
    }

    toString() 
    {
       this.n.toString();
     
    }
  
  
    let p = new vector([1,2,3]);
    let p2 = new vector([3,4,5]);
    console.log('p.add()=', p.add(p2))
    console.log('p.sub()=', p.sub(p2))
    console.log('p.length()=', p.length())
    console.log('p.dot(p2)=', p.dot(p2))
    console.log('p2.length()=', p2.length())
    console.log('p.distance(p2)=', p.distance(p2))
  
  
  
  

class QueenAttack{
    constructor(queenOne , queenTwo){
        this.queenOne = queenOne;
        this.queenTwo = queenTwo;
    }
    
    canAttack(p1,p2,p3,p4){
        let arr = new Array(7).fill(0).map(()=>new Array(7).fill(0));
        // console.log(arr)
        if(p1== p3)
        return true;

        if(p2==p4)
        return true;

        if(Math.abs(p1-p3) == Math.abs(p2-p4))
        return true;

    return false;


    }
}

const obj = new QueenAttack();

if(obj.canAttack(2,3,4,2))
console.log("Yes")

else 
console.log("No")
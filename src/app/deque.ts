export class Deque {
    public deque:any[];
    constructor(){
        this.deque=new Array();   
    }
    // public getArray():any[]{
    //     return this.deque;
    // }

    public addFirst(element:any):void{
        this.deque.splice(0, 0, element);
    }

    public offerFirst(element:any):boolean{
        this.addFirst(element);
        return true;
    }

    public addLast(element:any):void{
        this.deque.push(element);
    }

    public offerLast(element:any):boolean{
        this.addLast(element);
        return true;
    }

    public removeFirst():any{
        if (this.deque.length==0){
            throw new Error('Empty deque');
        }
        return this.deque.splice(0, 1);
    }

    public pollFirst():any{
        if (this.deque.length==0){
            return null;
        }
        return this.deque.splice(0, 1);
    }

    public removeLast():any{
        if (this.deque.length==0){
            throw new Error('Empty deque');
        }
        return this.deque.pop();
    }

    public pollLast():any{
        if (this.deque.length==0){
            return null;
        }
        return this.deque.pop();
    }

    public getFirst():any{
        if (this.deque.length==0){
            throw new Error('Empty deque');
        }
        return this.deque[0];
    }

    public peekFirst():any{
        if (this.deque.length==0){
            return null;
        }
        return this.deque[0];
    }

    public getLast():any{
        if (this.deque.length==0){
            throw new Error('Empty deque');
        }
        return this.deque[this.deque.length-1];
    }

    public peekLast():any{
        if (this.deque.length==0){
            return null;
        }
        return this.deque[this.deque.length-1];
    }
}

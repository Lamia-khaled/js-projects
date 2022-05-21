export class Stack
{
    items : any;
    count : number;
    constructor()
    {
        this.items = [];
        this.count = 0;
        
    }

    //push function

    push(element)
    {
      this.items[this.count]= element;
      this.count++;
      return this.count - 1;
    }

    //pop function

    pop()
    {
        if(this.count == 0)
        {
            return undefined;
        }
        else
        {
            let deletedItem = this.items[this.count - 1];
            this.count--;
            return deletedItem;
        }

        
    }




}

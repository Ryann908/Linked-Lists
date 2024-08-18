class Node {
    constructor(data = null, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data){
        let node = new Node(data);
        let current;

        if(!this.head){
            this.head = node;
        }else{
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    pop(){
        let current, previous;
        current = this.head;
        while(current.next){
            previous = current
            current = current.next;  
        }
        if(previous){
            previous.next = null
        } else{
            this.head = null;
        }
        this.size--;
    }
    sizes(){
        return this.size;
    }
    heads(){
        return this.head;
    }
    tails(){
        let current;
        current = this.head;
        while(current.next){
            current = current.next;  
        }
        return current;
    }
    at(index){
        if(index > 0 && index > this.size){
            return;
        }

        if(index === 0){
            return this.head;
        }
        let current;
        
        current = this.head;
        let count = 0;

        while(count < index){
            count++;
            current = current.next;
        }
        return current;
    }

    contains(value){
        let current;
        current = this.head;
        if(current.data == value){
            return true;
        }
        while(current.next){
            current = current.next;
            if(current.data == value){
                return true;
            }
        }
        return false
    }
    find(value){
        let current;
        let count = 0;
        current = this.head;
        if(current.data == value){
            return count;
        }
        while(current.next){
            count++;
            current = current.next;
            if(current.data == value){
                return count;
            }
        }
        return null
    }

    toString(){
        let current = this.head;
        let string = "";

        while(current){
            if(current.next){
            string += `( ${current.data} ) -> `;
            } else{
                string += `( ${current.data} ) -> ${null}`;
            }
            current = current.next;
        }
        return string;
    }

    insertAt(data, index){
        // if index is out of range
        if(index > 0 && index > this.size){
            return;
        }

        if(index === 0){
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;
        
        current = this.head;
        let count = 0;

        while(count < index){
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }

    removeAt(index){
        if(index > 0 && index > this.size){
            return;
        }

        let current, previous;
        
        current = this.head;
        let count = 0;

        while(count < index){          
            previous = current;
            count++;
            current = current.next;
        }
        previous.next = current.next;
        this.size--;
    }

    //more
    shift(){
        this.head = this.head.next;
    }
}

const list = new LinkedList();


list.insertLast(100);
list.insertLast(200);
list.insertLast(300);
list.insertLast(400);


console.log(list.toString());









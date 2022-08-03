//  BINARY TREE BFS


class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b'); 
const c= new Node('c'); 
const d = new Node('d'); 
const e = new Node('e'); 
const f = new Node('f'); 
const h = new Node('h'); 


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = h;



const BFS = (root) => {
    const queue = [root];
    const result = [];

    while(queue.length) {
        const temp = queue.shift();
        if (temp.left !== null) {
            queue.push(temp.left);
        }
        if (temp.right !== null) {
            queue.push(temp.right);
        }
        console.log(temp.val)
    }

}

BFS(a)
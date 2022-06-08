import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./Node";
import { NumbersCollection } from "./NumbersCollection copy";

console.log(`Server's running`)

const charactersCollection = new CharactersCollection('Xayn')
charactersCollection.sort();
console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(300);
linkedList.add(20);
linkedList.add(-100);
linkedList.add(0);
linkedList.add(4);

linkedList.sort()
linkedList.print();;

const numbersCollection = new NumbersCollection([65,-1,45,300,-20])
numbersCollection.sort()
console.log(numbersCollection)
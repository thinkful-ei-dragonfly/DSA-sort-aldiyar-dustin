/* eslint-disable strict */
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;

      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not Found');
      return;
    }
    prevNode.next = currNode.next;
  }

  insertBefore(item, afterKey) {
    let after = this.find(afterKey);
    if (this.head === after) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== after) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, after);
    }
  }

  insertAfter(item, beforeKey) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      let before = this.find(beforeKey);
      let current = before.next;
      while (tempNode.next !== before) {
        tempNode = tempNode.next;
      }
      before.next = new _Node(item, current);
    }
  }

  insertAt(item, position) {
    if (this.head === null) {
      this.find.insertFirst(item);
    } else {
      let tempNode = this.head;
      for (let i = 0; i < position - 1; i++) {
        tempNode = tempNode.next;
      }
      this.insertBefore(item, tempNode.value);
    }
  }


}

module.exports = LinkedList;

function main() {
  let SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbucks');
  SLL.insertLast('Tauhida');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('kat', 3);
  SLL.remove('Tauhida');



  function display(list) {
    while (list.head !== null) {
      console.log(list.head.value);
      list.head = list.head.next;
    }
  }

  // display(SLL);

  function size(list) {
    let counter = 0;
    while (list.head !== null) {
      counter++;
      list.head = list.head.next;
    }
    console.log(counter);
  }

  // size(SLL);

  function isEmpty(list) {
    if (list.head === null) {
      return true;
    } else {
      return false;
    }
  }

  // console.log(isEmpty(SLL));

  function findPrevious(node, list) {


    let currNode = list.head;
    if (!list.head) {
      return null;
    }

    while (currNode.next.value !== node) {
      if (currNode.next === null) {
        return null;

      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  // console.log(findPrevious('Starbucks', SLL));

  function findLast(list) {
    let currNode = list.head;
    if (!list.head) {
      return null;
    }

    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // console.log(findLast(SLL));

  function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
      let newNode = current;
      while (newNode.next !== null) {
        if (newNode.next.value === current.value) {
          newNode.next = newNode.next.next;
        } else {
          newNode = newNode.next;
        }
      }
      current = current.next;
    }
  }

  // WhatDoesThisProgramDo(SLL);
  // console.log(display(SLL));

  function reverser(list) {
    if (list == null) {
      return null;
    }

    if (list.next == null) {
      return list;
    }

    const secondElement = list.next;
    list.next = null;
    const reverseRest = reverer(secondElement);
    secondElement.next = list;
    return reverseRest;
  }
  // console.log(reverser(SLL));

  // function get3rdItem(list) {
  //   let currNode = list.head;
  //   while (currNode.next < 3) {
  //     currNode = list.head.next;
  //   }
  //   return currNode;
  // }

  function thirdFromEnd(lst) {
    let thirdEnd = lst.head;
    let end = lst.head.next.next.next;
    while(end !== null) {
      thirdEnd = thirdEnd.next;
      end = end.next;
    }
    return thirdEnd.value;
  };
  
  // console.log(get3rdItem(SLL));
  // console.log(thirdFromEnd(SLL));

  function middle(list) {
    let end = list.head;
    let middle = list.head;

    while (end.next !== null && end.next.next !== null) {
      end = end.next.next;
      middle = middle.next;
    }
    return middle.value;
  }

  // console.log(middle(SLL));

  let CycleList = new LinkedList();

  CycleList.insertFirst('first');
  CycleList.insertLast('second');
  CycleList.head.next.next = CycleList.head;

  function cycleList(list) {
    let fast = list.head;
    let slow = list.head;
    while (slow !== null && fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        console.log('found cycle');
        return;
      }
    }
    console.log('no cycle found');
  }

  console.log(cycleList(CycleList));
}






console.log(main());
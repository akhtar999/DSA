//  Linked List---
// (head)3--> 6--> 4--> 8--> 11(tail) --> null
// last item points to null & phase used null terminated list

{
  head: {value: 3,
         next: {value : 6,
                next:{value : 4,
                      next: {value: 8,
                           next: {value:11,
                                  next: null} // tail
                        }
                    }
                }
            }
}

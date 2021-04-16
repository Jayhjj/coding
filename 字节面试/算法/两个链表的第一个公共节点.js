var getIntersectionNode = function(headA, headB) {
    var hA=headA,hB=headB;
    while(hA!==hB){
        hA=hA==null?headB:hA.next;
        hB=hB==null?headA:hB.next;
    }
    return hA;
};
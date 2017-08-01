class List {
    constructor(content) {
        this.content = content || [];
        this.length = this.content.length;
    }
    arraysAreEqual(list1, list2) {
        return list1.filter((element, index) => element === list2[index]).length === list1.length;
    }
    isSublist(list1) {
        for (let i=0; i <= list1.content.length - this.content.length; i++) {
            if (this.arraysAreEqual(this.content, list1.content.slice(i))) {
                return true;
            }
        }
        return false;
    }
    compare(anotherList) {
        if (anotherList.length === this.length) {
            if (!this.arraysAreEqual(this.content, anotherList.content)) return 'UNEQUAL';
            return 'EQUAL';
        } else if (anotherList.length > this.length){
            if (this.isSublist(anotherList))
                return 'SUBLIST';
            return 'UNEQUAL';
        }
        else { // (anotherList.length < this.length)
            if (anotherList.isSublist(this))
                return 'SUPERLIST';
            return 'UNEQUAL';
        }
    }
}

export default List;

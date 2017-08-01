class List {
    constructor(content) {
        this.content = content || [];
        this.length = this.content.length;
    }
    arraysAreEqual(list1, list2) {
        return list1.filter((element, index) => element === list2[index]).length === list1.length;
    }
    compare(anotherList) {
        if (anotherList.length === this.length) {
            if (!this.arraysAreEqual(this.content, anotherList.content)) return 'UNEQUAL';
            return 'EQUAL';
        } else if (anotherList.length > this.length){
            for (let i=0; i <= anotherList.content.length - this.content.length; i++) {
                if (this.arraysAreEqual(this.content, anotherList.content.slice(i))) {
                    return 'SUBLIST';
                }
            }
            return 'UNEQUAL';

        }
        else { // (anotherList.length < this.length)
            for (let i=0; i <= this.content.length - anotherList.content.length; i++) {
                if (this.arraysAreEqual(anotherList.content, this.content.slice(i))) {
                    return 'SUPERLIST';
                }
            }
            return 'UNEQUAL';
        }
    }
}

export default List;

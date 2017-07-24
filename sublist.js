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
            if (this.arraysAreEqual(this.content, anotherList.content))Q{
                return 'SUBLIST';
            }
            else {
                return 'UNEQUAL';
            }
        }
        else {
            return 'SUPERLIST';
        }
    }
}

export default List;

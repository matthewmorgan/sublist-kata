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
        const subList = this.isSublist(anotherList);
        const superList = anotherList.isSublist(this);
        if (subList && superList) return "EQUAL";
        if (subList) return "SUBLIST";
        if (superList) return "SUPERLIST";

        return 'UNEQUAL';
    }
}

export default List;

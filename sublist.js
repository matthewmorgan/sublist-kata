class List {
    constructor(content) {
        this.content = content || [];
        this.length = this.content.length;
    }
    compare(anotherList) {
        if (anotherList.length === this.length) {
            return 'EQUAL';
        } else if (anotherList.length > this.length){
            return 'SUBLIST';
        }
        else {
            return 'SUPERLIST';
        }
    }
}

export default List;

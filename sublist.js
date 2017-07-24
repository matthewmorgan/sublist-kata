class List {
    constructor(content) {
        this.content = content || [];
        this.length = this.content.length;
    }
    compare(anotherList) {
        if (anotherList.length > 0){
            return 'SUBLIST';
        }
        else if (this.length > 0) {
            return 'SUPERLIST';
        }
        return 'EQUAL';

    }
}

export default List;

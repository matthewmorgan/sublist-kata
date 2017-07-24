class List {
    constructor(content) {
        this.content = content || [];
        this.length = this.content.length;
    }
    compare(anotherList) {
        if (anotherList.length > 0){
            return 'SUBLIST';
        }
        return 'EQUAL';

    }
}

export default List;

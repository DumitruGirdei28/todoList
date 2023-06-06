import Category from "./Category";
class CategoryDecorator extends Category {
    constructor(category) {
        super(category.name);
        this.category = category;
        this.labels = [];
    }

    addLabel(label) {
        this.labels.push(label);
    }

    removeLabel(label) {
        const index = this.labels.indexOf(label);
        if (index !== -1) {
            this.labels.splice(index, 1);
        }
    }
}
export default CategoryDecorator
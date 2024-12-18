class BaseModel {
    constructor() {
        this.createdAt = Date.now();
    }
    validate() {
        return true;
    }
}
export default BaseModel;

// class Data {
//     static getInstance(){
//         this._instance = this._instance || new Data();
//         return this._instance;
//     }

//     //behavior
// }

// Data.getInstance();

let instance = null;

const data = (function() {
    class Data {
        //behavior
    }

    const getInstance = () => {
        instalnce = instance || new Data();
        return instance;
    };

    return {
        getInstance,
    }
}());

class DataFactory {
    createData() {
        return data.getInstance();
    }
}
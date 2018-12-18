class Store{
    constructor(state){
        this.state = state;
    }

    dispatch(reducer){
        this.state = reducer(this.state);

        render(this.state);//eslint-disable-line
    }
}

export default Store;
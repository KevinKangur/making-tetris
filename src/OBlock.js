class OBlock {

    positionX;
    positionY = -2;
    
    class = 'o-block';
    
    shape = [
        [0, 0]
        [0, 1]
        [1, 0]
        [1, 1]
    ];

    positionY = -1;

    constructor ( x ) {
        this.positionX = x;
    }

    isOverlapingCell ( id ) {
        this.shape.forEach( el => {
            if ( id == (el[0] + this.positionY) + '_' + (el[1] + this.positionX) ) {
                return true;
            }
        });

        return false
    }
}

export { OBlock }
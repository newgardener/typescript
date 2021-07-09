{
    /**
     * Type Inference
     */

    let text = 'hello';
    function print(message = 'hello') {
        console.log(message);
    }
    print('jeongwon');
    
    function add(x: number, y: number): number {
        return x + y;
    }

    const result: number = add(1, 2);
    
}
{
    // JavaScript 
    /**
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array
     */

    // number
    const num: number = -6;

    // string
    const str: string = 'hello';

    // boolean
    const boal: boolean = false;

    // undefined
    let name: undefined; // 💩
    let age: number | undefined;
    age = undefined;
    age = 1;

    function find(): number | undefined {
        return undefined;
    }

    // null
    let person: null; // 💩
    let person2: string | null;

    // unknown 💩 -> type이 없는 javascript와 연동되어 있기 때문에 존재 
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hell');
        return;
    }
    let unusable: void = undefined; // 💩

    // never (return할 값이 절대 없다!)
    function throwError(message: string): never {
        // message -> server(log)
        throw new Error(message);
        while (true) {}
    }
    let nerverEnding: never; // 💩

    // object
    let obj: object; // 💩
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({name: 'ellie'});
    acceptSomeObject({animal: 'dog'});
}


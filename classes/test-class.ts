import {Property} from './test-decorator';

export class TestClass {
    public hash: {[key: string]: any} = {};

    @Property()
    public myProperty: string;

    @Property('other')
    public otherProperty: string;

    constructor(myProperty: string) {
        this.myProperty = myProperty;
    }

    public get(key: string): any {
        return this.hash[key];
    }

    public set(key: string, value: any): void {
        this.hash[key] = value;
    }

    public getHash(): {[key: string]: any} {
        return this.hash;
    }
}
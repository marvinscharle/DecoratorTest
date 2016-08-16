import {Property} from './test-decorator';

export class TestClass {
    @Property()
    public myProperty: string;

    @Property('other')
    public otherProperty: string;

    constructor(myProperty: string) {
        this.myProperty = myProperty;
    }
}
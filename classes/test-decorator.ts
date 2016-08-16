import {TestClass} from './test-class';

function  propertyAccessor (target: Object, propertyKey: string, hashKey?: string) {
    Object.defineProperty(target, propertyKey, {
        get: function () {
            return (<TestClass>this).hash[hashKey||propertyKey];
        },
        set: function (newVal: any) {
            (<TestClass>this).hash[hashKey||propertyKey] = newVal;
        }
    });
}

function propertyAccessorFactory (hashKey?: string): PropertyDecorator {
    return (target: Object, propertyKey: string | symbol) => {
        propertyAccessor(target, propertyKey.toString(), hashKey);
    }
}

export const Property = propertyAccessorFactory;
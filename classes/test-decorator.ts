let propertyAccessor: PropertyDecorator = (target: Object, propertyKey: string) => {
    console.log("Defining Property", propertyKey, "for", target);
    Object.defineProperty(target, propertyKey, {
        get: function () {
            console.log("Read Access to", propertyKey);
        },
        set: function (newVal: any) {
            console.log("Write Access to", propertyKey, "setting new Val to", newVal);
        }
    });
};

function propertyAccessorFactory (hashKey?: string): PropertyDecorator {
    return (target: Object, propertyKey: string | symbol) => {
        propertyAccessor(target, propertyKey);
        console.log("Hash Key:", hashKey||propertyKey);
    }
}

export const Property = propertyAccessorFactory;
let propertyAccessor: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
    console.log("Hello", target, propertyKey);
};

function propertyAccessorFactory (hashKey?: string): PropertyDecorator {
    return (target: Object, propertyKey: string | symbol) => {
        propertyAccessor(target, propertyKey);
        console.log("Hash Key:", hashKey||propertyKey);
    }
}

export const Property = propertyAccessorFactory;
export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
  return updatedObj;
};

export function transformObjectId(obj) {
  if (!obj || typeof obj !== "object") {
    throw new Error("Input must be a valid object.");
  }

  if (!("_id" in obj)) {
    throw new Error("Input object must have an _id property.");
  }

  const { _id, ...rest } = obj;
  return { id: _id.toString(), ...rest };
}

// Example usage:
/* const inputObject = {
  _id: ObjectId("605dc69f12a31a6dc54bbd95"), // Assuming ObjectId is defined
  name: "John",
  age: 30,
  // other properties...
};

const transformedObject = transformObjectId(inputObject);
console.log(transformedObject);
 */

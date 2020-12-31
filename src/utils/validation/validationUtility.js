import { NOT_EMPTY, NOT_NEGATIVE, EMAIL } from "./validationTypes";
export function getValidationErrors (dataObject, dataRules) {
  let resultingObject = {};
  for (const field in dataRules) {
    const errors = dataRules[field].reduce((acc, el) => {
      const errorMessage = validationOperations[el](dataObject[field]);
      return errorMessage.length ? [...acc, errorMessage] : acc;
    },[]);
    resultingObject[field] = errors.join('; ');
  }
  return resultingObject;
}

const validationOperations = {
  [NOT_EMPTY]: (dataEl) => getEmptyError(dataEl),
  [NOT_NEGATIVE]: (dataEl) => getNotNegativeError(dataEl),
  [EMAIL]: (dataEl) => getEmailError(dataEl)
};

function getEmptyError (value) {
  return value.trim().length > 0 ? '' : 'This field is required';
}
function getNotNegativeError (value) {
  return +value >= 0 ? '' : 'Negative numbers not allowed here';
}
function getEmailError (value) {
  return value.includes('@') ? '' : 'Email is not valid';
}

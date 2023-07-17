export function checkPayload(oldValue, newValue) {
  const changeFields = [];
  const payload = {};
  const keys = Object.keys(oldValue);
  for (const key of keys) {
    if (newValue[key] !== oldValue[key]) {
      changeFields.push(key);
    }
  }
  for (const field of changeFields) {
    payload[field] = newValue[field];
  }
  return payload;
}

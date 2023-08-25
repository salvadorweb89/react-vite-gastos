export const generateId = () => {
  const rand = Math.random().toString(36).substr(2);
  const time = Date.now().toString(36);

  return rand + time;
}
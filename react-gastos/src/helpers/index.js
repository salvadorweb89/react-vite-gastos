export const generateId = () => {
  const rand = Math.random().toString(36).substr(2);
  const time = Date.now().toString(36);

  return rand + time;
}


export const formatDate = timestamp => {
  const date = new Date(timestamp);
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }
  return date.toLocaleDateString('es-ES', dateOptions);
}
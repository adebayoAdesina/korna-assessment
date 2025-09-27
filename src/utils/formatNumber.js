export const formatNumber = (num) => {
  if (num < 1000) return num.toString();

  const units = ["", "k", "M", "B", "T"];
  let index = 0;

  while (num >= 1000 && index < units.length - 1) {
    num /= 1000;
    index++;
  }
  const formatted =
    num % 1 === 0 ? num.toFixed(0) : num.toFixed(1);

  return formatted + units[index];
}

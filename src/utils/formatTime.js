export const formatTime = (createdDate) => {
  const date = new Date(createdDate);
  const now = new Date();

  const diffMs = now - date; // difference in milliseconds
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // For Less than 7 days ago
  if (diffDays < 7) {
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    return `${diffDays}d ago`;
  }

  // Formatting options
  const optionsSameYear = { month: "long", day: "numeric" };
  const optionsDifferentYear = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  // If Same year
  if (date.getFullYear() === now.getFullYear()) {
    return date.toLocaleDateString(undefined, optionsSameYear);
  }

  // If Different year
  return date.toLocaleDateString(undefined, optionsDifferentYear);
};

// Function to format the date as day/month/year
export const formatDate = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0"); // Ensure 2 digits
  const month = String(d.getMonth() + 1).padStart(2, "0"); // Month is 0-based, so we add 1
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};


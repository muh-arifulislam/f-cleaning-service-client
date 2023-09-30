import { useState, useEffect } from "react";

export default function useFormattedDate(dateString) {
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
      const year = date.getFullYear();

      // Ensure leading zeros for single-digit days and months
      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;

      // Format the date as day-month-year
      return `${formattedDay}-${formattedMonth}-${year}`;
    };

    if (dateString) {
      const formatted = formatDate(dateString);
      setFormattedDate(formatted);
    }
  }, [dateString]);

  return formattedDate;
}

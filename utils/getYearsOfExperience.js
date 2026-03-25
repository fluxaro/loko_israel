/**
 * Calculates years of experience dynamically from a start year.
 * @param {number} startYear - The year experience began (e.g. 2024)
 * @returns {number} - Full years of experience
 */
export function getYearsOfExperience(startYear = 2024) {
  const now = new Date();
  const years = now.getFullYear() - startYear;
  return years < 1 ? 1 : years;
}

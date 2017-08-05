function lineupStudents(students) {
  return students
    .trim()
    .split(/\s+/)
    .sort((a, b) => b.length - a.length || b.localeCompare(a));
}
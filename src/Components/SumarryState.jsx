function SummaryStats({ total, inProgress, completed, totalHours }) {
  return (
    <div className="summary">
      <div className="stat"><h3>{total}</h3><p>Total Subjects</p></div>
      <div className="stat"><h3>{inProgress}</h3><p>In Progress</p></div>
      <div className="stat"><h3>{completed}</h3><p>Completed</p></div>
      <div className="stat"><h3>{totalHours}</h3><p>Total Hours</p></div>
    </div>
  );
}

export default SummaryStats;
 
 export default function EmployeeCard({ employee, onAdd, onRemove, isAdded, isInTeamList }) {
    return (
      <div class="employee-card">
        <h4>{employee.first_name} {employee.last_name}</h4>
        <span>{employee.age}</span>
        {!isInTeamList && !isAdded && <button class=".button" onClick={onAdd}>ADD</button>}
        {isInTeamList && isAdded && <button class=".button" onClick={onRemove}>REMOVE</button>}
      </div>
    );
  }
export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) =>{
     
      const handleDelete = () =>{
          if(window.confirm('Eliminar tarea')){
             cleanTasks()
          }
      }

      return(
      <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
           <div className="form-checke form-switch"> 
            <input  className="form-check-input"
            type="checkbox" 
            checked= {isChecked}
            onChange={e => setShowCompleted(e.target.checked)}/>
            <label>Show Task Done</label>
            </div> 
            <button onClick={handleDelete} className="btn btn-danger btn-sm">Delete</button>
      </div>
      )
}

    
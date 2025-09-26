import React from 'react';

const TaskStatus = ({ tasks ,onComplete}) => {
 
    return (
        <div className="p-5 mt-14  rounded shadow max-w-md mx-auto">
          <h2 className="font-bold">Task Status</h2>
          {
             tasks.length === 0 ? (
          <p>Select a ticket to add to Task Status</p> 
        
        ) : (
    
        <ul >
          {tasks.map((task) => (
            <li key={task.id} className="mb-2 mt-4 justify-between   p-4 rounded bg-white" 
            >
              <span>{task.title}</span>
              
              <button
                className="btn btn-sm bg-green-500 text-white px-3 py-1 rounded"
                onClick={() => onComplete(task.id)}
              >
                Complete
              </button>
            </li>
          ))}
        </ul>
        )
    }
   
      </div>
  );
};

export default TaskStatus;

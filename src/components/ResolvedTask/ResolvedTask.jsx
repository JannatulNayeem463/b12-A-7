import React from 'react';

const ResolvedTask = ({ resolvedTasks,onComplete }) => {
  if (!resolvedTasks || resolvedTasks.length === 0) {
    return (
      <div className="text-center rounded shadow max-w-md mx-auto mt-8">
       <h2 className=" font-bold text-gray-400"> Resolved Tickets</h2>
       <p>No resolved tasks yet.</p> 
      
      </div>
  
    );
  }
  

  return (
    <div className="mt-10 p-4  mx-auto">
      <h2 className="text-xl font-bold mb-3">Resolved Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {resolvedTasks.map((task) => (
          <div key={task.id} className="p-4 bg-white shadow-md rounded flex">
            <h3 className="font-bold text-lg">{task.title}</h3>
            <div className="mt-2 text-sm text-gray-500">
              ID: {task.id} 
            </div>
            <button
                className="btn btn-sm bg-green-500 text-white px-3 py-1 rounded"
                onClick={() => onComplete(task.id)}
              >
                Complete
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResolvedTask;





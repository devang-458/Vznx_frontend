<<<<<<< HEAD
import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import AssigneeDropdown from '../AssigneeDropdown';

const TaskCard = ({ task, dragHandleProps, users, onAssigneeChange }) => {
  const { user: currentUser } = useContext(UserContext);

  return (
    <div className="bg-white rounded-lg shadow-sm p-3 mb-3 border border-gray-200 flex items-start">
      <div {...dragHandleProps} className="cursor-grab pt-1 pr-2 text-gray-400 hover:text-gray-600">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 4H3V6H5V4Z" fill="currentColor" />
          <path d="M5 7H3V9H5V7Z" fill="currentColor" />
          <path d="M5 10H3V12H5V10Z" fill="currentColor" />
          <path d="M9 4H7V6H9V4Z" fill="currentColor" />
          <path d="M9 7H7V9H9V7Z" fill="currentColor" />
          <path d="M9 10H7V12H9V10Z" fill="currentColor" />
          <path d="M13 4H11V6H13V4Z" fill="currentColor" />
          <path d="M13 7H11V9H13V7Z" fill="currentColor" />
          <path d="M13 10H11V12H13V10Z" fill="currentColor" />
        </svg>
      </div>
      <div className="w-full">
        <h4 className="font-semibold text-sm text-gray-800">{task.title}</h4>
        <p className="text-xs text-gray-600 mt-1">{task.description}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            task.priority === 'High' ? 'bg-red-100 text-red-700' :
            task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
            'bg-green-100 text-green-700'
          }`}>
            {task.priority}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          {Array.isArray(task.assignedTo) && task.assignedTo.length > 0 ? (
            task.assignedTo.map(assignedUserId => {
              const assignedUser = users?.find(u => u._id === assignedUserId);
              return assignedUser ? (
                <div key={assignedUser._id} className="flex items-center">
                  <img
                    src={assignedUser.profileImageUrl || `https://ui-avatars.com/api/?name=${assignedUser.name}&background=random`}
                    alt={assignedUser.name}
                    className="w-5 h-5 rounded-full mr-1"
                  />
                  <span className="text-xs text-gray-700">
                    {assignedUser._id === currentUser?._id ? 'You' : assignedUser.name}
                  </span>
                </div>
              ) : null;
            })
          ) : (
            <span className="text-xs text-gray-500">Unassigned</span>
          )}
        </div>
        {currentUser?.role === 'admin' && (
          <AssigneeDropdown users={users} task={task} onAssigneeChange={onAssigneeChange} />
=======
import React from 'react';
import { IoCalendarOutline, IoPersonOutline, IoCheckmarkCircle } from 'react-icons/io5';
import moment from 'moment';

const TaskCard = ({ task, onClick }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500';
      case 'In Progress':
        return 'bg-cyan-500';
      case 'Pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const progress = task.progress || 0;
  const completedTodos = task.completedTodoCount || 0;
  const totalTodos = task.todoChecklist?.length || 0;

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 cursor-pointer border border-gray-200"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-lg text-gray-800 flex-1 pr-2">
          {task.title}
        </h3>
        <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {task.description}
      </p>

      {/* Progress Bar */}
      {totalTodos > 0 && (
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-600 font-medium">Progress</span>
            <span className="text-xs font-semibold text-gray-700">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-300 ${getStatusColor(task.status)}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center gap-1 mt-1">
            <IoCheckmarkCircle className="text-gray-500 text-xs" />
            <span className="text-xs text-gray-500">
              {completedTodos} of {totalTodos} tasks completed
            </span>
          </div>
        </div>
      )}

      {/* Status Badge */}
      <div className="mb-3">
        <span className={`inline-flex items-center text-xs px-3 py-1 rounded-full text-white ${getStatusColor(task.status)}`}>
          {task.status}
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-1">
          <IoCalendarOutline />
          <span>Due: {moment(task.dueDate).format('MMM DD, YYYY')}</span>
        </div>
        {task.assignedTo && task.assignedTo.length > 0 && (
          <div className="flex items-center gap-1">
            <IoPersonOutline />
            <span>{task.assignedTo.length} assigned</span>
          </div>
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
        )}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default TaskCard;
=======
export default TaskCard;
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f

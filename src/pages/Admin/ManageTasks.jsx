import React, { useContext, useEffect, useState } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
<<<<<<< HEAD
import TaskListTable from '../../components/TaskListTable';
=======
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
import { useUserAuth } from '../../hooks/useUserAuth';
import { UserContext } from '../../context/userContext';
import axiosInstance from '../../utils/axiosinstance';
import { API_PATHS } from '../../utils/apiPaths';
<<<<<<< HEAD
import { STATUS_DATA } from '../../utils/data';
import { IoAddCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import Button from '../../components/layouts/Button';
import useFetchData from '../../hooks/useFetchData';

const ManageTasks = () => {

  useUserAuth();

  const navigate = useNavigate();

  const { user } = useContext(UserContext);



  const { data: tasksData, loading, error, fetchData: refetchTasks } = useFetchData(

    API_PATHS.TASKS.GET_ALL_TASKS,

    { initialData: [] }

  );



  const tasks = Array.isArray(tasksData) ? tasksData : tasksData?.tasks || [];

  // const [loading, setLoading] = useState(true); // Removed

    const [statusFilter, setStatusFilter] = useState('');

    const [searchTerm, setSearchTerm] = useState('');

    const [showMyTasksOnly, setShowMyTasksOnly] = useState(false);



  // useEffect(() => { // Removed

  //   fetchTasks();

  // }, []);



  // const fetchTasks = async () => { // Removed

  //   try {

  //     setLoading(true);

  //     const response = await axiosInstance.get(API_PATHS.TASKS.GET_ALL_TASKS);

  //     // Backend returns { tasks, statusSummary } object

  //     const tasksArray = response.data?.tasks || response.data || [];

  //     setTasks(Array.isArray(tasksArray) ? tasksArray : []);

  //   } catch (error) {

  //     console.error('Error fetching tasks:', error);

  //     setTasks([]);

  //   } finally {

  //     setLoading(false);

  //   }

  // };



  const handleDeleteTask = async (taskId) => {

    if (window.confirm('Are you sure you want to delete this task?')) {

      try {

        await axiosInstance.delete(API_PATHS.TASKS.DELETE_TASK(taskId));

        alert('Task deleted successfully!');

        refetchTasks(); // Call refetchTasks from the hook

      } catch (error) {

        console.error('Error deleting task:', error);

        alert('Failed to delete task');

      }

    }

  };

  const handleMyTasksOnlyToggle = () => {
    setShowMyTasksOnly(prev => !prev);
    console.log("My Tasks Only toggled:", !showMyTasksOnly);
  };

  // Filter tasks based on search term and status
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || task.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout activeMenu="Manage Tasks">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Manage Tasks</h1>
            {user?.role === 'admin' && (
              <Button
                onClick={() => navigate('/admin/create-task')}
                variant="primary"
                className="flex items-center gap-2"
              >
                <IoAddCircle /> Create Task
              </Button>
            )}
          </div>

          {/* Filters Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <Input
                type="text"
                placeholder="Search tasks by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field flex-1 "
              />

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="input-field max-w-xs input-box"
              >
                <option value="">All Tasks</option>
                {STATUS_DATA.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
              fizap
            </div>
          </div>

          {/* Tasks Table */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-gray-500">Loading tasks...</p>
            </div>
          ) : (
            <TaskListTable
              tableData={filteredTasks}
              onDelete={user?.role === 'admin' ? handleDeleteTask : undefined}
              showActions={true}
              userRole={user?.role}
            />
          )}
        </div>
=======
import { useNavigate } from 'react-router-dom';
import { IoAddCircle, IoFilter, IoDownload } from 'react-icons/io5';
import { STATUS_DATA } from '../../utils/data';
import TaskListTable from '../../components/TaskListTable';
import InfoCard from '../../components/Cards/InfoCard';
import { 
  IoStatsChart, 
  IoListCircle, 
  IoHourglass, 
  IoCheckmarkCircle 
} from 'react-icons/io5';
import { addThousandsSeparator } from '../../utils/helper';

const ManageTasks = () => {
  useUserAuth();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusSummary, setStatusSummary] = useState({
    all: 0,
    pendingTasks: 0,
    inProgressTasks: 0,
    completedTasks: 0
  });

  const fetchTasks = async (status = '') => {
    setLoading(true);
    try {
      const url = status 
        ? `${API_PATHS.TASKS.GET_ALL_TASKS}?status=${status}` 
        : API_PATHS.TASKS.GET_ALL_TASKS;
      
      const response = await axiosInstance.get(url);
      
      setTasks(response.data.tasks || []);
      setFilteredTasks(response.data.tasks || []);
      setStatusSummary(response.data.statusSummary || statusSummary);
    } catch (error) {
      console.error(' Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchTasks(statusFilter);
    }
  }, [user]);

  const handleFilterChange = (status) => {
    setStatusFilter(status);
    fetchTasks(status);
  };

  const handleExportTasks = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.REPORTS.EXPORT_TASKS, {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'tasks_report.xlsx');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error(' Error exporting tasks:', error);
      alert('Failed to export tasks');
    }
  };

  const handleCreateTask = () => {
    navigate('/admin/create-task');
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    
    try {
      await axiosInstance.delete(API_PATHS.TASKS.DELETE_TASK(taskId));
      fetchTasks(statusFilter);
      alert('Task deleted successfully');
    } catch (error) {
      console.error(' Error deleting task:', error);
      alert('Failed to delete task');
    }
  };

  return (
    <DashboardLayout activeMenu="Manage Tasks">
      <div className="card my-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Manage Tasks</h2>
            <p className="text-sm text-gray-500 mt-1">
              View, filter, and manage all tasks
            </p>
          </div>
          
          <div className="flex gap-3">
            {user?.role === 'admin' && (
              <>
                <button
                  onClick={handleExportTasks}
                  className="btn-secondary flex items-center gap-2"
                >
                  <IoDownload /> Export
                </button>
                <button
                  onClick={handleCreateTask}
                  className="btn-primary flex items-center gap-2"
                >
                  <IoAddCircle /> Create Task
                </button>
              </>
            )}
          </div>
        </div>

        {/* Status Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <InfoCard
            icon={<IoStatsChart />}
            label="Total Tasks"
            value={addThousandsSeparator(statusSummary.all)}
            color="bg-blue-500"
          />
          <InfoCard
            icon={<IoListCircle />}
            label="Pending"
            value={addThousandsSeparator(statusSummary.pendingTasks)}
            color="bg-yellow-500"
          />
          <InfoCard
            icon={<IoHourglass />}
            label="In Progress"
            value={addThousandsSeparator(statusSummary.inProgressTasks)}
            color="bg-cyan-500"
          />
          <InfoCard
            icon={<IoCheckmarkCircle />}
            label="Completed"
            value={addThousandsSeparator(statusSummary.completedTasks)}
            color="bg-green-500"
          />
        </div>

        {/* Filter Section */}
        <div className="flex items-center gap-3 mb-4">
          <IoFilter className="text-gray-500 text-xl" />
          <span className="text-sm font-medium text-gray-700">Filter by Status:</span>
          <select
            value={statusFilter}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="input-field max-w-xs"
          >
            <option value="">All Tasks</option>
            {STATUS_DATA.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>

        {/* Tasks Table */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Loading tasks...</p>
          </div>
        ) : (
          <TaskListTable 
            tableData={filteredTasks} 
            onDelete={user?.role === 'admin' ? handleDeleteTask : undefined}
            showActions={true}
          />
        )}
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
      </div>
    </DashboardLayout>
  );
};

<<<<<<< HEAD
export default ManageTasks;
=======
export default ManageTasks;
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f

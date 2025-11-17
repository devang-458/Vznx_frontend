import {
    LuLayoutDashboard,
    LuUsers,
    LuClipboardCheck,
    LuSquarePlus,
<<<<<<< HEAD
    LuLogOut,
    LuTrendingUp,
    LuZap,
    LuSettings,
    LuFile,
    LuProjector,
    LuFileArchive,
    LuFileBadge
} from "react-icons/lu"
import { GiSmart } from "react-icons/gi"
=======
    LuLogOut
} from "react-icons/lu"
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f

export const SIDE_MENU_DATA = [
    {
        id: "01",
        label: "Dashboard",
        icons: LuLayoutDashboard,
        path: '/admin/dashboard'
    },
    {
        id: "02",
<<<<<<< HEAD
        label: "Manage Project",
        icons: LuFileBadge,
        path: '/admin/projects'
    },
    {
        id: "03",
=======
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
        label: "Manage Tasks",
        icons: LuClipboardCheck,
        path: '/admin/tasks'
    },
    {
<<<<<<< HEAD
        id: "04",
        label: "Create Task",
        icons: LuSquarePlus,
        path: '/admin/create-task'
    },
    {
        id: "05",
        label: "Create Project",
        icons: LuFile,
        path: '/admin/create-project'
    },
    {
        id: "06",
        label: "Task Insights",
        icons: LuTrendingUp,
        path: '/admin/insights'
    },
    {
        id: "07",
        label: "Bulk Operations",
        icons: LuZap,
        path: '/admin/bulk-operations'
    },
    {
        id: "08",
=======
        id: "03",
        label: "Create Task",
        icons: LuSquarePlus,
        path: '/admin/create-task'
    }, {
        id: "04",
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
        label: "Team Members",
        icons: LuUsers,
        path: '/admin/users'
    },
    {
<<<<<<< HEAD
        id: "09",
        label: "Ai-Dashboard",
        icons: GiSmart,
        path: '/admin/ai-dashboard'
    },
    {
        id: "10",
        label: "Setting",
        icons: LuSettings,
        path: '/admin/setting'
    },
    {
        id: "11",
=======
        id: "05",
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
        label: "Logout",
        icons: LuLogOut,
        path: 'logout'
    }
]

export const SIDE_MENU_USER_DATA = [
    {
        id: "01",
        label: "Dashboard",
        icons: LuLayoutDashboard,
        path: '/user/dashboard'
    },
    {
        id: "02",
        label: "Manage Tasks",
        icons: LuClipboardCheck,
        path: '/user/tasks'
    },
    {
        id: "03",
<<<<<<< HEAD
        label: "Manage Project",
        icons: LuFileBadge,
        path: '/user/projects'
    },
    {
        id: "04",
        label: "Create Task",
        icons: LuSquarePlus,
        path: '/user/create-task'
    },
    {
        id: "05",
=======
        label: "Create Task",
        icons: LuSquarePlus,
        path: '/user/create-task'
    }, {
        id: "04",
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
        label: "Team Members",
        icons: LuUsers,
        path: '/user/users'
    },
<<<<<<< HEAD

    {
        id: "06",
        label: "Setting",
        icons: LuSettings,
        path: '/user/setting'
    },
    {
        id: "07",
        label: "Logout",
        icons: LuLogOut,
        path: 'logout'
    }
=======
    {
        id: "05",
        label: "Logout",
        icons: LuLogOut,
        path: 'logout'
    },
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f

]

export const PRIORITY_DATA = [
    { label: "Low", value: "Low" },
    { label: "Medium", value: "Medium" },
    { label: "High", value: "High" },
]


export const STATUS_DATA = [
    { label: "Pending", value: "Pending" },
    { label: "In Progress", value: "In Progress" },
    { label: "Completed", value: "Completed" },
<<<<<<< HEAD
]

=======
]
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f

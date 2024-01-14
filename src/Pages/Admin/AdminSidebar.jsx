import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,

  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,

    PowerIcon,
  } from "@heroicons/react/24/solid";
  import { MdEditDocument } from 'react-icons/md';
import { Link } from "react-router-dom";
   
  export function AdminSidebar() {

    const handleLogout = ()=>{
      // delete user

      // navigate to home
      
    }
    return (
      <Card className=" h-screen rounded-none w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" className=" text-dtbi-blue" textGradient>
            DTBI Admin
          </Typography>
        </div>
        <List>

          <ListItem>
            <Link to={'/admin/dashboard'} className=" flex items-center gap-1">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
            </Link>
          </ListItem>
          
          <ListItem>
            <Link to={'/admin/editor'} className=" flex items-center gap-1">
            <ListItemPrefix>
              <MdEditDocument className="h-5 w-5" />
            </ListItemPrefix>
            Editor
            </Link>
          </ListItem>

          <ListItem>
            <Link className=" flex items-center gap-1">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Posts
            </Link>
          </ListItem>
          
          <ListItem onClick={handleLogout}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>

        </List>
      </Card>
    );
  }
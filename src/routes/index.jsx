import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";

const Routes = () => useRoutes(MainRoutes);
console.log("Routes", Routes);
export default Routes;

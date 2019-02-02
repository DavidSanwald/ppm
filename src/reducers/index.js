import { combineReducers } from "redux";
import projects from "./projects";
import tasks from "./tasks";
import employees from "./employees";

const reducer = combineReducers({ projects, tasks, employees });
export default reducer;

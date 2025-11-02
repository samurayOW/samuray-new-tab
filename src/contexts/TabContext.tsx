import { createContext } from "react";
import type { TabContextType } from "../interfaces/tabInterfaces";

export const TabContext = createContext<TabContextType | undefined>(undefined);

"use client";

import { Category } from "@prisma/client";

import {
    FcEngineering, // Engineering
    FcSalesPerformance, // Accounting
    FcManager, // Politics
    FcIdea, // Philosophy
    FcCommandLine, //Computer Science
    FcLibrary, // Architecture
    FcSportsMode // Fitness
} from "react-icons/fc";
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
    items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
    "Politics": FcManager,
    "Accounting": FcSalesPerformance,
    "Philosophy": FcIdea,
    "Engineering": FcEngineering,
    "Architecture": FcLibrary,
    "Computer Science": FcCommandLine,
    "Fitness":FcSportsMode
}

export const Categories = ({
    items,
}: CategoriesProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-auto pb-2">
          {items.map((item) => (
            <CategoryItem
            key={item.id}
            label={item.name}
            icon={iconMap[item.name]}
            value={item.id}
            />
          ))}
        </div>
    )
}
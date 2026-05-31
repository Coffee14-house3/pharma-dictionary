import React from "react";
import { ChemicalCompound } from "../types/chemical";
import { Button } from "./ui/button";

interface ChemicalCardProps {
  compound: ChemicalCompound;
  onClick: () => void;
}

export const ChemicalCard: React.FC<ChemicalCardProps> = ({ compound, onClick }) => {
  return (
    <div className="rounded-xl border bg-white text-gray-900 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="flex flex-col space-y-1.5 p-6 pb-3">
        <h3 className="text-lg font-bold text-indigo-800 leading-none tracking-tight">{compound.name}</h3>
        <p className="text-sm text-gray-600">{compound.formula}</p>
      </div>
      <div className="p-6 pt-0 flex-1">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium text-gray-700">Category:</span>
            <span className="text-sm text-gray-600">{compound.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium text-gray-700">Molar Mass:</span>
            <span className="text-sm text-gray-600">{compound.molarMass} g/mol</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium text-gray-700">Solubility:</span>
            <span className="text-sm text-gray-600">{compound.solubility}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center p-6 pt-0 mt-auto">
        <Button onClick={onClick} className="w-full" variant="outline">
          View Details
        </Button>
      </div>
    </div>
  );
};
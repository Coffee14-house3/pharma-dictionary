import { X } from "lucide-react";
import React from "react";
import { ChemicalCompound } from "../types/chemical";
import { Button } from "./ui/button";

interface ChemicalDetailModalProps {
  compound: ChemicalCompound | null;
  onClose: () => void;
}

export const ChemicalDetailModal: React.FC<ChemicalDetailModalProps> = ({ compound, onClose }) => {
  if (!compound) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center rounded-t-xl">
          <h2 className="text-2xl font-bold text-indigo-800">{compound.name}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-6">
          <div className="md:w-2/3 ml-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-indigo-700 mb-2">Chemical Formula</h3>
                  <p className="text-2xl font-mono text-center">{compound.formula}</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700">Physical Properties</h3>
                  <ul className="mt-2 space-y-1">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Molar Mass:</span>
                      <span className="font-medium">{compound.molarMass} g/mol</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Melting Point:</span>
                      <span className="font-medium">{compound.meltingPoint}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Boiling Point:</span>
                      <span className="font-medium">{compound.boilingPoint}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Density:</span>
                      <span className="font-medium">{compound.density}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Solubility:</span>
                      <span className="font-medium">{compound.solubility}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-700">Safety Information</h3>
                  <div className="mt-2">
                    <p className="text-gray-700"><span className="font-medium">Hazards:</span> {compound.hazards}</p>
                    <p className="text-gray-700 mt-2"><span className="font-medium">Precautions:</span> {compound.precautions}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">{compound.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Pharmaceutical Applications</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {compound.applications.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Category</h3>
                <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                  {compound.category}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 rounded-b-xl">
          <div className="flex justify-end">
            <Button onClick={onClose} className="px-6">Close</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
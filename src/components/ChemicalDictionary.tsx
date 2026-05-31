import React, { useEffect, useState } from "react";
import { ChemicalCompound } from "../types/chemical";
import { ChemicalCard } from "./ChemicalCard";
import { Button } from "./ui/button";

interface ChemicalDictionaryProps {
  compounds: ChemicalCompound[];
  onCompoundSelect: (compound: ChemicalCompound) => void;
}

export const ChemicalDictionary: React.FC<ChemicalDictionaryProps> = ({ 
  compounds, 
  onCompoundSelect 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const compoundsPerPage = 20;
  
  const indexOfLastCompound = currentPage * compoundsPerPage;
  const indexOfFirstCompound = indexOfLastCompound - compoundsPerPage;
  const currentCompounds = compounds.slice(indexOfFirstCompound, indexOfLastCompound);
  const totalPages = Math.ceil(compounds.length / compoundsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [compounds]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (compounds.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-700">No compounds found</h2>
        <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentCompounds.map((compound) => (
          <ChemicalCard 
            key={compound.id} 
            compound={compound} 
            onClick={() => onCompoundSelect(compound)} 
          />
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 space-x-2">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            variant="outline"
            size="sm"
          >
            Previous
          </Button>
          
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <Button
                key={page}
                onClick={() => handlePageChange(page)}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                className={currentPage === page ? "bg-indigo-600 text-white" : ""}
              >
                {page}
              </Button>
            );
          })}
          
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="outline"
            size="sm"
          >
            Next
          </Button>
        </div>
      )}
      
      <div className="text-center text-gray-600 mt-8">
        Showing {indexOfFirstCompound + 1} to {Math.min(indexOfLastCompound, compounds.length)} of {compounds.length} compounds
      </div>
    </div>
  );
};
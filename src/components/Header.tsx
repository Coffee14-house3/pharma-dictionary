import React, { useState } from "react";
import { Search } from "lucide-react";

interface HeaderProps {
  onSearch: (term: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-indigo-800">Pharmaceutical Chemical Dictionary</h1>
            <p className="text-gray-600 mt-2">Comprehensive database of chemical compounds used in pharmaceuticals</p>
          </div>
          
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search by name, formula, or category..."
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-indigo-600 hover:text-indigo-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};
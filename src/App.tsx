import { useMemo, useState } from "react";
import { ChemicalDetailModal } from "./components/ChemicalDetailModal";
import { ChemicalDictionary } from "./components/ChemicalDictionary";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { compounds } from "./data/compounds";
import { ChemicalCompound } from "./types/chemical";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompound, setSelectedCompound] = useState<ChemicalCompound | null>(null);

  const filteredCompounds = useMemo(() => {
    return compounds.filter(compound =>
      compound.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      compound.formula.toLowerCase().includes(searchTerm.toLowerCase()) ||
      compound.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header onSearch={setSearchTerm} />
      <main className="container mx-auto px-4 py-8">
        <ChemicalDictionary 
          compounds={filteredCompounds}
          onCompoundSelect={setSelectedCompound}
        />
      </main>
      <ChemicalDetailModal 
        compound={selectedCompound} 
        onClose={() => setSelectedCompound(null)} 
      />
      <Footer />
    </div>
  );
}

export default App;
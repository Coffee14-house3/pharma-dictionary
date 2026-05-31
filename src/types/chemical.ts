export interface ChemicalCompound {
  id: number;
  name: string;
  formula: string;
  category: string;
  molarMass: string;
  meltingPoint: string;
  boilingPoint: string;
  density: string;
  solubility: string;
  description: string;
  applications: string[];
  hazards: string;
  precautions: string;
}
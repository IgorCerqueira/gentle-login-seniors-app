
import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Unlink } from "lucide-react";

type FormActionsProps = {
  ativo: boolean;
  setAtivo: (value: boolean) => void;
  setDataDemissao: (value: string) => void;
  onCancel: () => void;
  labelText?: string;
  buttonText?: string;
};

const FormActions = ({ 
  ativo, 
  setAtivo, 
  setDataDemissao, 
  onCancel,
  labelText = "Ativo",
  buttonText = "Salvar"
}: FormActionsProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-4 border-t border-gray-200">
      <div className="flex items-center space-x-3 mb-4 md:mb-0">
        <Checkbox 
          id="ativo" 
          checked={ativo}
          onCheckedChange={(checked) => {
            setAtivo(checked as boolean);
            if (checked) setDataDemissao("");
          }}
          className="h-5 w-5 border-2 data-[state=checked]:bg-green-600"
        />
        <Label 
          htmlFor="ativo" 
          className="text-lg font-semibold text-gray-800 cursor-pointer select-none flex items-center"
        >
          {labelText}
          {/* Small icon indicating entities are not linked */}
          <Unlink className="ml-1 h-4 w-4 text-gray-400" />
        </Label>
      </div>
      
      <div className="flex space-x-4">
        <Button 
          type="button" 
          variant="outline"
          className="px-6 py-6 border-red-500 text-red-600 hover:bg-red-50 text-lg font-semibold rounded-xl"
          onClick={onCancel}
        >
          Cancelar
        </Button>
        
        <Button 
          type="submit" 
          className="px-8 py-6 bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-xl font-semibold rounded-xl"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default FormActions;

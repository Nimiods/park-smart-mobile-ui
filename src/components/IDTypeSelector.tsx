
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Card from './Card';

interface IDTypeSelectorProps {
  idType: string;
  idNumber: string;
  onIDTypeChange: (value: string) => void;
  onIDNumberChange: (value: string) => void;
}

const IDTypeSelector: React.FC<IDTypeSelectorProps> = ({
  idType,
  idNumber,
  onIDTypeChange,
  onIDNumberChange
}) => {
  return (
    <Card gradient>
      <div className="mb-4">
        <h3 className="font-medium text-gray-800 mb-3">证件类型</h3>
        <RadioGroup value={idType} onValueChange={onIDTypeChange} className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="idcard" id="idcard" />
            <Label htmlFor="idcard" className="cursor-pointer">身份证</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="medcard" id="medcard" />
            <Label htmlFor="medcard" className="cursor-pointer">就诊卡</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label htmlFor="idnumber" className="text-gray-700 mb-1 block">
          {idType === 'idcard' ? '请输入就诊者的身份证号' : '请输入就诊卡号'}
        </Label>
        <Input 
          id="idnumber"
          value={idNumber}
          onChange={(e) => onIDNumberChange(e.target.value)}
          className="input-focus"
          placeholder={idType === 'idcard' ? '身份证号码' : '就诊卡号码'}
        />
      </div>
    </Card>
  );
};

export default IDTypeSelector;

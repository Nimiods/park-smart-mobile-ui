
import React, { useState, useRef, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';
import Card from './Card';

// Province abbreviations for China
const PROVINCES = [
  '京', '津', '冀', '晋', '蒙', '辽', '吉', '黑', 
  '沪', '苏', '浙', '皖', '闽', '赣', '鲁', '豫', 
  '鄂', '湘', '粤', '桂', '琼', '渝', '川', '贵', 
  '云', '藏', '陕', '甘', '青', '宁', '新', '港', 
  '澳', '台'
];

// Letters used in license plates
const LETTERS = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 
  'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
  'W', 'X', 'Y', 'Z'
];

// Alphanumeric characters for license plates
const ALPHANUMERIC = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 
  'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
  'W', 'X', 'Y', 'Z'
];

interface LicensePlateInputProps {
  onLicensePlateChange: (licensePlate: string) => void;
}

const LicensePlateInput: React.FC<LicensePlateInputProps> = ({ onLicensePlateChange }) => {
  const [isNewEnergy, setIsNewEnergy] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [plateValues, setPlateValues] = useState(['', '', '', '', '', '', '']);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [keyboardType, setKeyboardType] = useState<'province' | 'letter' | 'alphanumeric'>('province');

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Update the parent component whenever the plate values change
  useEffect(() => {
    const fullPlate = plateValues.join('');
    onLicensePlateChange(fullPlate);
  }, [plateValues, onLicensePlateChange]);

  const handlePlateClick = (index: number) => {
    setActiveIndex(index);
    setShowKeyboard(true);
    
    // Set keyboard type based on the input position
    if (index === 0) {
      setKeyboardType('province');
    } else if (index === 1) {
      setKeyboardType('letter');
    } else {
      setKeyboardType('alphanumeric');
    }
  };

  const handleKeyPress = (key: string) => {
    const newPlateValues = [...plateValues];
    newPlateValues[activeIndex] = key;
    setPlateValues(newPlateValues);

    // Move to next input if available
    if (activeIndex < (isNewEnergy ? 7 : 6)) {
      const nextIndex = activeIndex + 1;
      setActiveIndex(nextIndex);
      
      // Update keyboard type
      if (nextIndex === 1) {
        setKeyboardType('letter');
      } else {
        setKeyboardType('alphanumeric');
      }
    }
  };

  const handleBackspace = () => {
    const newPlateValues = [...plateValues];
    newPlateValues[activeIndex] = '';
    setPlateValues(newPlateValues);

    // Move to previous input if available
    if (activeIndex > 0) {
      const prevIndex = activeIndex - 1;
      setActiveIndex(prevIndex);
      
      // Update keyboard type
      if (prevIndex === 0) {
        setKeyboardType('province');
      } else if (prevIndex === 1) {
        setKeyboardType('letter');
      } else {
        setKeyboardType('alphanumeric');
      }
    }
  };

  const handleDone = () => {
    setShowKeyboard(false);
  };

  const renderKeyboard = () => {
    let keys: string[] = [];
    
    switch (keyboardType) {
      case 'province':
        keys = PROVINCES;
        break;
      case 'letter':
        keys = LETTERS;
        break;
      case 'alphanumeric':
        keys = ALPHANUMERIC;
        break;
    }

    return (
      <div className="plate-keyboard">
        <div className="grid grid-cols-10 gap-1 mb-1">
          {keys.slice(0, 10).map((key) => (
            <button
              key={key}
              className="plate-key"
              onClick={() => handleKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
        {keyboardType === 'province' && (
          <div className="grid grid-cols-10 gap-1 mb-1">
            {keys.slice(10, 20).map((key) => (
              <button
                key={key}
                className="plate-key"
                onClick={() => handleKeyPress(key)}
              >
                {key}
              </button>
            ))}
          </div>
        )}
        {keyboardType === 'province' && (
          <div className="grid grid-cols-10 gap-1 mb-1">
            {keys.slice(20, 30).map((key) => (
              <button
                key={key}
                className="plate-key"
                onClick={() => handleKeyPress(key)}
              >
                {key}
              </button>
            ))}
          </div>
        )}
        {keyboardType === 'province' && (
          <div className="grid grid-cols-10 gap-1 mb-1">
            {keys.slice(30).map((key) => (
              <button
                key={key}
                className="plate-key"
                onClick={() => handleKeyPress(key)}
              >
                {key}
              </button>
            ))}
            {Array(10 - keys.slice(30).length).fill(0).map((_, i) => (
              <div key={`empty-${i}`} className="h-12" />
            ))}
          </div>
        )}
        {keyboardType === 'letter' && (
          <div className="grid grid-cols-10 gap-1 mb-1">
            {keys.slice(10, 20).map((key) => (
              <button
                key={key}
                className="plate-key"
                onClick={() => handleKeyPress(key)}
              >
                {key}
              </button>
            ))}
          </div>
        )}
        {keyboardType === 'letter' && (
          <div className="grid grid-cols-10 gap-1 mb-1">
            {keys.slice(20).map((key) => (
              <button
                key={key}
                className="plate-key"
                onClick={() => handleKeyPress(key)}
              >
                {key}
              </button>
            ))}
            {Array(10 - keys.slice(20).length).fill(0).map((_, i) => (
              <div key={`empty-${i}`} className="h-12" />
            ))}
          </div>
        )}
        {keyboardType === 'alphanumeric' && (
          <div className="grid grid-cols-10 gap-1 mb-1">
            {keys.slice(10, 20).map((key) => (
              <button
                key={key}
                className="plate-key"
                onClick={() => handleKeyPress(key)}
              >
                {key}
              </button>
            ))}
          </div>
        )}
        {keyboardType === 'alphanumeric' && (
          <div className="grid grid-cols-10 gap-1 mb-1">
            {keys.slice(20, 30).map((key) => (
              <button
                key={key}
                className="plate-key"
                onClick={() => handleKeyPress(key)}
              >
                {key}
              </button>
            ))}
          </div>
        )}
        {keyboardType === 'alphanumeric' && (
          <div className="grid grid-cols-10 gap-1 mb-1">
            {keys.slice(30).map((key) => (
              <button
                key={key}
                className="plate-key"
                onClick={() => handleKeyPress(key)}
              >
                {key}
              </button>
            ))}
            <div className="col-span-2"></div>
          </div>
        )}
        <div className="grid grid-cols-2 gap-1">
          <button
            className="plate-key text-medical-blue font-medium"
            onClick={handleBackspace}
          >
            退格
          </button>
          <button
            className="plate-key bg-medical-blue text-white"
            onClick={handleDone}
          >
            完成
          </button>
        </div>
      </div>
    );
  };

  return (
    <Card>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-gray-800">车牌号码</h3>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">新能源</span>
            <Switch 
              checked={isNewEnergy}
              onCheckedChange={setIsNewEnergy}
              className={isNewEnergy ? "bg-green-500" : ""}
            />
          </div>
        </div>
        
        <div className="flex space-x-1 mb-1">
          <div 
            className={`license-input-first flex items-center justify-center cursor-pointer ${activeIndex === 0 ? 'border-medical-blue ring-2 ring-medical-blue/40' : ''}`}
            onClick={() => handlePlateClick(0)}
          >
            {plateValues[0] || ' '}
          </div>
          <div 
            className={`license-input flex items-center justify-center cursor-pointer ${activeIndex === 1 ? 'border-medical-blue ring-2 ring-medical-blue/40' : ''}`}
            onClick={() => handlePlateClick(1)}
          >
            {plateValues[1] || ' '}
          </div>
          <div 
            className={`license-input flex items-center justify-center cursor-pointer ${activeIndex === 2 ? 'border-medical-blue ring-2 ring-medical-blue/40' : ''}`}
            onClick={() => handlePlateClick(2)}
          >
            {plateValues[2] || ' '}
          </div>
          <div 
            className={`license-input flex items-center justify-center cursor-pointer ${activeIndex === 3 ? 'border-medical-blue ring-2 ring-medical-blue/40' : ''}`}
            onClick={() => handlePlateClick(3)}
          >
            {plateValues[3] || ' '}
          </div>
          <div 
            className={`license-input flex items-center justify-center cursor-pointer ${activeIndex === 4 ? 'border-medical-blue ring-2 ring-medical-blue/40' : ''}`}
            onClick={() => handlePlateClick(4)}
          >
            {plateValues[4] || ' '}
          </div>
          <div 
            className={`license-input flex items-center justify-center cursor-pointer ${activeIndex === 5 ? 'border-medical-blue ring-2 ring-medical-blue/40' : ''}`}
            onClick={() => handlePlateClick(5)}
          >
            {plateValues[5] || ' '}
          </div>
          {isNewEnergy && (
            <div 
              className={`license-input flex items-center justify-center cursor-pointer ${activeIndex === 6 ? 'border-medical-blue ring-2 ring-medical-blue/40' : ''}`}
              onClick={() => handlePlateClick(6)}
            >
              {plateValues[6] || ' '}
            </div>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-1">首位为省份简称 (如: 鲁)</p>
      </div>

      {showKeyboard && renderKeyboard()}
    </Card>
  );
};

export default LicensePlateInput;

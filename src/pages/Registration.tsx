
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import IDTypeSelector from '@/components/IDTypeSelector';
import LicensePlateInput from '@/components/LicensePlateInput';
import { toast } from 'sonner';

const Registration = () => {
  const navigate = useNavigate();
  const [idType, setIdType] = useState('idcard');
  const [idNumber, setIdNumber] = useState('');
  const [licensePlate, setLicensePlate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!idNumber) {
      toast.error(idType === 'idcard' ? '请输入身份证号' : '请输入就诊卡号');
      return;
    }
    
    if (licensePlate.length < 6) {
      toast.error('请完整输入车牌号');
      return;
    }

    // Simulate API call and randomly show success or error page
    const isSuccess = Math.random() > 0.3;
    
    if (isSuccess) {
      navigate('/result/success', { 
        state: { 
          idType, 
          idNumber,
          licensePlate
        }
      });
    } else {
      navigate('/result/error');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header title="停车优惠登记" showBack={false} />
      
      <div className="content-container">
        <form onSubmit={handleSubmit}>
          <IDTypeSelector 
            idType={idType}
            idNumber={idNumber}
            onIDTypeChange={setIdType}
            onIDNumberChange={setIdNumber}
          />
          
          <LicensePlateInput onLicensePlateChange={setLicensePlate} />
          
          <Button 
            type="submit"
            className="w-full btn-primary mt-6"
          >
            立即登记
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Registration;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Info } from 'lucide-react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import { Button } from '@/components/ui/button';

const ErrorResult = () => {
  const navigate = useNavigate();
  
  // Randomly select one of two possible error messages
  const errorMessage = Math.random() > 0.5 
    ? '未查询到有效减免信息' 
    : '车辆未入场，请先入场后再试';

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header title="减免结果" />
      
      <div className="content-container">
        <Card>
          <div className="flex flex-col items-center justify-center py-6">
            <div className="flex items-center text-medical-blue mb-4">
              <Info className="h-6 w-6 mr-2" />
              <span className="font-medium text-base">{errorMessage}</span>
            </div>
            
            <p className="text-gray-500 text-sm text-center">
              如有疑问，请联系医院服务台或停车场管理员
            </p>
          </div>
        </Card>
        
        <div className="flex space-x-3 mt-6">
          <Button 
            className="flex-1 btn-secondary"
            onClick={handleBackToHome}
          >
            返回首页
          </Button>
          <Button 
            className="flex-1 btn-primary"
            onClick={handleBackToHome}
          >
            重新查询
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorResult;


import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import { Button } from '@/components/ui/button';

const SuccessResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { licensePlate } = location.state || { licensePlate: '鲁A·12345' };
  
  // Format current date for system time
  const currentTime = new Date().toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).replace(/\//g, '-');

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header title="减免结果" />
      
      <div className="content-container">
        <Card>
          <div className="status-success mb-6">
            <Check className="h-5 w-5 text-medical-success mr-1" />
            <span>符合减免条件！</span>
          </div>
          
          <div className="space-y-3">
            <div className="info-row">
              <span className="info-label">减免方式</span>
              <span className="info-value">按时长</span>
            </div>
            <div className="info-row">
              <span className="info-label">减免时长</span>
              <span className="info-value">4小时</span>
            </div>
            <div className="info-row">
              <span className="info-label">患者状态</span>
              <span className="info-value">今日门诊就医</span>
            </div>
            <div className="info-row">
              <span className="info-label">车牌号码</span>
              <span className="info-value">{licensePlate}</span>
            </div>
          </div>
          
          <div className="mt-6 text-xs text-gray-400 text-center">
            系统时间: {currentTime}
          </div>
        </Card>
        
        <Button 
          className="w-full btn-primary mt-6"
          onClick={handleBackToHome}
        >
          返回首页
        </Button>
      </div>
    </div>
  );
};

export default SuccessResult;

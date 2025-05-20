
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-medical-blue">404</h1>
        <p className="text-xl text-gray-600 mb-6">页面不存在</p>
        <Button 
          className="btn-primary px-8"
          onClick={() => navigate('/')}
        >
          返回首页
        </Button>
      </div>
    </div>
  );
};

export default NotFound;


import React from 'react';
import { ArrowLeft, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showOptions?: boolean;
  onOptionsClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack = true,
  showOptions = true,
  onOptionsClick
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="nav-bar">
      {showBack && (
        <button onClick={handleBack} className="p-1">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </button>
      )}
      <h1 className="text-base font-medium flex-1 text-center">{title}</h1>
      {showOptions && (
        <button onClick={onOptionsClick} className="p-1">
          <MoreHorizontal className="h-5 w-5 text-gray-600" />
        </button>
      )}
    </div>
  );
};

export default Header;

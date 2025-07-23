import React from 'react';
import { 
  ArrowUp, ArrowDown, ArrowLeft, ArrowRight, 
  RotateCcw, RotateCw, Pause, Play, Square,
  Volume2, Camera, Flashlight
} from 'lucide-react';

interface ControlPanelProps {
  onCommand: (command: string) => void;
  robotMode: string;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ onCommand, robotMode }) => {
  const Button: React.FC<{
    onClick: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    className?: string;
  }> = ({ onClick, children, variant = 'secondary', disabled = false, className = '' }) => {
    const baseClasses = "p-4 rounded-xl border transition-all duration-200 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variantClasses = {
      primary: "bg-cyan-500/20 border-cyan-500/30 hover:bg-cyan-500/30 text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25",
      secondary: "bg-white/5 border-white/10 hover:bg-white/10 text-white hover:shadow-lg",
      danger: "bg-red-500/20 border-red-500/30 hover:bg-red-500/30 text-red-400 hover:shadow-lg hover:shadow-red-500/25"
    };

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
      <h2 className="text-xl font-semibold mb-6 text-center">Control Panel</h2>
      
      {/* Movement Controls */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-slate-400 mb-3 uppercase tracking-wide">Movement</h3>
        <div className="grid grid-cols-3 gap-2">
};
